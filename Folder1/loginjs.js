function checkCred(){
  var usn=document.getElementById("username").value;
  var psw=document.getElementById("pswd").value;

  if (usn=="") {
    alert("Please enter your username!")
  } else if (usn!="ALLMIGHT123") {
    alert("Sorry! Due to security reasons, the college is only allowing selected faculty to log in. So you cannot log in right now. Sorry for the incovenience. We are trying to resolve the issues.")
  } else if (psw=="") {
    alert("Please enter your password!")
  } else if (psw!="MHAISLOVE") {
    alert("The password was incorrect! Please check your credentials and retry!")
  } else {
    window.open("Marks.html");
    close();
  }
}
