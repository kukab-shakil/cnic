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
    // province
   if(a.charAt(0) ==1){
        document.getElementById('province').innerHTML=" Province: khyber Pakhton kha";


    }
    if(a.charAt(0) ==2){
        document.getElementById('province').innerHTML=" Province: FATA";


    }if(a.charAt(0) ==3){
        document.getElementById('province').innerHTML="Province: punjab";


    }if(a.charAt(0) ==4){
        document.getElementById('province').innerHTML="Province: Sindh";


    }if(a.charAt(0) ==5){
        document.getElementById('province').innerHTML="Province: Balochistan";


    }if(a.charAt(0) ==6){
        document.getElementById('province').innerHTML="Province: Islamabad";


    }if(a.charAt(0) ==7){
        document.getElementById('province').innerHTML="Province: Giggit Bakdistan";


    }
    // province
    // if 123456789 in CNIC show error
    if ((a.charAt(0) != 1) && (a.charAt(0) != 2) && (a.charAt(0) != 3) && (a.charAt(0) != 4) && (a.charAt(0) != 5) && (a.charAt(0) != 6) && (a.charAt(0) != 7)) {
        document.getElementById('me').innerHTML = 'invalid! Pakistan has only SEVEN Province';

        return false;

    }

    // if 123456789 in CNIC show error


   if ((a.charAt(14) == 1) || (a.charAt(14) == 3) || (a.charAt(14) == 5) || (a.charAt(14) == 7) || (a.charAt(14) == 9)) {
        document.getElementById('boy').innerHTML = ' Gender: Male';

        return false;

    }
     if ((a.charAt(14) == 2) || (a.charAt(14) == 4) || (a.charAt(14) == 6) || (a.charAt(14) == 8) || (a.charAt(14) == 0)) {
        document.getElementById('boy').innerHTML = ' Gender: Female';

        return false;

    }
    
   



}
