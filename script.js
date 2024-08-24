const convertBtn = document.getElementById("convert-btn");
const lengthConversion = document.getElementById("length-conversion");
const volumeConversion = document.getElementById("volume-conversion");
const massConversion = document.getElementById("mass-conversion");

const popupContainer = document.getElementById("popup-container");
const closePopupBtn = document.getElementById("close-popup-btn");

convertBtn.addEventListener("click", function() {
    const inputNum = document.getElementById("input-num").value.trim();

    if (!isValidNumber(inputNum)) {
        showPopup();
        return;
    }

    const numericValue = parseFloat(inputNum);

    const meterToFeet = (numericValue * 3.281).toFixed(3);
    const feetToMeter = (numericValue / 3.281).toFixed(3);
    lengthConversion.innerHTML = `${numericValue} meters = ${meterToFeet} feet | ${numericValue} feet = ${feetToMeter} meters`;

    const literToGallon = (numericValue * 0.264).toFixed(3);
    const gallonToLiter = (numericValue / 0.264).toFixed(3);
    volumeConversion.innerHTML = `${numericValue} liters = ${literToGallon} gallons | ${numericValue} gallons = ${gallonToLiter} liters`;

    const kgToPound = (numericValue * 2.204).toFixed(3);
    const poundToKg = (numericValue / 2.204).toFixed(3);
    massConversion.innerHTML = `${numericValue} kilograms = ${kgToPound} pounds | ${numericValue} pounds = ${poundToKg} kilograms`;
});

function isValidNumber(value) {
    return !isNaN(value) && !isNaN(parseFloat(value)) && /^[0-9]*\.?[0-9]+$/.test(value);
}

function showPopup() {
    popupContainer.style.visibility = "visible";
}

function hidePopup() {
    popupContainer.style.visibility = "hidden";
}

closePopupBtn.addEventListener("click", hidePopup);

const inputNum = document.getElementById("input-num");

let timeout;
inputNum.addEventListener("input", function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        const tempElement = document.createElement("span");
        tempElement.style.visibility = "hidden";
        tempElement.style.position = "absolute";
        tempElement.style.whiteSpace = "nowrap";
        tempElement.style.fontSize = getComputedStyle(inputNum).fontSize;
        tempElement.innerText = inputNum.value || inputNum.placeholder;

        document.body.appendChild(tempElement);
        const inputWidth = tempElement.offsetWidth;
        document.body.removeChild(tempElement);

        inputNum.style.width = `${Math.max(120, inputWidth + 10)}px`;
    }, 100);
});
