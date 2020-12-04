var firebaseConfig = {
    apiKey: "AIzaSyClRhA-LmQHllGWIVIRAYcC9prgD9NdD6k",
    authDomain: "let-s-chat-3aab0.firebaseapp.com",
    databaseURL: "https://let-s-chat-3aab0.firebaseio.com",
    projectId: "let-s-chat-3aab0",
    storageBucket: "let-s-chat-3aab0.appspot.com",
    messagingSenderId: "973719924314",
    appId: "1:973719924314:web:938b68efe8d1b836af3263"
  };
  firebase.initializeApp(firebaseConfig);

  User_name = localStorage.getItem("User_name");
  Room_name = localStorage.getItem("Room_Name");

  function Send(){
      message = document.getElementById("msg").value;
      firebase.database().ref(Room_name).push({
          name: User_name,
          message: message,
          like: 0 
      });

      document.getElementById("msg").value = "";
      document.getElementById("visible").value = "";
    
  }

  function getData() { firebase.database().ref("/"+Room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name = message_data["name"];
message = message_data["message"];
like = message_data["like"];

name_tag = "<h4 style='color:black;'> " + name + "<img id='tick' src='tick.png'> </h4>";
message = "<h4>" + message + "</h4>";
likes = "<button class='btn btn-warning' id=" + firebase_message_id + "onclick='update_link(this.id)' value=" + like;
likes_span = "<span class='glyphicon glyphicon-thumbs-up'> Likes : " + like + "</span></button><hr>"
main = name_tag + message + likes + likes_span;
document.getElementById("output").innerHTML = main;

//End code
 } });  }); }
getData();

function update_link(message_id){
console.log("Clicked on button " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(Room_name).child(message.id).update({
    likes: updated_likes
});
}

function Logout(){
    localStorage.removeItem("User_name");
    localStorage.removeItem("Room_Name");
    localStorage.removeItem("Display_Picture");
    window.location = "chat.html";
}



