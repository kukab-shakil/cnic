function myfun() {
    var re16digit = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/
    if (!re16digit.test(document.myform.mobilenumber.value)) {
        document.getElementById('message').innerHTML = 'invalid';
        return false;
    }
    let a = document.getElementById("mobilenumber").value;

    if (a == '') {
        document.getElementById('message').innerHTML = 'please fill this column';
        return false;
    }
   if(a.charAt(0) ==9){
        document.getElementById('message').innerHTML="karachi";


    }

   if ((a.charAt(14) == 1) || (a.charAt(14) == 3) || (a.charAt(14) == 5) || (a.charAt(14) == 7) || (a.charAt(14) == 9)) {
        document.getElementById('me').innerHTML = ' Hi!boy';

        return false;

    }
     if ((a.charAt(14) == 2) || (a.charAt(14) == 4) || (a.charAt(14) == 6) || (a.charAt(14) == 8) || (a.charAt(14) == 0)) {
        document.getElementById('me').innerHTML = ' Hi! girl';

        return false;

    }
    
   



}