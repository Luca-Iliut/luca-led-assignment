function initvar () {
    offlights = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    onlights = []
    OnOff = true
}
input.onButtonPressed(Button.A, function () {
    Turnonlight()
})
function Turnonlight () {
    picked = randint(0, offlights.length - 1)
    picked = offlights.removeAt(picked)
    led.plot(picked % 5, picked / 5)
    onlights.push(picked)
    if (offlights.length == 0) {
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        OnOff = false
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("RESET")
    initvar()
})
input.onButtonPressed(Button.B, function () {
    Turnofflight()
})
function Turnofflight () {
    picked = onlights.shift()
    led.unplot(picked % 5, picked / 5)
    offlights.push(picked)
    if (onlights.length == 0) {
        basic.pause(200)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        OnOff = true
    }
}
let picked = 0
let OnOff = false
let onlights: number[] = []
let offlights: number[] = []
initvar()
