// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyClRhA-LmQHllGWIVIRAYcC9prgD9NdD6k",
    authDomain: "let-s-chat-3aab0.firebaseapp.com",
    databaseURL: "https://let-s-chat-3aab0.firebaseio.com",
    projectId: "let-s-chat-3aab0",
    storageBucket: "let-s-chat-3aab0.appspot.com",
    messagingSenderId: "973719924314",
    appId: "1:973719924314:web:938b68efe8d1b836af3263"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  dp = localStorage.getItem("Display_Picture");
  document.getElementById("dp").src = dp;
  Username = localStorage.getItem("User_name");
  document.getElementById("name").innerHTML = "Welcome " + Username + "!";


function Logout(){
    localStorage.removeItem("User_name");
    localStorage.removeItem("Room_Name");
    localStorage.removeItem("Display_Picture");
    window.location="chat.html";
}

function AddRoom(){
    room_name = document.getElementById("Room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
    });
    localStorage.setItem("Room_Name", room_name);
    window.location = "Chatpage.html";
    document.getElementById("h4").innerHTML = "Room Added!"; 
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    row = "<div class='room_name' style= 'color:black; font-family: Comic Sans MS; font-size: 18px;' id=" + Room_names + "onclick='RedirectToChatPage(this.id)'> #" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
});});}

getData();

function RedirectToChatPage(name){
console.log(name);
localStorage.setItem("Room_Name", name);
window.location = "Chatpage.html";
}