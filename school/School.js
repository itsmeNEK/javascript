function School(name, year_level, units, lab) {
  this.name = name;
  this.year_level = year_level;
  this.units = units;
  this.lab = lab;

  this.getTotal = function () {
    let price = 0;
    let lab_price = 0;
    switch (this.year_level) {
      case "1st":
        price = 550;
        lab_price = 3359;
        break;
      case "2nd":
        price = 630;
        lab_price = 4000;
        break;
      case "3rd":
        price = 470;
        lab_price = 2890;
        break;
      case "4th":
        price = 501;
        lab_price = 3555;
        break;
    }

    switch (this.lab) {
      case "yes":
        return price * this.units + lab_price;
        break;
      case "no":
        return price * this.units;
        break;
    }
  };
}
var result = document.getElementById("result");

result.style.display = "none";

const button = document.getElementById("submit");

button.addEventListener("click", function () {
  result.style.display = "block";
  let stud_name = document.getElementById("name").value;
  let year_level = document.getElementById("year_level").value;
  let units = document.getElementById("units").value;
  let laboratory = document.getElementsByName("laboratory");

  for (var i = 0; i < laboratory.length; i++) {
    if (laboratory[i].checked) {
      var selectedValue = laboratory[i].value;
    }
  }
  var School_obj = new School(stud_name, year_level, units, selectedValue);

  document.getElementById("stud_name").innerText = stud_name;
  document.getElementById("stud_year_level").innerText =
    year_level + " Year Level";
  document.getElementById("stud_units").innerText = units;
  switch (selectedValue) {
    case "yes":
      document.getElementById("stud_lab").innerText = "With Laboratory";
      break;
    case "no":
      document.getElementById("stud_lab").innerText = "Without Laboratory";
      break;
  }
  document.getElementById("stud_total").innerText = School_obj.getTotal();
});
