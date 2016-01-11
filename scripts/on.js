var mraa = require('mraa'); //cargamos la libreria mraa
var led = new mraa.Gpio(13); // cargamos en la variable led el pin 13
led.dir(mraa.DIR_OUT); //lo fijamos de salida
led.write(1); //Lo encendemos
