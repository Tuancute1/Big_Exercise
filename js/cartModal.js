// import { getLocalStorage } from "./storage"



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
                    total+=parseFloat(item.price);
                    html+=`
                    <tr>
                    <td>1</td>
                    <td >${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.price}$</td>
                    <td class="text-center">${item.quantity}</td>
                    <td class="text-center"><img src="${item.img}" alt=""></td>
                  </tr>
                    `
                   }
                }
            }
            document.querySelector(".body-cart").innerHTML=html
            
        }
        renderCart()
    })    
})
