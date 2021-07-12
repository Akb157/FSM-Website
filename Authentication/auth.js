// Auth
auth.onAuthStateChanged(user => {
    if (user) {
      
      document.getElementById('lin').style.display = "none";
      document.getElementById('sin').style.display = "none";
      document.getElementById('logouts').style.display = "inline-block";
      console.log(user.email + " is logged in!");
      // alert(user.email + "  is logged in!");
    } else {
      
      document.getElementById('lin').style.display = "inline-block";
      document.getElementById('sin').style.display = "inline-block";
      document.getElementById('logouts').style.display = "none";
      console.log('User is logged out!');
      // alert(user.email + '  is logged out!');
    }
  });