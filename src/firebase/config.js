import fire from "firebase";

const config = {
    apiKey: "AIzaSyBX9lkwEBzuYK4LMw9i6boUKCzqeOYdss0",
    authDomain: "cryptocrewtest.firebaseapp.com",
    databaseURL: "https://cryptocrewtest.firebaseio.com",
    projectId: "cryptocrewtest",
    storageBucket: "cryptocrewtest.appspot.com",
    messagingSenderId: "719351018480"
};

let firebase = fire.initializeApp(config);

export default firebase