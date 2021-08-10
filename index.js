let allSpinner = document.querySelectorAll(".spinner");
const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const circleCountDom = document.querySelector(".circle-count");
const colorPicker = document.querySelector(".colorPicker");

let count = parseInt(circleCountDom.innerText);
let lastSpinner = allSpinner[allSpinner.length - 1];

decrease.addEventListener("click", decreaseCircle);
function decreaseCircle() {
    if (count > 1) {
        addSpinner(-1);
        increase.removeAttribute("disabled");
    }
    count -= 1;
    circleCountDom.innerText = count;
    if (count <= 1) {
        decrease.setAttribute("disabled", true);
    }
}

increase.addEventListener("click", increaseCircle);
function increaseCircle() {
    if (count < 10) {
        addSpinner(1);
        decrease.removeAttribute("disabled");
    }
    count += 1;
    circleCountDom.innerText = count;
    if (count >= 10) {
        increase.setAttribute("disabled", true);
    }
}
function addSpinner(count) {
    allSpinner = document.querySelectorAll(".spinner");
    lastSpinner = allSpinner[allSpinner.length - 1];
    if (count > 0) {
        lastSpinner.innerHTML = `<div class="spinner" style="border-top-color:${lastSpinner.style.borderTopColor}"></div>`;
        count -= 1;
        addSpinner(count);
    }
    if (count < 0) {
        lastSpinner.parentElement.removeChild(lastSpinner);
    }
}
addSpinner(count - 1);

colorPicker.addEventListener("input", changeColor);
function changeColor() {
    allSpinner = document.querySelectorAll(".spinner");
    console.log(allSpinner);
    // allSpinner.forEach((el) => {
    //     el.style.borderTopColor = this.value;
    // });
    for (const spinner of allSpinner) {
        spinner.style.borderTopColor = this.value;
        console.log(this.value);
    }
}
