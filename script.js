/* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
*/

function cambiar_login() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
  document.querySelector('.cont_form_login').style.display = "block";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";               
  
  setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
    
  setTimeout(function(){    
  document.querySelector('.cont_form_sign_up').style.display = "none";
  },200);  
    }
  function cambiar_sign_up(at) {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    document.querySelector('.cont_form_sign_up').style.display = "block";
  document.querySelector('.cont_form_login').style.opacity = "0";
    
  setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
  },100);  
  
  setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
  },400);  
  
  
  }    
  
  
  
  function ocultar_login_sign_up() {
  
  document.querySelector('.cont_forms').className = "cont_forms";  
  document.querySelector('.cont_form_sign_up').style.opacity = "0";               
  document.querySelector('.cont_form_login').style.opacity = "0"; 
  
  setTimeout(function(){
  document.querySelector('.cont_form_sign_up').style.display = "none";
  document.querySelector('.cont_form_login').style.display = "none";
  },500);  
    
    }
  function fn1(){
    var str = document.getElementById("namef").value;
    var yrbirth = document.getElementById("num").value;
    var monbirth = document.getElementById("num1").value;
    var datebirth = document.getElementById("num2").value;
    var date = new Date(yrbirth, monbirth, datebirth);
    var dayOfWeekNumber = date.getDay(date);
    var nameOfDay;
    var ghanan_name;
    switch(dayOfWeekNumber){
        case 0: 
            nameOfDay = 'Sunday';
            ghanan_name = 'Akosua';
            break;
        case 1:
            nameOfDay = 'Monday';
            ghanan_name = 'Adwoa';
            break;
        case 2:
            nameOfDay = 'Tuesday';
            ghanan_name = 'Abenaa';
            break;
        case 3:
            nameOfDay = 'Wednesday';
            ghanan_name = ' Akua';
            break;
        case 4:
            nameOfDay = 'Thursday';
            ghanan_name = 'Yaa';
            break;
        case 5:
            nameOfDay = 'Friday';
            ghanan_name = 'Afua';
            break;
        case 6:
            nameOfDay = 'Saturday';
            ghanan_name = 'Ama';
            break;
    
    }
    alert("wow " +str + " you were born on " + nameOfDay + " Your ghanaian name is " + ghanan_name);
    //Display the day of the week
    let weekdayDiv = document.getElementById(getDay(yrbirth, monbirth,datebirth));
    weekdayDiv.innerHTML = `${nameOfDay}`;
    
    //Display quote
    let quoteDiv = document.getElementById('week');
    quoteDiv.innerHTML = `${quote}`
    
  }
  function fn1(){
    var str = document.getElementById("namef").value;
    var yrbirth = document.getElementById("num").value;
    var monbirth = document.getElementById("num1").value;
    var datebirth = document.getElementById("num2").value;
    var date = new Date(yrbirth, monbirth, datebirth);
    var dayOfWeekNumber = date.getDay(date);
    var nameOfDay;
    var ghanan_name;
    switch(dayOfWeekNumber){
        case 0: 
            nameOfDay = 'Sunday';
            ghanan_name = 'Akosua';
            break;
        case 1:
            nameOfDay = 'Monday';
            ghanan_name = 'Adwoa';
            break;
        case 2:
            nameOfDay = 'Tuesday';
            ghanan_name = 'Abenaa';
            break;
        case 3:
            nameOfDay = 'Wednesday';
            ghanan_name = ' Akua';
            break;
        case 4:
            nameOfDay = 'Thursday';
            ghanan_name = 'Yaa';
            break;
        case 5:
            nameOfDay = 'Friday';
            ghanan_name = 'Afua';
            break;
        case 6:
            nameOfDay = 'Saturday';
            ghanan_name = 'Ama';
            break;
    
    }
    alert("wow " +str + " you were born on " + nameOfDay + " Your ghanaian name is " + ghanan_name);
    //Display the day of the week
    let weekdayDiv = document.getElementById(getDay(yrbirth, monbirth,datebirth));
    weekdayDiv.innerHTML = `${nameOfDay}`;
    
    //Display quote
    let quoteDiv = document.getElementById('week');
    quoteDiv.innerHTML = `${quote}`
    
  }
  function fn2(){
    var str = document.getElementById("namem").value;
    var yrbirth = document.getElementById("name3").value;
    var monbirth = document.getElementById("name4").value;
    var datebirth = document.getElementById("name5").value;
    var date = new Date(yrbirth, monbirth, datebirth);
    var dayOfWeekNumber = date.getDay(date);
    var nameOfDay;
    var ghanan_name;
    switch(dayOfWeekNumber){
        case 0: 
            nameOfDay = 'Sunday';
            ghanan_name = 'Kwasi';
            break;
        case 1:
            nameOfDay = 'Monday';
            ghanan_name = 'Kwadwo';
            break;
        case 2:
            nameOfDay = 'Tuesday';
            ghanan_name = 'Kwabena';
            break;
        case 3:
            nameOfDay = 'Wednesday';
            ghanan_name = 'Kwaku';
            break;
        case 4:
            nameOfDay = 'Thursday';
            ghanan_name = 'Yaw';
            break;
        case 5:
            nameOfDay = 'Friday';
            ghanan_name = 'Kofi';
            break;
        case 6:
            nameOfDay = 'Saturday';
            ghanan_name = 'Kwame';
            break;
    
    }
    alert("wow " +str + " you were born on " + nameOfDay + " Your ghanaian name is " + ghanan_name);
    //Display the day of the week
    let weekdayDiv = document.getElementById(getDay(yrbirth, monbirth,datebirth));
    weekdayDiv.innerHTML = `${nameOfDay}`;
    
    //Display quote
    let quoteDiv = document.getElementById('week');
    quoteDiv.innerHTML = `${quote}`
    
  }
    
    