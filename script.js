const main = document.getElementById("main");
const profile = document.getElementById("profile");
const weight = document.getElementById("weight-input");
const armCheck = document.getElementById("arm-input");
const temperature = document.getElementById("temp-input");
const pulse = document.getElementById("pulse-input");
const sys = document.getElementById("sys-input");
const dia = document.getElementById("dia-input");
const hematocrit = document.getElementById("hematocrit-input");
const totalProtein = document.getElementById("protein-input");
const resultBtn = document.getElementById("result-btn");
const adjustResult = document.getElementById("adjust-result");

let passedVitals = [];
let failedVitals = [];

getUser();

// GETS RANDOM USER
async function getUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  const user = data.results[0];

  profile.innerHTML = `<img
          class="profile-pic"
          id="donor"
          src="${user.picture.large}"
          alt="donor profile picture"
        />
        <div class="info">
          <h2>
  ${user.name.first} ${user.name.last}
          </h2>
          <p><strong>Birthdate: </strong>${user.dob.date.substring(0, 10)}</p>
          <p><strong>Gender: </strong>${user.gender}</p>
          <p><strong>Donor Number: </strong>${user.id.value}</p>
          <p><strong>Plasma Type: </strong>Non-GHA</p>
        </div>`;
}

// FINISH ADDING ICONS TO RESULTS STATUS
function checkWeight() {
  if (weight.value > 109 && weight.value < 401) {
    document.getElementById("weight-result").innerHTML =
      "<p>PASS<i class='ph ph-check-circle'></i></p>";
    document.getElementById("weight").innerHTML = `<p>${weight.value}lbs</p>`;
    passedVitals.push("PASS");
  } else if (weight.value < 109 || weight.value > 401) {
    document.getElementById("weight-result").innerHTML = "FAIL";
    document.getElementById("weight").innerHTML = `<p>${weight.value}lbs</p>`;
    failedVitals.push("FAIL");
  } else {
    document
      .getElementById("weight")
      .appendChild(document.createElement("p")).innerHTML = "Must be a number.";
  }
}

function checkArmCheck() {
  if (armCheck.value === "P" || armCheck.value === "p") {
    document.getElementById("arm-result").innerHTML = "PASS";
    document.getElementById("arm-check").innerHTML = `<p>${armCheck.value}</p>`;
    passedVitals.push("PASS");
  } else if (armCheck.value === "F" || armCheck.value === "f") {
    document.getElementById("arm-result").innerHTML = "FAIL";
    document.getElementById("arm-check").innerHTML = `<p>${armCheck.value}</p>`;
    failedVitals.push("FAIL");
  } else {
    document
      .getElementById("arm-check")
      .appendChild(
        document.createElement("p")
      ).innerHTML = `Must be "P" or "F".`;
  }
}

function checkTemperature() {
  if (temperature.value > 94.9 && temperature.value < 99.6) {
    document.getElementById("temp-result").innerHTML = "PASS";
    document.getElementById(
      "temperature"
    ).innerHTML = `<p>${temperature.value}  &#x2109;</p>`;
    passedVitals.push("PASS");
  } else if (temperature.value < 94.9 || temperature.value > 99.6) {
    document.getElementById("temp-result").innerHTML = "FAIL";
    document.getElementById(
      "temperature"
    ).innerHTML = `<p>${temperature.value}  &#x2109;</p>`;
    failedVitals.push("FAIL");
  } else {
    document
      .getElementById("temperature")
      .appendChild(document.createElement("p")).innerHTML =
      "Must be a decimal.";
  }
}

function checkPulse() {
  if (pulse.value > 49 && pulse.value < 101) {
    document.getElementById("pulse-result").innerHTML = "PASS";
    document.getElementById("pulse").innerHTML = `<p>${pulse.value}bpm</p>`;
    passedVitals.push("PASS");
  } else if (pulse.value < 49 || pulse.value > 101) {
    document.getElementById("pulse-result").innerHTML = "FAIL";
    document.getElementById("pulse").innerHTML = `<p>${pulse.value}bpm</p>`;
    failedVitals.push("FAIL");
  } else {
    document
      .getElementById("pulse")
      .appendChild(document.createElement("p")).innerHTML = "Must be a number.";
  }
}

function checkSys() {
  if (sys.value > 89 && sys.value < 181) {
    document.getElementById("sys-result").innerHTML = "PASS";
    document.getElementById("sys").innerHTML = `<p>${sys.value}mmHg</p>`;
    passedVitals.push("PASS");
  } else if (sys.value < 89 || sys.value > 181) {
    document.getElementById("sys-result").innerHTML = "FAIL";
    document.getElementById("sys").innerHTML = `<p>${sys.value}mmHg</p>`;
    failedVitals.push("FAIL");
  } else {
    document
      .getElementById("sys")
      .appendChild(document.createElement("p")).innerHTML = "Must be a number.";
  }
}

function checkDia() {
  if (dia.value > 49 && dia.value < 101) {
    document.getElementById("dia-result").innerHTML = "PASS";
    document.getElementById("dia").innerHTML = `<p>${dia.value}mmHg</p>`;
    passedVitals.push("PASS");
  } else if (dia.value < 49 || dia.value > 101) {
    document.getElementById("dia-result").innerHTML = "FAIL";
    document.getElementById("dia").innerHTML = `<p>${dia.value}mmHg</p>`;
    failedVitals.push("FAIL");
  } else {
    document
      .getElementById("dia")
      .appendChild(document.createElement("p")).innerHTML = "Must be a number.";
  }
}

function checkHematocrit() {
  if (hematocrit.value > 38 && hematocrit.value < 55) {
    document.getElementById("hematocrit-result").innerHTML = "PASS";
    document.getElementById(
      "hematocrit"
    ).innerHTML = `<p>${hematocrit.value}&#37;</p>`;
    passedVitals.push("PASS");
  } else if (hematocrit.value < 38 || hematocrit.value > 55) {
    document.getElementById("hematocrit-result").innerHTML = "FAIL";
    document.getElementById(
      "hematocrit"
    ).innerHTML = `<p>${hematocrit.value}&#37;</p>`;
    failedVitals.push("FAIL");
  } else {
    document
      .getElementById("hematocrit")
      .appendChild(document.createElement("p")).innerHTML = "Must be a number.";
  }
}

function checkTotalProtein() {
  if (totalProtein.value > 3.9 && totalProtein.value < 9.1) {
    document.getElementById("protein-result").innerHTML = "PASS";
    document.getElementById(
      "total-protein"
    ).innerHTML = `<p>${totalProtein.value}g/dl</p>`;
    passedVitals.push("PASS");
  } else if (totalProtein.value < 3.9 || totalProtein.value > 9.1) {
    document.getElementById("protein-result").innerHTML = "FAIL";
    document.getElementById(
      "total-protein"
    ).innerHTML = `<p>${totalProtein.value}g/dl</p>`;
    failedVitals.push("FAIL");
  } else {
    document
      .getElementById("total-protein")
      .appendChild(document.createElement("p")).innerHTML = "Must be a number.";
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
    main.innerHTML = `
    <div class="result">
    <h1>Donor Passed Screening</h1>
    <button onclick="location.reload()">Next Donor</button>
    </div>`;
  } else if (passedVitals.length < 8 && passedVitals.length > 0) {
    main.innerHTML = `
    <div class="result">
    <h1>Donor Failed Screening</h1>
    <button onclick="location.reload()">Next Donor</button>
    </div>`;
  } else {
    alert("Please fill out all vitals!");
  }
});
