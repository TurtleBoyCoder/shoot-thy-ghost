controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 3 3 3 3 . . . . . . . 
        . . . . 3 3 3 2 3 . . . . . . . 
        . . . . 3 3 3 3 3 . . . . . . . 
        . . . . 3 2 2 2 3 . . . . . . . 
        . . . . 3 3 3 9 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, choo_choo, -100, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 3 3 3 3 . . . . . . . 
        . . . . 3 3 3 2 3 . . . . . . . 
        . . . . 3 3 3 3 3 . . . . . . . 
        . . . . 3 2 2 2 3 . . . . . . . 
        . . . . 3 3 3 9 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, choo_choo, 100, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    evil_ghost.setPosition(randint(10, 160), randint(10, 120))
    info.changeScoreBy(1)
    info.startCountdown(10)
    boolEvilGhostMove = 1
    while (boolEvilGhostMove == 1) {
        if (choo_choo.x > evil_ghost.x) {
            evil_ghost.x += 8
        } else if (choo_choo.x < evil_ghost.x) {
            evil_ghost.x += -8
        } else {
        	
        }
        if (choo_choo.y > evil_ghost.y) {
            evil_ghost.y += 5
        } else if (choo_choo.y < evil_ghost.y) {
            evil_ghost.y += -5
        } else {
        	
        }
        pause(1000)
    }
    music.baDing.play()
})
info.onCountdownEnd(function () {
    effects.smiles.endScreenEffect()
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.over(false)
    evil_ghost.say("ha! I win!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    choo_choo.setPosition(80, 60)
})
let boolEvilGhostMove = 0
let projectile: Sprite = null
let evil_ghost: Sprite = null
let choo_choo: Sprite = null
scene.setBackgroundColor(8)
choo_choo = sprites.create(img`
    . . . . . 2 3 3 3 3 . . . . . . 
    . . . . . 3 3 3 2 3 . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . 3 2 2 2 3 . . . . . . 
    . . . . . 3 3 3 9 3 . . . . . . 
    . . . . . 7 7 5 9 7 . . . . . . 
    . . 5 5 7 7 7 7 7 7 7 5 5 . . . 
    . . 5 . 7 7 7 5 7 7 7 . 5 . . . 
    . 5 5 . 7 7 7 7 7 7 7 . 5 5 . . 
    . 5 . . . 7 7 5 7 7 . . . 5 . . 
    3 3 3 . . . 6 . 6 . . . 3 3 3 . 
    . 3 . . . . 6 . 6 . . . . 3 . . 
    . . . . . . 6 . 6 . . . . . . . 
    . . . . . 6 6 . 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(choo_choo)
evil_ghost = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ....7.fd11111111df......
    ...7..fd11111111df......
    ...7..fd11111111df......
    ...7..fddd1111dddff.....
    ...77.fbdbfddfbdbfcf....
    ...777fcdcf11fcdcfbf....
    ....77fffbdb1bdffcf.....
    ....f77777ffffff........
    ....f77777ffffff........
    ....f7f7f7fffff.........
    .....f.f.f..............
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
evil_ghost.setPosition(randint(10, 160), randint(10, 120))
info.setLife(5)
info.setScore(0)
