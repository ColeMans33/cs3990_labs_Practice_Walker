import {generateButtons, buttonPrinter} from './myFunctions.js';
import {ColorButton} from './myColorButton.js';

function runTime() {


generateButtons();
buttonPrinter();

const specialButton = new ColorButton("Color", "Teal", "Color Button is shown on the white background", "white");
specialButton.show();

}

runTime();
