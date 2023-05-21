let fare = {
  distance: "",
  age: "",

  calculate() {
    let price = 8;
    if (this.distance > 4) {
      let additional = this.distance - 4;
      price += additional;
    }
    if (this.age > 60) {
      return price * 0.8;
    } else {
      return price;
    }
  },
};

const button = document.getElementById("btn_calc");

button.addEventListener("click", function () {
  fare.age = document.getElementById("age").value;
  fare.distance = document.getElementById("distance").value;
  document.getElementById("fare").innerHTML = fare.calculate();
});
