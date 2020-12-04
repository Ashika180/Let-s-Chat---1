

function AddUser(){
  username = document.getElementById("username").value;
  localStorage.setItem("User_name", username);
  var DP = document.getElementById("avatar").src;
  localStorage.setItem("Display_Picture", DP);
  window.location = "Chat_main.html";
}

var pics = ["potterhead.jpg", "Directioner.png", "pj.jpg", "avatar.png", "selenator.png", "swifties.jpg", "walkers.jpg", "z.png", "images.jpeg"];
var text = ["Potterhead", "Directioner", "Demigod", "Avatar", "Selenator", "Swifties", "Walker", "Zquad", "Arianators"];
var i = 0;

function cpic(){
  document.getElementById("avatar").src = pics [i];  
  document.getElementById("btn").innerHTML = text[i]; i++; 
  $(".img").remove();
  images= 4 ;
         if (i > 8){
             i=0;
         }

}

