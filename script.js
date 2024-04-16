const weight = document.getElementById("weight-input");
const armCheck = document.getElementById("arm-check-input");
const temperature = document.getElementById("temp-input");
const pulse = document.getElementById("pulse-input");
const sys = document.getElementById("sys-input");
const dia = document.getElementById("dia-input");
const hematocrit = document.getElementById("hematocrit-input");
const totalProtein = document.getElementById("protein-input");
const resultBtn = document.getElementById("result-btn");

let passedVitals = [];

function checkWeight() {
  if (weight.value > 109 && weight.value < 400) {
    document.getElementById("weight-result").innerHTML = "PASS";
    passedVitals.push("weight");
  } else {
    document.getElementById("weight-result").innerHTML = "FAIL";
  }
}

function checkArmCheck() {
  if (armCheck.value === "P" || armCheck.value === "p") {
    document.getElementById("arm-result").innerHTML = "PASS";
    document.getElementById("arm-check").innerHTML = `${armCheck.value} lbs`;
    passedVitals.push("armCheck");
  } else if (armCheck.value === "F" || armCheck.value === "f") {
    document.getElementById("arm-result").innerHTML = "FAIL";
  } else {
    document.getElementById("arm-check").innerHTML = "INVALID";
  }
}

function checkTemperature() {
  if (temperature.value > 94.9 && temperature.value < 99.6) {
    document.getElementById("temp-result").innerHTML = "PASS";
    passedVitals.push("temperature");
  } else {
    document.getElementById("temp-result").innerHTML = "FAIL";
  }
}

function checkPulse() {
  if (pulse.value > 49 && pulse.value < 101) {
    document.getElementById("pulse-result").innerHTML = "PASS";
    passedVitals.push("pulse");
  } else {
    document.getElementById("pulse-result").innerHTML = "FAIL";
  }
}

function checkSys() {
  if (sys.value > 89 && sys.value < 181) {
    document.getElementById("sys-result").innerHTML = "PASS";
    passedVitals.push("sys");
  } else {
    document.getElementById("sys-result").innerHTML = "FAIL";
  }
}

function checkDia() {
  if (dia.value > 49 && dia.value < 101) {
    document.getElementById("dia-result").innerHTML = "PASS";
    passedVitals.push("dia");
  } else {
    document.getElementById("dia-result").innerHTML = "FAIL";
  }
}

function checkHematocrit() {
  if (hematocrit.value > 38 && hematocrit.value < 55) {
    document.getElementById("hematocrit-result").innerHTML = "PASS";
    passedVitals.push("hematocrit");
  } else {
    document.getElementById("hematocrit-result").innerHTML = "FAIL";
  }
}

function checkTotalProtein() {
  if (totalProtein.value > 3.9 && totalProtein.value < 9.1) {
    document.getElementById("protein-result").innerHTML = "PASS";
    passedVitals.push("totalProtein");
  } else {
    document.getElementById("protein-result").innerHTML = "FAIL";
  }
}

weight.addEventListener("input", checkWeight);
armCheck.addEventListener("input", checkArmCheck);
temperature.addEventListener("input", checkTemperature);
pulse.addEventListener("input", checkPulse);
sys.addEventListener("input", checkSys);
dia.addEventListener("input", checkDia);
hematocrit.addEventListener("input", checkHematocrit);
totalProtein.addEventListener("input", checkTotalProtein);
resultBtn.addEventListener("click", () => {
  if (passedVitals.length == 8) {
    alert("Passed Screening!");
  } else {
    alert("Failed Screening!");
  }
  console.log(passedVitals);
});
