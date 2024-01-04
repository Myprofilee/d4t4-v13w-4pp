var config = {
    apiKey: "AIzaSyChL2p0eECcqXdyLusimQ4N7mHWOvW6Yp0",
  authDomain: "api-andrep.firebaseapp.com",
  databaseURL: "https://api-andrep-default-rtdb.firebaseio.com",
  projectId: "api-andrep",
  storageBucket: "api-andrep.appspot.com",
  messagingSenderId: "664569748364",
  appId: "1:664569748364:web:fb2927dcfaa4b3616714a9",
  measurementId: "G-NZFYL32YBV"
};

firebase.initializeApp(config);

var database = firebase.database();
var connectionsRef = database.ref("/andrep Home");
var connectedRef = database.ref(".info/connected");

connectedRef.on("value", function (snap) {
    if (snap.val()) {
        var con = connectionsRef.push(true);
        con.onDisconnect().remove();
    }
});

connectionsRef.on("value", function (snap) {
    $("#andrep-home").text(snap.numChildren());
});