//firebase import
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firebase config 
const firebaseConfig = {
    apiKey: "AIzaSyDU0UU5oWNs2JwFagNd8SIF4WQJD1d5Uuk",
    authDomain: "dinningmenu-dd125.firebaseapp.com",
    projectId: "dinningmenu-dd125",
    storageBucket: "dinningmenu-dd125.appspot.com",
    messagingSenderId: "58391019750",
    appId: "1:58391019750:web:e5b87db44b289c87c83b27",
    measurementId: "G-5JVBHM1PP2"
};

//initilize firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check if user is login
onAuthStateChanged(auth, (user) => {
  if (user) {
    // ✅ user logged in, allow access
    console.log("User logged in:", user.email);
  } else {
    // ❌ user not logged in, redirect back to login page
    window.location.href = "index.html";
  }
});

//logout
function logout() {
  signOut(auth)
    .then(() => {
      alert(" Logged out successfully!");
      // Redirect to login page
      window.location.href = "loginpage.html";
      })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
}
window.logout=logout;

window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "a937747c-6e04-4ce0-ab44-ae3ae639b03b",
      notifyButton: {
        enable: true,
      },
    });
  });
