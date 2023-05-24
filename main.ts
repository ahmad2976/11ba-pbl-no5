let IR = 0
let ultrasonic = 0
let stature = 0
basic.forever(function () {
    IR = pins.digitalReadPin(DigitalPin.P13)
    if (IR == 1) {
        ultrasonic = Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
        stature = 200 - ultrasonic
        basic.showNumber(stature)
    }
})
