// const firebaseConfig = {
//     apiKey: "AIzaSyAelqwv1A1w4SpQxJa5rUIpczXWJalR8Ow",
//     authDomain: "iafsm-website.firebaseapp.com",
//     databaseURL: "https://iafsm-website-default-rtdb.firebaseio.com",
//     projectId: "iafsm-website",
//     storageBucket: "iafsm-website.appspot.com",
//     messagingSenderId: "556790635522",
//     appId: "1:556790635522:web:b8b03f29e40d962b31db1b",
//   };

  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref("User Data");

  document
    .getElementById("contactForm")
    .addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal("name");
    var mail = getInputVal("mail");
    var subject = getInputVal("Subject");
    var msg = getInputVal("work");

    saveMessage(name, mail, subject, msg);
    document.getElementById("contactForm").reset();
  }

  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(name, mail, subject, work) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      Name: name,
      Mail: mail,
      Subject: subject,
      Message: work,
    });
  }