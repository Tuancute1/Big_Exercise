
export function saveLocalStorage(ob,key){
    var str=JSON.stringify(ob);
    localStorage.setItem(key,str);
}

export function getLocalStorage(key){
   if(localStorage.getItem(key)){
    var str= localStorage.getItem(key);
    var ob=JSON.parse(str);
    return ob;
   }
   return undefined;
}
