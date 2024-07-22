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

let passedVitals = [];

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

// STOP USER FROM ENERING EMPTY INPUTS
function checkWeight() {
  if (weight.value.trim() === "") {
    return;
  } else if (weight.value > 109 && weight.value < 401) {
    document.getElementById("weight-result").innerHTML = `
      <div class="status-msg">
        <p>PASS</p>
        <i class='ph ph-check-circle'></i>
      </div>`;
    document.getElementById("weight").innerHTML = `<p>${weight.value}lbs</p>`;
    passedVitals.push("PASS");
  } else if (weight.value < 109 || weight.value > 401) {
    document.getElementById("weight-result").innerHTML = `
      <div class="status-msg">
        <p>FAIL</p>
        <i class='ph ph-x-circle'></i>
        <button type="button" class="take-action">Take Action</button>
      </div>`;
    document.getElementById("weight").innerHTML = `<p>${weight.value}lbs</p>`;
  } else {
    document
      .getElementById("weight")
      .appendChild(document.createElement("div")).innerHTML =
      "<p class='error-text'>Must be a number.</p>";
  }
}

function checkArmCheck() {
  if (weight.value.trim() === "") {
    return;
  } else if (armCheck.value === "P" || armCheck.value === "p") {
    document.getElementById("arm-result").innerHTML = `
      <div class="status-msg">
        <p>PASS</p>
        <i class='ph ph-check-circle'></i>
      </div>`;
    document.getElementById("arm-check").innerHTML = `<p>${armCheck.value}</p>`;
    passedVitals.push("PASS");
  } else if (armCheck.value === "F" || armCheck.value === "f") {
    document.getElementById("arm-result").innerHTML = `
      <div class="status-msg">
        <p>FAIL</p>
        <i class='ph ph-x-circle'></i>
      </div>`;
    document.getElementById("arm-check").innerHTML = `<p>${armCheck.value}</p>`;
  } else {
    document
      .getElementById("arm-check")
      .appendChild(document.createElement("div")).innerHTML =
      "<p class='error-text'>Must be a 'P' or 'F'</p>";
  }
}

function checkTemperature() {
  if (weight.value.trim() === "") {
    return;
  } else if (temperature.value > 94.9 && temperature.value < 99.6) {
    document.getElementById("temp-result").innerHTML = `
      <div class="status-msg">
        <p>PASS</p>
        <i class='ph ph-check-circle'></i>
      </div>`;
    document.getElementById(
      "temperature"
    ).innerHTML = `<p>${temperature.value}  &#x2109;</p>`;
    passedVitals.push("PASS");
  } else if (temperature.value < 94.9 || temperature.value > 99.6) {
    document.getElementById("temp-result").innerHTML = `
      <div class="status-msg">
        <p>FAIL</p>
        <i class='ph ph-x-circle'></i>
      </div>`;
    document.getElementById(
      "temperature"
    ).innerHTML = `<p>${temperature.value}  &#x2109;</p>`;
  } else {
    document
      .getElementById("temperature")
      .appendChild(document.createElement("div")).innerHTML =
      "<p class='error-text'>Must be a decimal.</p>";
  }
}

function checkPulse() {
  if (weight.value.trim() === "") {
    return;
  } else if (pulse.value > 49 && pulse.value < 101) {
    document.getElementById("pulse-result").innerHTML = `
      <div class="status-msg">
        <p>PASS</p>
        <i class='ph ph-check-circle'></i>
      </div>`;
    document.getElementById("pulse").innerHTML = `<p>${pulse.value}bpm</p>`;
    passedVitals.push("PASS");
  } else if (pulse.value < 49 || pulse.value > 101) {
    document.getElementById("pulse-result").innerHTML = `
      <div class="status-msg">
        <p>FAIL</p>
        <i class='ph ph-x-circle'></i>
      </div>`;
    document.getElementById("pulse").innerHTML = `<p>${pulse.value}bpm</p>`;
  } else {
    document
      .getElementById("pulse")
      .appendChild(document.createElement("div")).innerHTML =
      "<p class='error-text'>Must be a number.</p>";
  }
}

function checkSys() {
  if (weight.value.trim() === "") {
    return;
  } else if (sys.value > 89 && sys.value < 181) {
    document.getElementById("sys-result").innerHTML = `
      <div class="status-msg">
        <p>PASS</p>
        <i class='ph ph-check-circle'></i>
      </div>`;
    document.getElementById("sys").innerHTML = `<p>${sys.value}mmHg</p>`;
    passedVitals.push("PASS");
  } else if (sys.value < 89 || sys.value > 181) {
    document.getElementById("sys-result").innerHTML = `
      <div class="status-msg">
        <p>FAIL</p>
        <i class='ph ph-x-circle'></i>
      </div>`;
    document.getElementById("sys").innerHTML = `<p>${sys.value}mmHg</p>`;
  } else {
    document
      .getElementById("sys")
      .appendChild(document.createElement("div")).innerHTML =
      "<p class='error-text'>Must be a number.</p>";
  }
}

function checkDia() {
  if (weight.value.trim() === "") {
    return;
  } else if (dia.value > 49 && dia.value < 101) {
    document.getElementById("dia-result").innerHTML = `
      <div class="status-msg">
        <p>PASS</p>
        <i class='ph ph-check-circle'></i>
      </div>`;
    document.getElementById("dia").innerHTML = `<p>${dia.value}mmHg</p>`;
    passedVitals.push("PASS");
  } else if (dia.value < 49 || dia.value > 101) {
    document.getElementById("dia-result").innerHTML = `
      <div class="status-msg">
        <p>FAIL</p>
        <i class='ph ph-x-circle'></i>
      </div>`;
    document.getElementById("dia").innerHTML = `<p>${dia.value}mmHg</p>`;
    failedVitals.push("FAIL");
  } else {
    document
      .getElementById("dia")
      .appendChild(document.createElement("div")).innerHTML =
      "<p class='error-text'>Must be a number.</p>";
  }
}

function checkHematocrit() {
  if (weight.value.trim() === "") {
    // Handle empty input, display an error message, or prevent further action
    return;
  } else if (hematocrit.value > 38 && hematocrit.value < 55) {
    document.getElementById("hematocrit-result").innerHTML = `
      <div class="status-msg">
        <p>PASS</p>
        <i class='ph ph-check-circle'></i>
      </div>`;
    document.getElementById(
      "hematocrit"
    ).innerHTML = `<p>${hematocrit.value}&#37;</p>`;
    passedVitals.push("PASS");
  } else if (hematocrit.value < 38 || hematocrit.value > 55) {
    document.getElementById("hematocrit-result").innerHTML = `
      <div class="status-msg">
        <p>FAIL</p>
        <i class='ph ph-x-circle'></i>
      </div>`;
    document.getElementById(
      "hematocrit"
    ).innerHTML = `<p>${hematocrit.value}&#37;</p>`;
    failedVitals.push("FAIL");
  } else {
    document
      .getElementById("hematocrit")
      .appendChild(document.createElement("div")).innerHTML =
      "<p class='error-text'>Must be a percentage.</p>";
  }
}

function checkTotalProtein() {
  if (weight.value.trim() === "") {
    // Handle empty input, display an error message, or prevent further action
    return;
  } else if (totalProtein.value > 3.9 && totalProtein.value < 9.1) {
    document.getElementById("protein-result").innerHTML = `
      <div class="status-msg">
        <p>PASS</p>
        <i class='ph ph-check-circle'></i>
      </div>`;
    document.getElementById(
      "total-protein"
    ).innerHTML = `<p>${totalProtein.value}g/dl</p>`;
    passedVitals.push("PASS");
  } else if (totalProtein.value < 3.9 || totalProtein.value > 9.1) {
    document.getElementById("protein-result").innerHTML = `
      <div class="status-msg">
        <p>FAIL</p>
        <i class='ph ph-x-circle'></i>
      </div>`;
    document.getElementById(
      "total-protein"
    ).innerHTML = `<p>${totalProtein.value}g/dl</p>`;
    failedVitals.push("FAIL");
  } else {
    document
      .getElementById("total-protein")
      .appendChild(document.createElement("div")).innerHTML =
      "<p class='error-text'>Must be a decimal.</p>";
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
