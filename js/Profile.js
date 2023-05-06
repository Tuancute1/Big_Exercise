// import {getLocalStorage} from './storage.js'
// import { UserProfile } from './userProfile.js';

 function saveLocalStorage(ob,key){
  var str=JSON.stringify(ob);
  localStorage.setItem(key,str);
}

 function getLocalStorage(key){
 if(localStorage.getItem(key)){
  var str= localStorage.getItem(key);
  var ob=JSON.parse(str);
  return ob;
 }
 return undefined;
}


 function renderProfile(){
  if(getLocalStorage('userSignIn')){
    document.querySelector('.btn-account').innerHTML=getLocalStorage('userSignIn').userName;
    document.querySelector('.signIn').style.display='none'
    document.querySelector('.profile').style.display='block'
    document.querySelector('.signOut').style.display='inline'
    document.querySelector('.signUp').style.display='none'
  }
  
  document.querySelector('.signOut').onclick=function signOut(){
      localStorage.removeItem('userSignIn');
    window.location.reload();
    window.location.href='../index.html'
  }
}

renderProfile()
var userSignIn=getLocalStorage("userSignIn");
var profileList=getLocalStorage("profileList");



function remove(id){
  for(var j of profileList){
   
    if(j.userName===userSignIn.userName){
      // console.log(j.userName)
      for(var i =0; i<j.history.length;i++){
        if(j.history[i].id===id){
         console.log(i)
          j.history.splice(i,1)
           saveLocalStorage(profileList,"profileList")
           renderHistory()  
        }
      }
    }
    // console.log(profileList)
    // console.log(getLocalStorage("profileList"))
  }
}

function renderHistory(){
  var stt=1;

  var html=``
  var total=0

  for(var i of profileList){
    if(userSignIn.userName===i.userName){
      for(var item of i.history){
        total+=parseFloat(item.price);
      html+=`
      <tr>
      <td class="text-center">${stt++}</td>
      <td class="text-center">${item.id}</td>
      <td class="text-center">${item.name}</td>
      <td class="text-center">${item.price}$ </td>
      <td class="text-center">${item.quantity}</td>
      <td class="text-center"><img src="${item.img}" alt=""></td>
      <td>
        <button class="btn btn-danger" id="delete" onclick="remove(${item.id})" >Delete</button>
      </td>
    </tr>
      `
    }
    }
    document.querySelector(".history").innerHTML=html
    document.querySelector(".total").innerHTML=`<h4 class="text-info">${total}$</>`
  }

}









 var profileList=[];




window.onload=function(){
    if(getLocalStorage("profileList")){
      profileList=getLocalStorage("profileList");
    }
    else if(profileList===undefined){
      profileList=[];
  }
  // console.log(profileList)
  for(var i of profileList){
    if(i.userName===userSignIn.userName){
      document.querySelector("#email").value=i.email;
      document.querySelector("#name").value=i.name;
      document.querySelector("#userName").value=i.userName;
    }
  }
  renderHistory()
 
  
  profileList=getLocalStorage("profileList");
}

