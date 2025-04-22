class btnColor{
  constructor(colorName)
  {
    this.bgColor=colorName;
  }

  show=()=>{
    let btn=document.createElement("button");
    btn.id=`btn${this.bgColor}`;
    btn.innerHTML=this.bgColor;
    btn.style.backgroundColor=this.bgColor;
    document.getElementById("colors").append(btn);
  }
}

class Fruit{
  constructor(fruitName, fruitColor)
  {
    this.label=fruitName;
    this.bgColor=fruitColor;
  }

  show=()=>{
    let liElem=document.createElement("li");
    liElem.id=`fruit_${this.label}`;
    liElem.classList.add(this.bgColor);
    liElem.innerHTML=this.label;
    document.getElementById("fruits").append(liElem);
  }
}


class RatedFruit extends Fruit {
  constructor(fruitName, fruitColor, rating = 3) {
    super(fruitName, fruitColor);
    this.rating = rating;
  }


  show = () => {
    let liElem = document.createElement("li");
    liElem.id = `fruit_${this.label}`;
    liElem.classList.add(this.bgColor);
    liElem.innerHTML = `${this.label}: `;            //same as super class so fare

    liElem.innerHTML = `${this.label}: Star Rating:`;


    for (let i = 1; i <= 5; i++) {
      let star = document.createElement("span");
      star.classList.add("star");
      star.innerHTML = "*";
      star.dataset.value = i;
      if (i <= this.rating) {
        star.classList.add("gold");
      }
      liElem.appendChild(star);
    }

    document.getElementById("fruits").append(liElem);
  }
  


}


let listColors=['red','green','blue'];

let theFruits=[
  { fruit:"apple",
    color:"red"
  },
  { fruit:"pear",
    color:"green"
  },
  { fruit:"mango",
    color:"red"
  },
  { fruit:"plum",
    color:"blue"
  }
]

let start=()=>{
  listColors.forEach(
    elem=>{
      let newColorBtn=new btnColor(elem);
      newColorBtn.show();
    }
  )

  theFruits.forEach(
    elem=>{
      let newFruit= new RatedFruit(elem.fruit, elem.color);
      newFruit.show();
    }
  )


}

start();


