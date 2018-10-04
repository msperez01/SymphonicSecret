
// Firebase App is always required and must be first
var firebase = require("firebase/app");

// Add additional services that you want to use
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");
require("firebase/messaging");
require("firebase/functions");

// Comment out (or don't require) services that you don't want to use
// require("firebase/storage");

var config = {
    // ...
};
firebase.initializeApp(config);

function passwordLength() { //Supposed to opacitate the button
    var x = document.getElementById("passwordLength");
    if (x. "password") {
        
    } else {
        x.type = "password";
    }
}

