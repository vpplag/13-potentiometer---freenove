let Voltage = 0
basic.forever(function () {
    Voltage = pins.analogReadPin(AnalogPin.P0) / 1023 * 3.3
    led.plotBarGraph(
    Voltage,
    3.3
    )
    basic.pause(10)
})
