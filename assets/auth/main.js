// Your web app's Firebase configuration (ENTER YOUR FIREBASE CONFIGURATION DETAILS)
var firebaseConfig = {
    apiKey: "AIzaSyChL2p0eECcqXdyLusimQ4N7mHWOvW6Yp0",
  authDomain: "api-andrep.firebaseapp.com",
  databaseURL: "https://api-andrep-default-rtdb.firebaseio.com",
  projectId: "api-andrep",
  storageBucket: "api-andrep.appspot.com",
  messagingSenderId: "664569748364",
  appId: "1:664569748364:web:fb2927dcfaa4b3616714a9",
  measurementId: "G-NZFYL32YBV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var form = document.querySelector('#loginForm');
var r_form = document.querySelector('#registerForm');
var reset_form = document.querySelector('#resetForm');
var message = document.querySelector('#messageDiv');
var message_value = document.querySelector('.message');
var sign_out = document.querySelector("#signOut");

// check if user is logged in or not
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        if (window.location.pathname != '/') {
            window.location = window.history.go(-1);
        }
    } else {
        if (window.location.pathname === '/') {
            window.location = window.history.go(-1);
        }
    }
});

// user login
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let email = form.email.value;
        let password = form.password.value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                window.location = window.history.go(-1);
            })
            .catch((error) => {
                message.style.display = 'block';
                message_value.innerText = error.message;
                setTimeout(function () {
                    message.style.display = 'none';
                }, 3000);
            });
    })
}

// user register
if (r_form) {
    r_form.addEventListener('submit', function (e) {
        e.preventDefault();
        let email = r_form.email.value;
        let password = r_form.password.value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                window.location = window.history.go(-1);
            })
            .catch((error) => {
                message.style.display = 'block';
                message_value.innerText = error.message;
                setTimeout(function () {
                    message.style.display = 'none';
                }, 3000);
            });
    })
}

// password reset 
if (reset_form) {
    reset_form.addEventListener('submit', function (e) {
        e.preventDefault();
        let email = reset_form.email.value;

        firebase.auth().sendPasswordResetEmail(email)
            .then((userCredential) => {
                message.style.display = 'block';
                message_value.innerText = 'Email has been send!';

            })
            .catch((error) => {
                message.style.display = 'block';
                message_value.innerText = error.message;
                setTimeout(function () {
                    message.style.display = 'none';
                }, 3000);
            });
    })
}

var provider = new firebase.auth.GoogleAuthProvider();
var login = document.querySelector('.login');

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // console.log(user);
        window.location = window.history.go(-1);
    }
});

login.addEventListener('click', (e) => {
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            window.location = '/'
        }).catch((error) => {
            console.log(error);
        });
})

// sign out  
if (sign_out) {
    sign_out.addEventListener('click', function (e) {
        firebase.auth().signOut().then(() => {
            window.location = window.history.go(-1);
        }).catch((error) => {
            // An error happened.
        });
    })
}