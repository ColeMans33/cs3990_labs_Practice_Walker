

let LogIn=()=>{

    let userType=prompt("Insert username","admin");
    
        let i = 0; //declare for loop checks later
        if (userType.toLowerCase()=="admin") {               
            for (i=0; i<2; i++){           //admin case 2 attempts
            let adminPassword=prompt("Insert password","type here");
            if (adminPassword==passwordGenerator()) { //password check vs random password
                adminPage();                           //admin content
                break;
                } else if (adminPassword==111111){       //for testing purposes
                    adminPage();
                    break;
                    } else {
                        alert(`Wrong password! ${1-i} attempts left!`)
                    }
            }
            if (i>=2) {
                alert("You have exceeded the number of attempts! Access denied!");
            }
        } else if (userType.toLowerCase()=="designer") {
                for(i = 0; i<3; i++){                       //designer case
                    let designerPassword=prompt("Insert password","type here");
                    if (designerPassword==111) { //password check
                        designerPage();
                        break;
                    } else {
                        alert(`Wrong password! ${2-i} attempts left!`)
                    }
                }
                if (i>=3) {
                    alert("You have exceeded the number of attempts! Access denied!");
                }
        } else if (userType.toLowerCase()=="tester") {
                for(i = 0; i<3; i++){                       //tester case
                    let testerPassword=prompt("Insert password","type here");
                    if (testerPassword==222) { //password check
                        testerPage();
                        break;
                    } else {
                        alert(`Wrong password! ${2-i} attempts left!`);
                    }
                }
                if (i>=3) {
                    alert("You have exceeded the number of attempts! Access denied!");
                }
        } else {
            alert("No such user.")
        }

    
 

    

}

let adminPage=()=>{
    let age =prompt("Insert your age","type here");
    let admissionYear =prompt("Insert your admission year","type here");
    let currentYear = new Date().getFullYear(); //gets current year
    gradYear = parseInt(admissionYear) + 4; 
    futureAge = parseInt(age) + (gradYear - currentYear); //calculates future age

    alert(`In the year ${gradYear}, you will be ${futureAge} years old and receive a bachelor's degree in CS.`);
}

let designerPage=()=>{
    let portfolios = prompt("Enter the number of available portfolios:", "type here");
    let birthYear =prompt("Enter your year of birth:", "type here");

    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    if ((age >= 14 && age <= 18) && (portfolios >= 5 && portfolios <= 10)) {
        alert("You are eligible for a 10% discount on an optional course on Adobe XD");
    } else if (age > 18 && portfolios >= 10 && portfolios <= 20) {
        alert("You are eligible for a 7% discount on an optional course on Adobe XD");
    } else {
        alert("You are not eligible for a discount on the Adobe XD course.");
    }
}

let testerPage=()=>{
    let portfolios = prompt("Enter the number of available portfolios:", "type here");
    let birthYear =prompt("Enter your year of birth:", "type here");

    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    if ((age >= 14 && age <= 18) && (portfolios >= 5 && portfolios <= 10)) {
        alert("You are eligible for a 10% discount on an optional course on QA Pro");
    } else if (age > 18 && portfolios >= 10 && portfolios <= 20) {
        alert("You are eligible for a 7% discount on an optional course on QA Pro");
    } else {
        alert("You are not eligible for a discount on the QA Pro course.");
    }
}



let passwordGenerator=()=>{
    let genPassword = "";
    for(let i=0; i<6; i++){
        genPassword += parseInt(Math.random()* 9);

    }
    
    return genPassword;
}