strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.set_brightness(128)

def on_forever():
    strip.show_color(neopixel.colors(NeoPixelColors.RED))
    strip.show()
    basic.pause(1000)
    strip.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    strip.show()
    basic.pause(1000)
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
    strip.show()
    basic.pause(1000)
basic.forever(on_forever)
