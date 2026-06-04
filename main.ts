input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 9; x++) {
        for (let y = 0; y <= 9; y++) {
            basic.showString("" + (x + 1) + "x" + (x + 1) + "=" + (x + 1 * (y + 1)))
        }
    }
})
basic.forever(function () {
	
})
