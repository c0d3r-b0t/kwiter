
  var firebaseConfig = {
    apiKey: "AIzaSyBaGErbTn5h7t0YH-Mryvk5hWA5hM38Wh8",
    authDomain: "kwitter-app-efa35.firebaseapp.com",
    projectId: "kwitter-app-efa35",
    databaseURL: "https://kwitter-app-efa35-default-rtdb.firebaseio.com",
    storageBucket: "kwitter-app-efa35.appspot.com",
    messagingSenderId: "879298838709",
    appId: "1:879298838709:web:294c44645e60882b9bfefc"
  };
 
  firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("username");
 room_name=localStorage.getItem("roomname");
 document.getElementById("username").innerHTML="Welcome "+user_name+"!";

function getData()
{
  firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("roomname-"+ Room_names);
     row      
 console.log()
      //End code
      });});}


function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";

}

function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location="index.html";
}

function addroom(){
  room_name=document.getElementById("roomname").value;

  firebase.database().ref("/").child(room_name).update({
    purpose:"adding roomname"
  });
  localStorage.setItem("roomname",room_name);
  window.location="kwitter_page.html";
}
