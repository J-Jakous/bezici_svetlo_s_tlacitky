input.onButtonPressed(Button.A, function () {
    xStart = 4
    yStart = 4
    xPridej = -1
    yPridej = -1
})
input.onButtonPressed(Button.B, function () {
    xStart = 0
    yStart = 0
    xPridej = 1
    yPridej = 1
})
let x = 0
let y = 0
let yPridej = 0
let xPridej = 0
let yStart = 0
let xStart = 0
xStart = 0
yStart = 0
xPridej = 1
yPridej = 1
basic.forever(function () {
    y = yStart
    for (let index = 0; index < 5; index++) {
        x = xStart
        for (let index = 0; index < 5; index++) {
            led.plot(x, y)
            basic.pause(100)
            x += xPridej
            basic.clearScreen()
        }
        y += yPridej
    }
})
