import {Button} from './myButton.js';

export class ColorButton extends Button {
  constructor(btnText, btnBgColor, btnTitle, fColor) {
    super(btnText, btnBgColor, btnTitle);
    this.fColor = fColor;
  }

  show() {
    let content = `<button title="${this.btnTitle}" style="background-color:${this.btnBgColor}; color:${this.fColor};">${this.btnText}</button>`;
    document.write(content);
  }
}
