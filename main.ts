let x_value = 0
let y_value = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        x_value += 1
    }
    if (input.buttonIsPressed(Button.B)) {
        y_value += 1
    }
    if (x_value > 4) {
        x_value = 0
    }
    if (y_value > 4) {
        y_value = 0
    }
})
