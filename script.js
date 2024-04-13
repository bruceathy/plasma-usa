const weight = document.getElementById("weight");
const armCheck = document.getElementById("arm-check");
const temperature = document.getElementById("temperature");
const pulse = document.getElementById("pulse");
const sys = document.getElementById("sys");
const dia = document.getElementById("dia");
const hematocrit = document.getElementById("hematocrit");
const totalProtein = document.getElementById("total-protein");

function checkWeight() {
  if (weight.value > 110 && weight.value < 400) {
    document.getElementById("results-status").innerHTML = "PASS";
  } else {
    document.getElementById("results-status").innerHTML = "FAIL";
  }
}

weight.addEventListener("input", checkWeight);
