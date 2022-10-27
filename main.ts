input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let dx = 1
let x_value = 0
let y_value = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        x_value += dx
        basic.clearScreen()
        led.plot(x_value, y_value)
        basic.pause(200)
    }
    if (input.buttonIsPressed(Button.B)) {
        y_value += 1
        basic.clearScreen()
        led.plot(x_value, y_value)
        basic.pause(200)
    }
    if (x_value > 4) {
        dx = -1
    }
    if (x_value < 0) {
        dx = 1
    }
    if (y_value > 4) {
        y_value = -1
    }
})
