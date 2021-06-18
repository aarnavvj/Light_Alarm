input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() < 100) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
// This code senses the light level and also if the light level is low, bright lights pop up
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
