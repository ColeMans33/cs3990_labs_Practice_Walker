export class Button {
    constructor(btnText, btnBgColor, btnTitle) {
      this.btnText = btnText;                   //used to specify the label on the button’s instance
      this.btnBgColor = btnBgColor;             //the background color of the the button’s instance
      this.btnTitle = btnTitle;                 //specifies extra information about the button’s instance
    }
  
    show() {                                    //write to webpage
        let content = `<button title="${this.btnTitle}" style="background-color:${this.btnBgColor};">${this.btnText}</button>`;
        document.write(content);
    }
  }
  