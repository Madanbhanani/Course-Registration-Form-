

function selectCourse(TyPE){
    if(TyPE === "web"){
        document.getElementById('Qustion_pera').innerHTML="why you Select web Development ?"
    }

    else if(TyPE === "mobile"){
        document.getElementById('Qustion_pera').innerHTML="why you Select Mobile App ?"
    }
    else if(TyPE === "graphic"){
        document.getElementById('Qustion_pera').innerHTML="why you Select Graphic Design ?"
    }
    var A=document.getElementById('Web').value;
}


//_______ city code

function selectCity(){
    var x=document.getElementById("select").value;
     if(x === "Diplo"){
        document.getElementById("Typenumber").value="69280"
    }
    else if(x === "Mithi"){
        document.getElementById("Typenumber").value="69230"
    }
    else if(x === "Islamkot"){
        document.getElementById("Typenumber").value="69240"
    }
  
}

//__________ password buttion

var getId=document.getElementById("typeid");

var buttonId=document.getElementById("buttonChange");


function longNum(){
    if(getId.value.length > 13){
        alert("password length Less then 13");
        getId.value=""
    }
}

function changetype(hide){

    if(getId.type === "text"){
        getId.type = "password"
        document.getElementById("buttonChange").src="./icons8-hide-password-30.png"
    }
    else{
        getId.type = "text"
        document.getElementById("buttonChange").src="./eye-solid.svg"
    }
}

    var Name=document.getElementById("Name");
    var fName=document.getElementById("text-fName");
    var Contact=document.getElementById("Contact");
    var email=document.getElementById("email");
    var password=document.getElementById("typeid");
    var cityCode=document.getElementById("Typenumber");
    var textArea=document.getElementById("textarea")

function sedData(){
    
      if(Name.value !== "" && fName.value !== "" && Contact.value !== "" &&
        email.value !== "" && password.value !== "" && cityCode.value !== "" && textArea.value !== ""
      ){
        var xInput=document.getElementById("form");
         xInput.setAttribute("action","./submitpage/index.html");
      }
      else{
        alert("pleaase Enter data")
      }



  
}


