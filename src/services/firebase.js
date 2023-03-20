// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDbafeH5VlXfkVg_x6LGY9yeakJMCad1BY",
	authDomain: "complete-guide-to-firebase.firebaseapp.com",
	projectId: "complete-guide-to-firebase",
	storageBucket: "complete-guide-to-firebase.appspot.com",
	messagingSenderId: "603368680970",
	appId: "1:603368680970:web:abd7aa7ea7bbd7961079f3",
	measurementId: "G-YVKZTJYQGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
