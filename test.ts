// tests go here; this will not be compiled when this package is used as a library
let x = 0
let y = 0
let index = 0
input.onButtonPressed(Button.B, () => {
    VT100.fn_hideCursor()
    for (let index = 0; index <= 7; index++) {
        VT100.fn_setDisplay(0, index + 40, 30)
        VT100.fn_eraseScreen()
        basic.pause(1000)
    }
    VT100.fn_setDisplay(0, 40, 30)
    VT100.fn_eraseScreen()
    basic.pause(1000)
    VT100.fn_setDisplay(0, 44, 30)
    VT100.fn_eraseScreen()
    basic.pause(1000)
    VT100.fn_setDisplay(0, 47, 30)
    VT100.fn_moveTo(1, 12)
    VT100.fn_eraseLine()
    basic.pause(1000)
    VT100.fn_setDisplay(0, 45, 30)
    VT100.fn_moveTo(1, 13)
    VT100.fn_eraseDown()
    basic.pause(1000)
    VT100.fn_setDisplay(0, 40, 30)
    VT100.fn_eraseScreen()
    basic.pause(1000)
    for (let y = 0; y <= 7; y++) {
        for (let mode = 0; mode <= 1; mode++) {
            VT100.fn_moveTo(1, 1 + mode + 2 * y)
            for (let x = 0; x <= 7; x++) {
                VT100.fn_setDisplay(mode, y + 40, x + 30)
                VT100.fn_showText("micro:bit")
            }
        }
    }
    basic.pause(1000)
    VT100.fn_setDisplay(1, 40, 30)
    VT100.fn_eraseScreen()
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            VT100.fn_moveTo(2 * x + 2, 2 * y + 2)
            VT100.fn_showAscii(219)
        }
    }
    basic.pause(1000)
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            VT100.fn_moveTo(2 * x + 2, 2 * y + 2)
            VT100.fn_setDisplay(0, 40, 31)
            VT100.fn_showAscii(219)
            basic.pause(200)
            VT100.fn_moveTo(2 * x + 2, 2 * y + 2)
            VT100.fn_setDisplay(1, 40, 30)
            VT100.fn_showAscii(219)
        }
    }
    basic.pause(1000)
    VT100.fn_setDisplay(1, 44, 37)
    VT100.fn_eraseScreen()
    basic.pause(1000)
    for (let index = 0; index <= 255; index++) {
        VT100.fn_moveTo(index % 80 + 1, index / 80 + 1)
        VT100.fn_showAscii(index)
    }
    basic.pause(1000)
    VT100.fn_setDisplay(0, 47, 34)
    VT100.fn_moveTo(10, 12)
    VT100.fn_showText("Check out more \"micro:bit + VT100\" videos on my YouTube channel!")
    basic.pause(4000)
    VT100.fn_setDisplay(0, 40, 30)
    for (let index = 0; index <= 23; index++) {
        VT100.fn_moveTo(0, 24 - index)
        VT100.fn_eraseLine()
        basic.pause(100)
    }
})
