function по_черной_линии () {
    s4 = StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S4, StartbitV2.startbit_LineColor.Black)
    s3 = StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S3, StartbitV2.startbit_LineColor.Black)
    s2 = StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S2, StartbitV2.startbit_LineColor.Black)
    s1 = StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S1, StartbitV2.startbit_LineColor.Black)
    if (!(s1) && !(s4)) {
        if (s2 && s3) {
            StartbitV2.startbit_setMotorSpeed(80, 80)
        } else if (!(s2) && s3) {
            StartbitV2.startbit_setMotorSpeed(80, 30)
        } else if (s2 && !(s3)) {
            StartbitV2.startbit_setMotorSpeed(30, 80)
        } else {
        	
        }
    } else if (!(s1) && s4) {
        StartbitV2.startbit_setMotorSpeed(-20, 50)
    } else if (s1 && !(s4)) {
        StartbitV2.startbit_setMotorSpeed(50, -20)
    } else {
    	
    }
}
let s1 = false
let s2 = false
let s3 = false
let s4 = false
StartbitV2.startbit_Init()
StartbitV2.lineFollow_iic_init(StartbitV2.startbit_iic.port4)
basic.forever(function () {
    while (StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S1, StartbitV2.startbit_LineColor.White) && StartbitV2.startbit_line_followers(StartbitV2.startbit_LineFollowerSensors.S4, StartbitV2.startbit_LineColor.White)) {
        по_черной_линии()
    }
    StartbitV2.startbit_setMotorSpeed(0, 0)
    basic.pause(2000)
})
