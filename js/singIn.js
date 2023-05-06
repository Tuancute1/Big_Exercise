import { saveLocalStorage, getLocalStorage } from "./storage.js";
// import { renderProfile } from "./Profile.js";

var userSignIn = {};
// renderProfile();

function hiddenPassword() {
  var pas = document.querySelector("#pas");
  var hidden1 = document.querySelector("#hidden1");
  var hidden2 = document.querySelector("#hidden2");
  if (pas.type === "password") {
    pas.type = "text";
    hidden2.style.display = "inline";
    hidden1.style.display = "none";
  } else {
    pas.type = "password";
    hidden2.style.display = "none";
    hidden1.style.display = "inline";
  }
}

document.querySelector("#hidden1").onclick = hiddenPassword;
document.querySelector("#hidden2").onclick = hiddenPassword;

function dangNhap() {
  var userName = document.querySelector("#userName").value;
  var password = document.querySelector("#pas").value;
  userSignIn = new UserSignIn(userName, password);
  var valid =
    kiemTraRong(userSignIn.userName, ".tbUserName", "User name") &
    kiemTraRong(userSignIn.password, ".tbPas", "Password");

  if (kiemTraRong(userSignIn.userName, ".tbUserName", "User name")) {
    valid &= kiemTraUserName(userSignIn.userName, ".tbUserName", "User name");
  }
  if (kiemTraRong(userSignIn.password, ".tbPas", "Password")) {
    valid &= kiemTraRong(userSignIn.password, ".tbPas", "Password");
  }
  if (!valid) return;
  var arr = getLocalStorage("signUpList");
  var dn=true
  console.log(arr);
  if (arr != undefined) {
    for (var i of arr) {
     console.log(i.userName)
     console.log(i.password)
     if(i.userName===userSignIn.userName&&i.password===userSignIn.password){
        dn=true
     saveLocalStorage(userSignIn, "userSignIn");
    document.querySelector(".btn-account").innerHTML =getLocalStorage("userSignIn").userName;
       break;
     }
     else if(i.userName!==userSignIn.userName||i.password!==userSignIn.password){
        dn=false
     }
    }
    if(dn===true){
        alert("Sign in successfully");
        saveLocalStorage(userSignIn, "userSignIn");
        document.querySelector(".btn-account").innerHTML =getLocalStorage("userSignIn").userName;
        window.location.href='../index.html'
    }
    else{
        alert("User name or password incorrect");
    }
  }

//   console.log(userSignIn);

}
document.querySelector("#signIn").onclick = dangNhap;
document.querySelector(".form").onchange = dangNhap;

window.onload = function () {
  userSignIn = getLocalStorage("userSignIn");
  var arr = getLocalStorage("signUpList");
  if (userSignIn === undefined) {
    userSignIn = {};
  }
//   console.log(userSignIn);
};
