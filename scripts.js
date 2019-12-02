var checkDayOfWeek=fuction(){
   
    var male = ['Kwasi', 'Kwandwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var date = document.getElementById("d").value;
    var month = document.getElementById("m").value;
    var year = document.getElementById("yy").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female")
    var currentDate = new Date(year + "/" + month + "/" + date);
    var currentYear = currentDate.getDay();

    if (male.checked) {
        document.getElementById("x ").innerHTML = " your Akan name is " + maleNames[currentYear] + " so you were born on " + daysOfTheWeek[currentYear]
      } else if (female.checked) {
        document.getElementById(" x").innerHTML = "your Akan name is " + femaleNames[currentYear] + " so you were born on " + daysOfTheWeek[currentYear]
      }
    
    
    $ (document).ready(function(){
      $
    })

