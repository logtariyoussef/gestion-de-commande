//const { clear } = require("console");

/*
const forms= document.querySelector(".form");
      pwShowHide= document.querySelectorAll(".eye-icon");
      links= document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide","bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show","bx-hide");

        })
    })
    
});
*/

let userTab=[];




//local storage for signup
function signup(event){
    event.preventDefault();
    let email = document.getElementById("input").value;//get the emailvalue
    let pass = document.getElementById("password").value;//get the password value
    let userName = document.getElementById("user-name").value;//get the username value
  
    let user = {
        userName : userName,
        email : email,
        password : pass,
       
    };
    userTab.push(user);
    //console.log(userTab);
    
   reset();



    
    let json = JSON.stringify(userTab); //convert user object to string
   //console.log(json);
    localStorage.setItem('userData',json);//build localstorage with userData as a key and json as a value
    //console.log(localStorage.getItem('userData'));
       
}   

//localStorage.clear();

//reset function for login

function reset(){
    document.getElementById("user-name").value='';
    document.getElementById("input").value='';
    document.getElementById("password").value='';
   
}



function login(event){
  event.preventDefault();
  let email=document.getElementById('input1').value;
  let pass=document.getElementById('password1').value;
  let btn2=document.getElementById('btn2');
  let user=localStorage.getItem('userData');

  let data=JSON.parse(user);
  //console.log(data);
  if(email===data.email&&pass===data.password){
    btn2.lastChild.setAttribute('href','index.html');
     //return true;
  }else{
     alert(error);
  }
}

 







/*
 //get the user from local storage

 function getUserStorage(){
    return localStorage.getItem('userData')?JSON.parse(localStorage.getItem('userData')) :[];
    // returns empty array if there is not any user
  }*/