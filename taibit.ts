//% weight=110 color=#bd970f icon="\uf0e7"
namespace TaiBit {
    /** function */
    function delay_LED(item: number) {
        led.plot(item, 2)
        basic.pause(200)
        led.unplot(item, 2)
    }

    /**
      * Show LED Matrix to back and forth => run for many times
      * @param ts describe parameter here, eg: 100
    */
    //% weight=100 blockId="id_delayleds" block="delayleds for times | %ts"
    export function delayleds(ts: number) {
        while (ts > 0) {
            for (let i = 0; i <= 4; i++) {
                delay_LED(i)
            }
            for (let i = 4; i >= 0; i--) {
                delay_LED(i)
            }
            ts = ts - 1
        }
    }

    /** function - Vibration Motor */
    function vibration_Motor(sw: number) {
        if (sw > 1) {
            return
        }
        pins.digitalWritePin(DigitalPin.P12, sw)
    }

    /**
      * Control Vibration Motor (pin12) => on | off
      * @param to describe parameter here, eg: 0
    */
    //% weight=90 blockId="id_vibrationmotor" block="vibration motor | %to"
    export function vibrationMotor(to: number) {
        vibration_Motor(to)
    }

    /**
      * Control Vibration Motor (pin12) => pause millisecond
      * @param ms describe parameter here, eg: 100
    */
    //% weight=80 blockId="id_vibrationmotorpause" block="vibration motor pause (ms)| %ms"
    export function vibrationMotorPause(ms: number) {
        vibration_Motor(1)
        basic.pause(ms)
        vibration_Motor(0)
    }

} 
