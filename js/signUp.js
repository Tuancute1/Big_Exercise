import {getLocalStorage,saveLocalStorage} from './storage.js'
// import { profileList } from './Profile.js';
import { UserProfile } from './userProfile.js';


var profileList=getLocalStorage("profileList")
var signUpList=[];
var profileList=[]
// var profileList=[]

function hiddenPassword(){
    var pas=document.querySelector('#pas');
    var hidden1=document.querySelector('#hidden1');
    var hidden2=document.querySelector('#hidden2');
    if(pas.type==='password'){
        pas.type='text';
        hidden2.style.display="inline"
        hidden1.style.display="none";
      
    }
    else{
        pas.type='password';
        hidden2.style.display="none"    
        hidden1.style.display="inline";
    }
}

document.querySelector("#hidden1").onclick =hiddenPassword
document.querySelector("#hidden2").onclick =hiddenPassword

function hiddenConfirmPassword(){
    var pas=document.querySelector('#confirmPas');
    var hidden3=document.querySelector('#hidden3');
    var hidden4=document.querySelector('#hidden4');
    if(pas.type==='password'){
        pas.type='text';
        hidden3.style.display="none";
        hidden4.style.display="inline"
      
    }
    else{
        pas.type='password';
        hidden3.style.display="inline";
        hidden4.style.display="none" 
    }
}

document.querySelector("#hidden3").onclick =hiddenConfirmPassword
document.querySelector("#hidden4").onclick =hiddenConfirmPassword


function kiemTraTrung(arr,user){
    for(var i of arr){
        if(i.email===user.email){
            alert('The Email was registered' )
            return false
        }
        else {
        return true
        }
    }
}

function themUser() {
    var email=document.querySelector('#email').value;
    var userName=document.querySelector('#userName').value;
    var name=document.querySelector('#name').value;
    var pas=document.querySelector('#pas').value;
    var confirmPassword=document.querySelector("#confirmPas").value
    var user=new UserSignUp(email,userName,name,pas);
    var userProfile=new UserProfile(email,userName,name,pas)
    var valid =
    kiemTraRong(user.email, ".tbEmail", "Email") &
    kiemTraRong(user.userName, ".tbUserName", "Use name") &
    kiemTraRong(user.name, ".tbName", "Name") &
    kiemTraRong(user.hiddenPassword, ".tbPas", "Password")&
    kiemTraRong(confirmPassword,".tbConfirm","Confirm Password");

    if( kiemTraRong(user.email, ".tbEmail", "Email")){
        valid&=kiemTraEmail(user.email,".tbEmail",'Email')
    }
    if( kiemTraRong(user.userName, ".tbUserName", "Use name")){
        valid&=kiemTraUserName(user.userName,".tbUserName",'Use name')
    } 
    if( kiemTraRong(user.name, ".tbName", "Name")){
        valid&=kiemTraName(user.name,".tbName",'Name')
    } 
    if( kiemTraRong(user.password, ".tbPas", "Password")){
        valid&=kiemTraPassword(user.password,".tbPas",'Password')
    }
    if(kiemTraRong(confirmPassword,".tbConfirm","Confirm Password")){
        valid&=kiemTraConfirm(user.password,confirmPassword,'.tbConfirm',"Confirm Password")
    }
    if(signUpList.length>0){
        valid&=kiemTraTrung(signUpList,user)
    }
    if(!valid)
    return ;
    signUpList.push(user)
    saveLocalStorage(signUpList,'signUpList')
    profileList.push(userProfile)
    saveLocalStorage(profileList,'profileList')

    alert('Sign up successful')
    console.log(profileList)
    console.log(signUpList)
    window.location.href="../html/SignIn.html"
};
document.querySelector("#form").onchange=themUser
document.querySelector("#them").onclick=themUser



// console.log(getLocalStorage('signUpList'))


window.onload = function () {
    signUpList = getLocalStorage("signUpList");
    if (signUpList == undefined) {
        signUpList = [];
    }
    // console.log(signUpList)
  };




