import {Product} from "./product.js";
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
    window.location.href='../html/index.html'
  }
}

renderProfile()

document.querySelector(".input-search").oninput=function renderSearch(){
    var valueSearch= document.querySelector(".input-search").value
    var productSearch
     
    if(valueSearch===''){
        console.log(valueSearch)
        productSearch=[]
    }
    else{
        productSearch=Product.filter(sp=>sp.name.toLowerCase().includes(valueSearch));
    }
    console.log(productSearch)
    var html=``
    for(var i of productSearch){
        html+=`
        <div class="card">
        <div class="card-body">
          <img src="${i.img}" class="" alt="" />
          <div class="by-now">
            <a href="./Detail.html" class="buy-now" onclick="saveID(${i.id})">By now</a>
          </div>
        </div>
        <div class="card-content">
          <p>${i.name}</p>
          <span>${i.price}$</span>
        </div>
      </div>
        `
    }
    document.querySelector(".row").innerHTML=html;
}