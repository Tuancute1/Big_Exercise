// import { Product,newProduct,saleProduct } from "./product.js";
// import { renderProfile } from "./profile.js";
// import { getLocalStorage,saveLocalStorage } from "./storage.js";

  var total=0
var userSignIn=getLocalStorage("userSignIn")
var profileList=getLocalStorage("profileList");
$(document).ready(function(){
    $('#cart').click(function(){
        $('.modal').modal('show')
        function renderCart(){
            var html=``
            for(var i of profileList){
                if(i.userName===userSignIn.userName){
                   for(var item of i.history){
                    for(var k of Product ){
                      if (k.id===item.id){
                        total+=parseFloat(item.price);
                        html+=`
                        <tr>
                        <td>1</td>
                        <td >${k.id}</td>
                        <td>${k.name}</td>
                        <td>${k.price}$</td>
                        <td class="text-center">${item.quantity}</td>
                        <td class="text-center"><img src="${k.img}" alt=""></td>
                      </tr>
                        `
                      }
                    }
                    
                   }
                }
            }
            document.querySelector(".body-cart").innerHTML=html
            
        }
        renderCart()
    })    
})


  
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
            i.href='./html/SignIn.html'
        }  
        console.log(aTag)
    }
    
    document.querySelector('.signOut').onclick=function signOut(){
        localStorage.removeItem('userSignIn');
      window.location.reload();
      window.location.href='./index.html'
    }
  }
  
 
  function saveID(id){
    if(!getLocalStorage('userSignIn')){
        alert(' You need to sign up to be able to purchase')
    }
    saveLocalStorage(id,'ProductID')
}
  function renderProduct (){
    var html=``
    for(var i of newProduct){
        html+=`
        <div class="card">
        <div class="card-body">
          <img src="${i.img}" class="" alt="" />
          <div class="by-now">
            <a href="./html/Detail.html" class="buy-now" onclick="saveID(${i.id})">By now</a>
          </div>
        </div>
        <div class="card-content">
          <p>${i.name}</p>
          <span>${i.price}$</span>
        </div>
      </div>
        `
    }
    document.querySelector('.new').innerHTML=html;
}
 

renderProduct()
// renderProfile()







function renderSaleProduct (){
    var html=``
    for(var i of saleProduct){
        html+=`
        <div class="card">
      <div class="card-body">
        <img src="${i.img}" class="w-100" alt="" />
        <div class="by-now">
          <a href="./html/Detail.html" class="buy-now" onclick="saveID(${i.id})">By now</a>
        </div>
      </div>
      <div class="card-content">
        <p>${i.name}</p>
        <span>${i.price}</span>
      </div>
      <img src="./img/logo/sales.png" class="logo-sale" alt="" />
    </div>
        `
    }
    document.querySelector('.sales').innerHTML=html;
}

renderSaleProduct()


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

window.onload = function () {
 var userSignIn = getLocalStorage("userSignIn");
  if (userSignIn === undefined) {
    userSignIn = {};
  }
  console.log(userSignIn)
  renderProfile()
};


