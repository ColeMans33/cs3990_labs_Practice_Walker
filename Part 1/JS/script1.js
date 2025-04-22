class NumberGenerator {
  constructor (btnText, numRange, numStep, styleClass)
  {
    this.btnText=btnText;
    this.min=numRange[0];
    this.max=numRange[1];
    this.numStep=numStep;
    this.styleClass=styleClass;
  }

  getRndInteger=()=>Math.floor(Math.random() * (this.max - this.min + 1) ) + this.min;

  show=()=>{
    let newContent=document.createElement("section");
    newContent.id="RndIntSection";
    newContent.classList.add(this.styleClass);
    document.getElementById("myMain").append(newContent);


    let newNumber=document.createElement("span");
    newNumber.id="RndInt";
    newNumber.innerHTML=this.getRndInteger();

    let btnGenerator=document.createElement("button");
    btnGenerator.id="RndIntegerGenerator";
    btnGenerator.innerHTML = this.btnText;
    btnGenerator.onclick=()=>{
      document.getElementById("RndInt").innerHTML=this.getRndInteger();
      newsGenerator(document.getElementById("NewsDiv"),parseInt(document.getElementById("RndInt").innerHTML));
    };

    let btnLess=document.createElement("button");
    btnLess.id="decVal";
    btnLess.innerHTML='<i class="material-icons">file_download</i>';
    btnLess.onclick=()=>{
      document.getElementById("RndInt").innerHTML=parseInt(document.getElementById("RndInt").innerHTML)-1;
      newsGenerator(document.getElementById("NewsDiv"),parseInt(document.getElementById("RndInt").innerHTML));
    };

    let btnGreater=document.createElement("button");
    btnGreater.id="incVal";
    btnGreater.innerHTML='<i class="material-icons">file_upload</i>';
    
    btnGreater.classList.add("fa-solid");
    btnGreater.classList.add("fa-angles-right"); 
    btnGreater.onclick=()=>{
      document.getElementById("RndInt").innerHTML=parseInt(document.getElementById("RndInt").innerHTML)+1;
      newsGenerator(document.getElementById("NewsDiv"),parseInt(document.getElementById("RndInt").innerHTML));
    };

    let NewsDiv=document.createElement("div");
    NewsDiv.id="NewsDiv";
    
    document.getElementById("RndIntSection").append(btnLess);
    document.getElementById("RndIntSection").append(newNumber);
    document.getElementById("RndIntSection").append(btnGreater);
    document.getElementById("RndIntSection").append(btnGenerator);
    document.getElementById("RndIntSection").append(NewsDiv);

    newsGenerator(document.getElementById("NewsDiv"),parseInt(document.getElementById("RndInt").innerHTML));
  }

}

let newsGenerator=(parentElem,n)=>{
  parentElem.innerHTML="";
  for (let i=0; i<n;i++)
  {
    let newDiv=document.createElement("div");
    newDiv.id="div"+i;
    

    let newHeader=document.createElement("h3");
    newHeader.innerHTML=`Title #${i+1}`;
    newDiv.append(newHeader);


    let newText=document.createElement("p");
    newText.innerHTML="Lorem Ipsum originated as early as 45 BC when Roman scholar Marcus Tullius Cicero wrote De Finibus Bonorum et Malorum (On the Boundaries of Good and Evil). This treatise discusses various philosophical topics including ethics and politics.";
    newDiv.append(newText);

    let newBtn=document.createElement("button");
    newBtn.innerHTML="Remove &#128465";
    newDiv.append(newBtn);

    newBtn.onclick=(event)=>{
      let removed=event.currentTarget.parentElement;
      let p=removed.parentElement;
      p.removeChild(removed);      
    }
    parentElem.append(newDiv);
  }


}


let start=()=>{
  let thePage= new NumberGenerator('Make your number now!',[0,100], 1,"myred");
  thePage.show();
}

start();