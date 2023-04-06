const h1 = document.querySelector(".test-h1");
//Setup
const firebaseConfig = {
    apiKey: "AIzaSyBW2sXJ59xT4jeJT9eVDug7HcEbTPAVlUM",
    authDomain: "alsalwagroup-ce2c8.firebaseapp.com",
    projectId: "alsalwagroup-ce2c8",
    storageBucket: "alsalwagroup-ce2c8.appspot.com",
    messagingSenderId: "1070824287563",
    appId: "1:1070824287563:web:e77700a1a2e5b8541f4cce",
    measurementId: "G-0GD7JX1QML"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
//Getting collections
const addAppointment = (appointment) => {
  console.lo
}

//Refferernce
const form = document.querySelector(".signup-form");
const userName = "";
const userPhone = "";
const userEmail = "";
const userComment = "";
form.addEventListener('submit', e => {
  e.preventDefault();

  const now = new Date();
  let appoint = {
      name: form.inputName.value,
      phone: form.inputPhone.value,
      email: form.inputEmail.value,
      comment: form.validationTextarea.value,
      created_at: firebase.firestore.Timestamp.fromDate(now)
  };
  db.collection("appointment").add(appoint).then(() => {
    console.log("Document written with ID: ", appointment.id);
  }).catch(err => {
    console.error("Error adding document: ", err);
  })

});


