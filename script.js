
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAR8bvJm8r_y9rz3rYi6Wml6Vj678SCW3Y",
    authDomain: "shubham-task6-a470b.firebaseapp.com",
    projectId: "shubham-task6-a470b",
    storageBucket: "shubham-task6-a470b.appspot.com",
    messagingSenderId: "911964544778",
    appId: "1:911964544778:web:38339cd9619dc51eb1a4f3"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.getElementById("reg-btn").addEventListener('click', function () {
    document.getElementById("register-div").style.display = "inline";
    document.getElementById("login-div").style.display = "none";
    return true;
});

document.getElementById("log-btn").addEventListener('click', function () {
    document.getElementById("register-div").style.display = "none";
    document.getElementById("login-div").style.display = "inline";
});



//--------------------Login-----------------------------------------
document.getElementById("login-btn").addEventListener('click', function () {
    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            document.getElementById("result-box").style.display = "inline";
            document.getElementById("login-div").style.display = "none";
            document.getElementById("result").innerHTML = "Wel-Come Back <br> " + loginEmail + " was Login Succssfully...";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById("result-box").style.display = "inline";
            document.getElementById("login-div").style.display = "none";
            document.getElementById("result").innerHTML = "Sorry ! <br>" + errorMessage;
        });
});


//----------------------Register---------------------------------------
document.getElementById("register-btn").addEventListener('click', function () {
    const registerEmail = document.getElementById("register-email").value;
    const registerPassword = document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            document.getElementById("result-box").style.display = "inline";
            document.getElementById("register-div").style.display = "none";
            document.getElementById("result").innerHTML = "Wel-Come <br> " + registerEmail + " was Registered Succssfully...";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById("result-box").style.display = "inline";
            document.getElementById("register-div").style.display = "none";
            document.getElementById("result").innerHTML = "Sorry ! <br>" + errorMessage;
        });
});

//---------------------Log out--------------------------------------------
document.getElementById("log-out-btn").addEventListener('click', function () {
    signOut(auth).then(() => {
        document.getElementById("result-box").style.display = "none";
        document.getElementById("login-div").style.display = "inline";
    })
        .catch((error) => {
            document.getElementById("result").innerHTML = "Sorry ! <br>" + errorMessage;
        });
});