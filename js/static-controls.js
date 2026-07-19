// static-controls.js is used in circles.html and bars.html

// variables for exact hex color selectors
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

// variables for exact hex color selectors' submit buttons
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

// variables for color selector inputs
let color1 = document.getElementById("color-1");
let color2 = document.getElementById("color-2");
let color3 = document.getElementById("color-3");
let color4 = document.getElementById("color-4");
let color5 = document.getElementById("color-5");
let color6 = document.getElementById("color-6");
let color7 = document.getElementById("color-7");
let color8 = document.getElementById("color-8");
let color9 = document.getElementById("color-9");
let color10 = document.getElementById("color-10");

// variables for color display circles or bars
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


// set each color element's color according to selections from color selectors
color1.addEventListener("input", e => {
    colorPanel1.style.backgroundColor = color1.value;
})
color2.addEventListener("input", e => {
    colorPanel2.style.backgroundColor = color2.value;
})
color3.addEventListener("input", e => {
    colorPanel3.style.backgroundColor = color3.value;
})
color4.addEventListener("input", e => {
    colorPanel4.style.backgroundColor = color4.value;
})
color5.addEventListener("input", e => {
    colorPanel5.style.backgroundColor = color5.value;
})
color6.addEventListener("input", e => {
    colorPanel6.style.backgroundColor = color6.value;
})
color7.addEventListener("input", e => {
    colorPanel7.style.backgroundColor = color7.value;
})
color8.addEventListener("input", e => {
    colorPanel8.style.backgroundColor = color8.value;
})
color9.addEventListener("input", e => {
    colorPanel9.style.backgroundColor = color9.value;
})
color10.addEventListener("input", e => {
    colorPanel10.style.backgroundColor = color10.value;
})


// add text to each color element with hex value of the color that's in it
color1.addEventListener("input", e => {
    colorPanel1.innerText = color1.value;
})
color2.addEventListener("input", e => {
    colorPanel2.innerText = color2.value;
})
color3.addEventListener("input", e => {
    colorPanel3.innerText = color3.value;
})
color4.addEventListener("input", e => {
    colorPanel4.innerText = color4.value;
})
color5.addEventListener("input", e => {
    colorPanel5.innerText = color5.value;
})
color6.addEventListener("input", e => {
    colorPanel6.innerText = color6.value;
})
color7.addEventListener("input", e => {
    colorPanel7.innerText = color7.value;
})
color8.addEventListener("input", e => {
    colorPanel8.innerText = color8.value;
})
color9.addEventListener("input", e => {
    colorPanel9.innerText = color9.value;
})
color10.addEventListener("input", e => {
    colorPanel10.innerText = color10.value;
})

// Put the localStorage key of the next saved color scheme on the Save Scheme button ("Scheme 0", "Scheme 1", etc.)
document.getElementById("save-scheme").innerText = `Save Scheme ${localStorage.length}`;


// initialize save scheme variable; has to be outside the event listener for some reason
let scheme =[];
// on click for save-scheme button gather all scheme data into an array and save it to localStorage
document.getElementById("save-scheme").addEventListener("click", e =>{
    scheme = [document.getElementById("scheme-title").value,color1.value,color2.value,color3.value,color4.value,color5.value,color6.value,color7.value,color8.value,color9.value,color10.value]
    localStorage.setItem(`Scheme ${localStorage.length}`, JSON.stringify(scheme));
    // n = n+1;
})

// display exact hex colors to circle or bar backgrounds, first validating that it is a valid CSS hex color
// and add text with #xxxxxx hex color number to each bar or circle
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

// listeners and functions for each exact color input
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