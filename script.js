function myfun(){
    let a = document.getElementById("mobilenumber").value;

    if(a == ''){
        document.getElementById('message').innerHTML='please fill this column';
      return false;
    }
    else{
        document.getElementById('message').innerHTML='Thank you';
        return true;
    }
 }