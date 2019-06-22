function myfun(){
    let a = document.getElementById("mobilenumber").value;
    // var cnic_no = '125-1234567-9'
    // cnic_no_regex = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/;

    if(a == ''){
        document.getElementById('message').innerHTML='please fill this column';
      return false;
    }
    else if(isNaN(a)){
        document.getElementById('message').innerHTML='please enter a number';
        return false;
        
    }

    else if(a.length<10){
        document.getElementById('message').innerHTML='mobile no. must be 10 digit';
        return false;

    }
    else if(a.length>10){
        document.getElementById('message').innerHTML='mobile no. must be 10 digit';
        return false;

    }
    else if((a.charAt(0)!=9) && (a.charAt(0)!=4 ) && (a.charAt(0)!=3 )){
        document.getElementById('message').innerHTML='should start with 9 4 3';
        return false;

    }  if((a.charAt(0) ==9) && (a.charAt(9)==3)){
        document.getElementById('message').innerHTML="pakistan";
     document.getElementById('me').innerHTML='karachi';

        
    }
//        if(a.charAt(9)==3){
//      document.getElementById('message').innerHTML='karachi';
//  }
//  (variable1 + ", " + variable2);
  
 }