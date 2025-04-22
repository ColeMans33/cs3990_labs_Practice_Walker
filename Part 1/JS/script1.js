
let LogIn=()=>{
  let userType=prompt("Who are you?","student");  //ask who the user is, autofill with student

  if (userType.toLowerCase()=="admin") {                          //admin case
    content="<button onclick='adminHello()'>Say Hi</button>" +
    "<button onclick='adminAnimal()'>Favorite Animal</button>";
  } 
  else if (userType.toLowerCase()=="student") {                   //student case 
    content="<button onclick='studentHello()'>Say Hi</button>";
  } 
  else {                                                            //stranger case
    content="<p onclick='strangerContent()'>I don't know you</p>";
  }

  document.write(content);
}


let studentHello=()=>{
  let language = prompt("Enter your language please! (Eng, Fr, De, Spa):"); //asking for language
  
  let greeting = greetingsSwitch(language);  //put the switch case into a function because its reused in adminHello
  
  alert(greeting);
}

let adminHello=()=>{                                                          //same as studentHello but for admin, in case we change just for admin
  let language = prompt("Enter your language please! (Eng, Fr, De, Spa):");
  
  let greeting = greetingsSwitch(language);
  
  alert(greeting);
  
}


function greetingsSwitch(lang) { //used in admin and student ghello
                                  //returns hello string in the lanuage the user inputs
  switch (lang.toLowerCase()) {  //not case sensitive
    case "eng":
      return "Hello";

    case "fr":
      return "Bonjour";

    case "de":
      return "Hallo";

    case "spa":
      return "Hola";

    default:
      return "Sorry, but I don't speak your language.";
  }                                                     

}


let adminAnimal=()=>{
  const d = new Date();
  let year = d.getFullYear();                           //gets current year
  let age = prompt("Please enter your year of birth:");
  age = year-age;                                       //calculate age

  if ((age > 18) && (age < 55)) {
    document.write('<img src="images/dog.jpg" style="width:300px; height:auto;">');         //show dog picture
    
    setTimeout(() => {                                                                    //timeout to allow dog picture to show
      let animal = prompt("What is the name of the animal? (Cat, Dog, Frog, Mouse)");     //names new animal and adds to the screen
      

      switch (animal.toLowerCase()) {
        case "cat":
          document.write('<img src="images/cat.jpg" style="width:300px; height:auto;">');
          break;
        case "dog":
          document.write('<img src="images/dog.jpg" style="width:300px; height:auto;">');
          break;
        case "frog":
          document.write('<img src="images/frog.jpg" style="width:300px; height:auto;">');
          break;
        case "mouse":
          document.write('<img src="images/mouse.jpg" style="width:300px; height:auto;">');
          break;
        default:
          alert("Sorry, I don't know this animal.");
          break;
      }
    }, 1000); 

  } else if (age < 18) {
      alert("Content is not available due to age restrictions");
    } else if (age > 55) {
      document.write('<p>Much like mathematics, programming is a logico-deductive system. ' +
                     'And I think the important point that I am making is that in a purely ' +
                     'logico-deductive system there is no philosophy - everything is known. ' +
                     'However, insofar as there is art in mathematics, there is philosophy ' +
                     'in mathematics. Insofar as there is art in programming, ' +
                     'there is philosophy in programming.</p>');
  }


  
}




