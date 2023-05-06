function kiemTraRong(value, selectError, name){
    if(value===''){
        document.querySelector(selectError).style.display='block'
    document.querySelector(selectError).innerHTML=name+' not be empty!';
    return false
    }
    document.querySelector(selectError).innerHTML=""
    return true
}

function kiemTraUserName(value,selectorError,name){
    var regex=/^[a-z0-9_-]{3,16}$/
    if(regex.test(value)){
        document.querySelector(selectorError).innerHTML='';
        return true
    }
    document.querySelector(selectorError).style.display="block";
    document.querySelector(selectorError).innerHTML=name+' all must be characters!'
    return false;
}

function kiemTraName(value,selectorError,name){
    var regex=/\b([A-ZÀ-ÿ][-,a-z.']+[ ]*)+/; 
    if(regex.test(value)){
        document.querySelector(selectorError).innerHTML='';
        return true
    }
    document.querySelector(selectorError).style.display="block";
    document.querySelector(selectorError).innerHTML=name+' all must be characters!'
    return false;
}

function kiemTraEmail(value ,selectorError,name ){
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(regex.test(value)){
        document.querySelector(selectorError).innerHTML='';
        return true;
    }
    document.querySelector(selectorError).style.display="block";
    document.querySelector(selectorError).innerHTML=name+ ' include numbers and special characters!'
    return false;
}

function kiemTraPassword(value ,selectorError,name ){
    var regex =/^[A-Za-z]\w{7,14}$/
    if(regex.test(value)){
        document.querySelector(selectorError).innerHTML='';
        return true;
    }
    document.querySelector(selectorError).style.display="block";
    document.querySelector(selectorError).innerHTML=name+ ' include numbers and special characters!'
    return false;
}

function kiemTraConfirm(value1,value2,selectError,name){
    if(value1===value2){
        document.querySelector(selectError).innerHTML='';
        return true;
    }
    document.querySelector(selectError).style.display="block";
    document.querySelector(selectError).innerHTML=name+ ' not match!'
    return false;
}



