
// import { profileList, renderProfile } from "./Profile.js";
import {Product} from "./product.js";
import { getLocalStorage, saveLocalStorage } from "./storage.js";
  
// console.log(Product)


function renderProfile(){ 
  if(getLocalStorage('userSignIn')){
    document.querySelector('.btn-account').innerHTML=getLocalStorage('userSignIn').userName;
    document.querySelector('.signIn').style.display='none'
    document.querySelector('.profile').style.display='block'
    document.querySelector('.signOut').style.display='inline'
    document.querySelector('.signUp').style.display='none'
   
  }
  else{
     
      var aTag = document.querySelectorAll(".buy-now");
      // aTag.href='../html/SignIn.html'
      for(var i of aTag){
          i.href='../html/SignIn.html'
      }  
      console.log(aTag)
  }
  
  document.querySelector('.signOut').onclick=function signOut(){
      localStorage.removeItem('userSignIn');
    window.location.reload();
    window.location.href='../index.html'
  }
}

renderProfile()


 let id= getLocalStorage('ProductID')

  console.log(id)
  function renderDetail(){
    var html=``
    for(var item of Product ){
      if(item.id===id){
        html+=`
        <div class="row">
        <div class="col-6 col1">
          <img src=${item.img} alt="">
        </div>
        <div class="col-6 col2">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <h5>${item.price}$</h5>
          <button class="btn btn-success" id="addToCart">Add to cart</button>
        </div>
      </div>
      `
      }
    }
    document.querySelector('.content').innerHTML=html
  }
  renderDetail()

  document.querySelector("#addToCart").onclick=function (){
   
    for(var item of Product){
      if(getLocalStorage("ProductID")===item.id){
        
        for(var i of profileList){
          if(i.userName===userSignIn.userName){   
           
            
            let index=i.history.findIndex(sp=>sp.id===getLocalStorage("ProductID"));
            console.log(index)
            
            if(index===-1){
              i.history.push(item)
            }
            else {
              i.history[index].quantity++
            }
            // console.log(i.history)
          }
        }
      }
    }
    // getLocalStorage("profileList")=profileList;
    renderDetail()
    saveLocalStorage(profileList,'profileList')
    renderProfile()
    window.location.reload()
    // renderCart()
}

window.onload=function(){
  var profileList=getLocalStorage("profileList")
  if(profileList.history===undefined){
    profileList.history=[]
  }
  console.log(profileList.history)
  var userSignIn=getLocalStorage("userSignIn");

}