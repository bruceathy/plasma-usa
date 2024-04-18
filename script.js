const weight = document.getElementById("weight-input");
const armCheck = document.getElementById("arm-input");
const temperature = document.getElementById("temp-input");
const pulse = document.getElementById("pulse-input");
const sys = document.getElementById("sys-input");
const dia = document.getElementById("dia-input");
const hematocrit = document.getElementById("hematocrit-input");
const totalProtein = document.getElementById("protein-input");
const resultBtn = document.getElementById("result-btn");

let passedVitals = [];

// USE TRY CATCH INSTEAD OF IF STATEMENTS
function checkWeight() {
  if (weight.value > 109 && weight.value < 401) {
    document.getElementById("weight-result").innerHTML = "PASS";
    document.getElementById("weight").innerHTML = `${weight.value}  lbs`;
    passedVitals.push("weight");
  } else {
    document.getElementById("weight-result").innerHTML = "FAIL";
  }
}

function checkArmCheck() {
  if (armCheck.value === "P" || armCheck.value === "p") {
    document.getElementById("arm-result").innerHTML = "PASS";
    document.getElementById("arm-check").innerHTML = `${armCheck.value}`;
    passedVitals.push("armCheck");
  } else if (armCheck.value === "F" || armCheck.value === "f") {
    document.getElementById("arm-result").innerHTML = "FAIL";
  }
  // else {
  //   document.getElementById("arm-check").appendChild("INVALID").innerHTML =
  //     "INVALID";
  // }
}

function checkTemperature() {
  // REQUIRE A DECIMAL
  if (temperature.value > 94.9 && temperature.value < 99.6) {
    document.getElementById("temp-result").innerHTML = "PASS";
    document.getElementById(
      "temperature"
    ).innerHTML = `${temperature.value}  &#x2109;`;
    passedVitals.push("temperature");
  } else {
    document.getElementById("temp-result").innerHTML = "FAIL";
  }
}

function checkPulse() {
  if (pulse.value > 49 && pulse.value < 101) {
    document.getElementById("pulse-result").innerHTML = "PASS";
    document.getElementById("pulse").innerHTML = `${pulse.value}  bpm`;
    passedVitals.push("pulse");
  } else {
    document.getElementById("pulse-result").innerHTML = "FAIL";
  }
}

function checkSys() {
  if (sys.value > 89 && sys.value < 181) {
    document.getElementById("sys-result").innerHTML = "PASS";
    document.getElementById("sys").innerHTML = `${sys.value}  mmHg`;
    passedVitals.push("sys");
  } else {
    document.getElementById("sys-result").innerHTML = "FAIL";
  }
}

function checkDia() {
  if (dia.value > 49 && dia.value < 101) {
    document.getElementById("dia-result").innerHTML = "PASS";
    document.getElementById("dia").innerHTML = `${dia.value}  mmHg`;
    passedVitals.push("dia");
  } else {
    document.getElementById("dia-result").innerHTML = "FAIL";
  }
}

function checkHematocrit() {
  if (hematocrit.value > 38 && hematocrit.value < 55) {
    document.getElementById("hematocrit-result").innerHTML = "PASS";
    document.getElementById(
      "hematocrit"
    ).innerHTML = `${hematocrit.value}  &#37;`;
    passedVitals.push("hematocrit");
  } else {
    document.getElementById("hematocrit-result").innerHTML = "FAIL";
  }
}

function checkTotalProtein() {
  if (totalProtein.value > 3.9 && totalProtein.value < 9.1) {
    document.getElementById("protein-result").innerHTML = "PASS";
    document.getElementById(
      "total-protein"
    ).innerHTML = `${totalProtein.value}  g/dl`;
    passedVitals.push("totalProtein");
  } else {
    document.getElementById("protein-result").innerHTML = "FAIL";
  }
}

weight.addEventListener("change", checkWeight);
armCheck.addEventListener("change", checkArmCheck);
temperature.addEventListener("change", checkTemperature);
pulse.addEventListener("change", checkPulse);
sys.addEventListener("change", checkSys);
dia.addEventListener("change", checkDia);
hematocrit.addEventListener("change", checkHematocrit);
totalProtein.addEventListener("change", checkTotalProtein);
resultBtn.addEventListener("click", () => {
  if (passedVitals.length == 8) {
    alert("Passed Screening!");
  } else {
    alert("Failed Screening!");
  }
});
