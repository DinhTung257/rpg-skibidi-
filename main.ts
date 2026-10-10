namespace SpriteKind {
    export const attack = SpriteKind.create()
    export const last_attack = SpriteKind.create()
}
namespace StatusBarKind {
    export const EnemiMagic = StatusBarKind.create()
}
function player_function () {
    Main = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ............fffff...............
        ...........f.....f..............
        ...........f.....f..............
        ...........f.....f..............
        ...........f.....f..............
        ...........f.....f..............
        ............fffff...............
        ...........222222...............
        .........222.ff.................
        .......222..cffcc...............
        ..........cceffeecc.............
        .........ceeeffeeeec............
        .........ceeeffeeeec............
        .........ceeeffeeeec............
        .........ceeeffeeeec............
        ..........ceeffeeec9............
        ...........c9ffee998............
        ............c9f9988.............
        .............8998...............
        ...........8998f9...............
        ..........898fff.9..............
        ........8998.fff................
        .......998...ffff...............
        .....998.....ffff...............
        ..888999.....ffff...............
        .999988......ffff...............
        .............ffff...............
        .............ffff...............
        `, SpriteKind.Player)
    sprites.setDataNumber(Main, "Max_health", 100)
    sprites.setDataNumber(attack2, "attack", -4)
    Main.setPosition(34, 80)
    health_bar = statusbars.create(50, 4, StatusBarKind.Health)
    health_bar.setColor(2, 1, 5)
    health_bar.attachToSprite(Main)
    health_bar.setLabel("HP", 2)
    health_bar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Main,
    assets.animation`myAnim3`,
    200,
    false
    )
    health_bar.value += 30
    pause(500)
    if (Math.percentChance(19)) {
        health_bar.value += 0
    } else if (Math.percentChance(40)) {
        animation.runImageAnimation(
        Monters,
        assets.animation`zombie skibidi`,
        200,
        false
        )
        pause(500)
        if (true) {
            health_bar.value += -30
            if (Math.percentChance(0.1)) {
                health_bar.value += -50
            }
        }
    } else if (Math.percentChance(60)) {
        animation.runImageAnimation(
        Monters,
        assets.animation`myAnim2`,
        200,
        false
        )
        pause(500)
        if (true) {
            health_bar.value += -6
            if (Math.percentChance(10)) {
                health_bar.value += -20
            }
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Main,
    assets.animation`myAnim`,
    100,
    false
    )
    pause(50)
    attack2 = sprites.createProjectileFromSprite(assets.image`protect`, Main, 300, 0)
    if (true) {
        monters_health.value += -5
    } else if (Math.percentChance(1)) {
        monters_health.value += -20
    }
    pause(1000)
    if (Math.percentChance(10)) {
        health_bar.value += 0
    } else if (Math.percentChance(40)) {
        animation.runImageAnimation(
        Monters,
        assets.animation`zombie skibidi`,
        200,
        false
        )
        pause(500)
        if (true) {
            health_bar.value += -30
            if (Math.percentChance(0.1)) {
                health_bar.value += -50
            }
        }
    } else if (Math.percentChance(60)) {
        animation.runImageAnimation(
        Monters,
        assets.animation`myAnim2`,
        200,
        false
        )
        pause(500)
        if (true) {
            health_bar.value += -5
            if (Math.percentChance(10)) {
                health_bar.value += -20
            }
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Main,
    assets.animation`myAnim0`,
    100,
    false
    )
    pause(500)
    if (true) {
        monters_health.value += -8
    } else if (Math.percentChance(36)) {
        monters_health.value += -10
    }
    pause(100)
    if (true) {
        animation.runImageAnimation(
        Monters,
        assets.animation`myAnim2`,
        200,
        false
        )
        pause(500)
        if (true) {
            health_bar.value += -6
        } else if (Math.percentChance(10)) {
            health_bar.value += -20
        }
    } else if (Math.percentChance(50)) {
        animation.runImageAnimation(
        Monters,
        assets.animation`zombie skibidi`,
        200,
        false
        )
        pause(500)
        if (true) {
            health_bar.value += -30
        } else if (Math.percentChance(0.1)) {
            health_bar.value += -50
        }
    }
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 30, function (status) {
    if (true) {
        animation.runImageAnimation(
        Monters,
        assets.animation`zombie skibidi`,
        200,
        false
        )
        pause(500)
        if (true) {
            health_bar.value += -30
            if (Math.percentChance(0.1)) {
                health_bar.value += -50
            }
        }
    }
})
function Damage_function () {
    if (("Main" as any) == ("A" as any)) {
        sprites.setDataNumber(Main, "Max_health", 100)
    }
    if (("Monters" as any) == ("B" as any)) {
        sprites.setDataNumber(Monters, "Max_health", 50)
    }
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    animation.runImageAnimation(
    Monters,
    assets.animation`gg`,
    200,
    false
    )
    pause(1500)
    sprites.destroy(Monters)
    pause(200)
    game.gameOver(true)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    animation.runImageAnimation(
    Main,
    assets.animation`main when cook`,
    500,
    false
    )
    pause(1500)
    sprites.destroy(Main)
    pause(200)
    game.gameOver(false)
})
function monter_function () {
    Monters = sprites.create(assets.image`zombie`, SpriteKind.Enemy)
    sprites.setDataNumber(Monters, "Max_health", 50)
    Monters.setPosition(127, 80)
    sprites.setDataNumber(attack2, "attack", -4)
    monters_health = statusbars.create(50, 4, StatusBarKind.EnemyHealth)
    monters_health.setColor(2, 1, 5)
    monters_health.attachToSprite(Monters)
    monters_health.setLabel("HP", 2)
    monters_health.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
}
statusbars.onStatusReached(StatusBarKind.EnemyHealth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 10, function (status) {
    if (true) {
        animation.runImageAnimation(
        Monters,
        assets.animation`zombie skibidi`,
        200,
        false
        )
        pause(500)
        if (true) {
            health_bar.value += -30
            if (Math.percentChance(0.1)) {
                health_bar.value += -50
            }
        }
    }
})
let monters_health: StatusBarSprite = null
let Monters: Sprite = null
let health_bar: StatusBarSprite = null
let attack2: Sprite = null
let Main: Sprite = null
Damage_function()
scene.setBackgroundImage(assets.image`map`)
player_function()
monter_function()
