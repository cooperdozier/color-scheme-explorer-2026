// builder2.js
let inputOne = document.getElementById("color-exact-one");
let inputTwo = document.getElementById("color-exact-two");
let inputThree = document.getElementById("color-exact-three");
let inputFour = document.getElementById("color-exact-four");
let inputFive = document.getElementById("color-exact-five");
let inputSix = document.getElementById("color-exact-six");
let inputSeven = document.getElementById("color-exact-seven");
let inputEight = document.getElementById("color-exact-eight");
let inputNine = document.getElementById("color-exact-nine");
let inputTen = document.getElementById("color-exact-ten");

let inputButtonOne = document.getElementById("color-exact-one-button");
let inputButtonTwo = document.getElementById("color-exact-two-button");
let inputButtonThree = document.getElementById("color-exact-three-button");
let inputButtonFour = document.getElementById("color-exact-four-button");
let inputButtonFive = document.getElementById("color-exact-five-button");
let inputButtonSix = document.getElementById("color-exact-six-button");
let inputButtonSeven = document.getElementById("color-exact-seven-button");
let inputButtonEight = document.getElementById("color-exact-eight-button");
let inputButtonNine = document.getElementById("color-exact-nine-button");
let inputButtonTen = document.getElementById("color-exact-ten-button");

let colorPanel1 = document.getElementById("one");
let colorPanel2 = document.getElementById("two");
let colorPanel3 = document.getElementById("three");
let colorPanel4 = document.getElementById("four");
let colorPanel5 = document.getElementById("five");
let colorPanel6 = document.getElementById("six");
let colorPanel7 = document.getElementById("seven");
let colorPanel8 = document.getElementById("eight");
let colorPanel9 = document.getElementById("nine");
let colorPanel10 = document.getElementById("ten");

function displayExactColor(inputItem,inputPanel) {
    let color3 = inputItem.value;
    let out3 = '#' + color3;
    if (!CSS.supports('color', out3)) {
        alert('Please enter a valid 6 digit hex color')
        return
    } else {
    inputPanel.style.backgroundColor = `#${inputItem.value}`;
    inputPanel.innerText = `#${inputItem.value}`;
    }
}

inputButtonOne.addEventListener("click", e => {
    displayExactColor(inputOne,colorPanel1);
})
inputButtonTwo.addEventListener("click", e => {
    displayExactColor(inputTwo,colorPanel2);
})
inputButtonThree.addEventListener("click", e => {
    displayExactColor(inputThree,colorPanel3);
})
inputButtonFour.addEventListener("click", e => {
    displayExactColor(inputFour,colorPanel4);
})
inputButtonFive.addEventListener("click", e => {
    displayExactColor(inputFive,colorPanel5);
})
inputButtonSix.addEventListener("click", e => {
    displayExactColor(inputSix,colorPanel6);
})
inputButtonSeven.addEventListener("click", e => {
    displayExactColor(inputSeven,colorPanel7);
})
inputButtonEight.addEventListener("click", e => {
    displayExactColor(inputEight,colorPanel8);
})
inputButtonNine.addEventListener("click", e => {
    displayExactColor(inputNine,colorPanel9);
})
inputButtonTen.addEventListener("click", e => {
    displayExactColor(inputTen,colorPanel10);
})