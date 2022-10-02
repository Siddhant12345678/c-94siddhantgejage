const firebaseConfig = {
    apiKey: "AIzaSyA-sZfbtgOswSgk7vKGceA_-RzXAFyytkI",
    authDomain: "letschat-f7e28.firebaseapp.com",
    databaseURL: "https://letschat-f7e28-default-rtdb.firebaseio.com",
    projectId: "letschat-f7e28",
    storageBucket: "letschat-f7e28.appspot.com",
    messagingSenderId: "591624066367",
    appId: "1:591624066367:web:c157fc48478e94f587ef8a"
  };
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      var username=document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
     });
  }