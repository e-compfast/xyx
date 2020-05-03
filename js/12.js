var config = {
 apiKey: "AIzaSyCGYVzjbWT6T7hM1A4igOrAinTeftjNHfg",
 authDomain: "p-storegames.firebaseapp.com",
 databaseURL: "https://p-storegames.firebaseio.com",
 projectId: "p-storegames",
 storageBucket: "p-storegames.appspot.com",
 messagingSenderId: "915487478207",
 appId: "1:915487478207:web:e220bc95c221528edd910a",
 measurementId: "G-96SM2ED4XM"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
var db = firebase.database();
var dbRef = db.ref("/");
var gamess = dbRef.child("182153/games/12");

// MENDAPATKAN SALAH SATU DIRECTORY GAMES BERDASARKAN ID
 gamess.on("value", snap =>{
 	var kunci = snap.key;
 	var data = snap.val();
 	var root = data.root_game;
 	var init = data.game_init;
 	var nama = data.game_name;
 	 location.href = init + root;
 });

 document.onkeydown = function(e) {
 function securityEl(){
   var delem = {};
         delem.marco = setTimeout(function() {
           $('body').remove();
         }, 500);
 }

   if(e.keyCode == 123) {
     securityEl();
      return false;
   }

   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     securityEl();
      return false;
   }
   if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     securityEl();
      return false;
   }
   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     securityEl();
      return false;
   }
   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     securityEl();
      return false;
   }
 }
