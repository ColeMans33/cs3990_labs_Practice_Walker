import {Button} from './myButton.js';
import {arrTexts, arrColors} from './myArrays.js';

export let arrButtons = [];

export function generateButtons() {                    //create button instances
  arrTexts.forEach((text, index) => {
    const color = arrColors[index];
    const title = `${text} is shown on the ${color} background`;
    const btn = new Button(text, color, title);
    arrButtons.push(btn);
  });
}

export function buttonPrinter() {                //Prinnts the buttons onto the page with a delay  
  arrButtons.forEach((btn, index) => {
    setTimeout(() => {
      btn.show();
    }, index * 10000); //10 second delay between each button
  });
}
