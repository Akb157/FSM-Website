var firebaseConfig = {
    apiKey: "AIzaSyAelqwv1A1w4SpQxJa5rUIpczXWJalR8Ow",
    authDomain: "iafsm-website.firebaseapp.com",
    databaseURL: "https://iafsm-website-default-rtdb.firebaseio.com",
    projectId: "iafsm-website",
  };
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  const signupBtn = document.querySelector("#signups");
  signupBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const emailup = document.querySelector("#emailup").value;
    const passwordup = document.querySelector("#pwdup").value;

    auth
      .createUserWithEmailAndPassword(emailup, passwordup)
      .then((cred) => {
        console.log("User signed up Successfully!!");
        alert("You are Successfully Signed Up!");
      });
  });