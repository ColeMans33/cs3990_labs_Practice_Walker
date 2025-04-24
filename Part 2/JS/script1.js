// Component class for a color button
class ColorButton {
  constructor(color) {
    this.color = color;
  }

  render() {
    const btn = document.createElement("div");       //dom and styling for the color "buttons"
    btn.className = "color-btn";
    btn.style.backgroundColor = this.color;
    btn.style.width = "30px";
    btn.style.height = "30px";
    btn.style.margin = "2px";
    btn.style.border = "1px solid black";
    btn.setAttribute("data-color", this.color);
    return btn;
  }
}

class PaletteMenu {
  constructor(paletteId, targetId) {
    this.palette = document.getElementById(paletteId);
    this.target = document.getElementById(targetId);

    this.init();
  }

  init() {                                        //parent listener
    this.palette.addEventListener("click", this); 
    this.palette.addEventListener("mouseover", this);
    this.palette.addEventListener("mouseout", this);
  }


  handleEvent(event) {
    if (!event.target.classList.contains("color-btn")) return;   //Not a color button, get on out of here

    const color = event.target.getAttribute("data-color");

    switch (event.type) {
      case "click":
        this.target.style.color = color;
        break;
      case "mouseover":
        this.target.style.backgroundColor = color;
        break;
      case "mouseout":
        this.target.style.backgroundColor = "";
        break;
    }
  }


}

// Generates and displays the full color palette
function generateColorPalette() {
  const colors = [
    "black", "grey", "maroon", "red", "orange", "yellow", "green", "teal", "blue",
    "white", "lightgrey", "brown", "lightpink", "lightyellow", "lightgreen", "lightblue", "navy", "olive"
  ];

  const paletteContainer = document.getElementById("palette");

  colors.forEach((color) => {
    const btn = new ColorButton(color);
    paletteContainer.appendChild(btn.render());
  });


  new PaletteMenu("palette", "colorText");
}

                                      //hit em with it
window.onload = generateColorPalette;
