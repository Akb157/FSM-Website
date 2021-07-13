var firebaseConfig = {
    apiKey: "AIzaSyAelqwv1A1w4SpQxJa5rUIpczXWJalR8Ow",
    authDomain: "iafsm-website.firebaseapp.com",
    databaseURL: "https://iafsm-website-default-rtdb.firebaseio.com",
    projectId: "iafsm-website",
  };
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  const logoutBtn = document.querySelector("#logouts");
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut();
    console.log("User Logged out!");
    alert("Successfully Logged out!");
  });