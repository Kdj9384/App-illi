import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAEpLXP5JQ9fX9y_Ikt1Mi7cK194bfq8Ko",
    authDomain: "illiapp.firebaseapp.com",
    projectId: "illiapp",
    storageBucket: "illiapp.appspot.com",
    messagingSenderId: "58716710205",
    appId: "1:58716710205:web:4d02bb516e4e3f25e55154"
}

firebase.initializeApp(firebaseConfig);

export default firebase;

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAEpLXP5JQ9fX9y_Ikt1Mi7cK194bfq8Ko",
    authDomain: "illiapp.firebaseapp.com",
    projectId: "illiapp",
    storageBucket: "illiapp.appspot.com",
    messagingSenderId: "58716710205",
    appId: "1:58716710205:web:4d02bb516e4e3f25e55154"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
*/