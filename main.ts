function redlight () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(5000)
}
function yellowlight () {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(5000)
}
function greenlight () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(5000)
}
let strip: neopixel.Strip = null
// creates an object variable called 'strip' which helps the micro:bit know which component (ZipHalo) to control
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
// set between 0 and 255
strip.setBrightness(25)
let choice = 0
// while loop
basic.forever(function () {
    // "calls" and runs the 'redlight' function block
    redlight()
    yellowlight()
    greenlight()
})
