









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
// __________Gender select



   function SelectGender(typeG){
      if(typeG === "male"){
         document.getElementById("label").value="Male"
        }

   }

//__________ password buttion

var getId=document.getElementById("typeid");

var buttonId=document.getElementById("buttonChange");


function longNum(){
    if(getId.value.length < 8){
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





