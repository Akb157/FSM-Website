var firebaseConfig = {
    apiKey: "AIzaSyAelqwv1A1w4SpQxJa5rUIpczXWJalR8Ow",
    authDomain: "iafsm-website.firebaseapp.com",
    databaseURL: "https://iafsm-website-default-rtdb.firebaseio.com",
    projectId: "iafsm-website",
  };
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  const loginBtn = document.querySelector("#logins");
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const emailin = document.querySelector("#emailin").value;
    const passwordin = document.querySelector("#pwdin").value;

    auth
      .signInWithEmailAndPassword(emailin, passwordin)
      .then((cred) => {
        console.log("User Logged In Successfully!!");
        alert("You are Successfully Logged In");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  });