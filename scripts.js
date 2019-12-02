function akanNames() {
  var day = parseInt(document.getElementById("d").value);
  var month = parseInt(document.getElementById("m").value);
  var year = parseInt(document.getElementById("y").value);


  var male = document.getElementById("male");
  var female = document.getElementById("female");
  var display = document.getElementById("display");


  var dateOfTheWeek = new Date(year + "/" + month + "/" + day);
  var result = dateOfTheWeek.getDay();
  alert(result);



  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var maleNames = ["Kwasi", " Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  alert(maleNames[0]);
}