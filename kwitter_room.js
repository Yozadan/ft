
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBy-cIoQKRiX1r2wXsPkCTabjb8rPe50LU",
      authDomain: "let-s-chat-e0c49.firebaseapp.com",
      databaseURL: "https://let-s-chat-e0c49-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-e0c49",
      storageBucket: "let-s-chat-e0c49.appspot.com",
      messagingSenderId: "130988016189",
      appId: "1:130988016189:web:b8ea904ded4f8c4cdce054"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
