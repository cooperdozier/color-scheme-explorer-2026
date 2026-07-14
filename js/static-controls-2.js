// static-controls-2.js is used only in lorem-ipsum.html

// variables for exact color selector inputs
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

// variables for exact color input selector submit buttons
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

//variables for color selector inputs for color elements
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

//variables for color display text and divs
let colorDisplay1 = document.getElementById("one");
let colorDisplay2 = document.getElementById("one");
let colorDisplay3 = document.getElementById("three");
let colorDisplay4 = document.getElementById("four");
let colorDisplay5 = document.getElementById("five");
let colorDisplay6 = document.getElementById("six");
let colorDisplay7 = document.getElementById("six");
let colorDisplay8 = document.getElementById("eight");
let colorDisplay9 = document.getElementById("nine");
let colorDisplay10 = document.getElementById("ten");



// set backgroundColor of color elements according to color selector inputs
color1.addEventListener("input", e => {
    colorDisplay1.style.backgroundColor = color1.value;
})
color2.addEventListener("input", e => {
    colorDisplay2.style.border = `solid 8px ${color2.value}`;
})
color3.addEventListener("input", e => {
    colorDisplay3.style.color = color3.value;
})
color4.addEventListener("input", e => {
    colorDisplay4.style.color = color4.value;
})
color5.addEventListener("input", e => {
    colorDisplay5.style.backgroundColor = color5.value;
})
color6.addEventListener("input", e => {
    colorDisplay6.style.backgroundColor = color6.value;
})
color7.addEventListener("input", e => {
    colorDisplay7.style.border = `solid 8px ${color7.value}`;
})
color8.addEventListener("input", e => {
    colorDisplay8.style.color = color8.value;
})
color9.addEventListener("input", e => {
    colorDisplay9.style.color = color9.value;
})
color10.addEventListener("input", e => {
    colorDisplay10.style.backgroundColor = color10.value;
})

// initialize variable for save-scheme functionality; has to be outside of the event listener for some reason
let scheme =[];

// listen for click on save-scheme button then gather all scheme data into an array and save it to the next localStorage position
document.getElementById("save-scheme").addEventListener("click", e =>{
    scheme = [document.getElementById("scheme-title").value,color1.value,color2.value,color3.value,color4.value,color5.value,color6.value,color7.value,color8.value,color9.value,color10.value]
    localStorage.setItem(`Scheme ${localStorage.length}`, JSON.stringify(scheme));
})

function displayExactColorBg(inputItem,inputPanel) {
    let color3 = inputItem.value;
    let out3 = '#' + color3;
    if (!CSS.supports('color', out3)) {
        alert('Please enter a valid 6 digit hex color')
        return
    } else {
    inputPanel.style.backgroundColor = `#${inputItem.value}`;
    }
}
function displayExactColorBorder(inputItem,inputPanel) {
    let color3 = inputItem.value;
    let out3 = '#' + color3;
    if (!CSS.supports('color', out3)) {
        alert('Please enter a valid 6 digit hex color')
        return
    } else {
    inputPanel.style.border = `8px solid #${inputItem.value}`;
    }
}
function displayExactColorText(inputItem,inputPanel) {
    let color3 = inputItem.value;
    let out3 = '#' + color3;
    if (!CSS.supports('color', out3)) {
        alert('Please enter a valid 6 digit hex color')
        return
    } else {
    inputPanel.style.color = `#${inputItem.value}`;
    }
}

inputButtonOne.addEventListener("click", e => {
    displayExactColorBg(inputOne,colorDisplay1);
})
inputButtonTwo.addEventListener("click", e => {
    displayExactColorBorder(inputTwo,colorDisplay2);
})
inputButtonThree.addEventListener("click", e => {
    displayExactColorText(inputThree,colorDisplay3);
})
inputButtonFour.addEventListener("click", e => {
    displayExactColorText(inputFour,colorDisplay4);
})
inputButtonFive.addEventListener("click", e => {
    displayExactColorBg(inputFive,colorDisplay5);
})
inputButtonSix.addEventListener("click", e => {
    displayExactColorBg(inputSix,colorDisplay6);
})
inputButtonSeven.addEventListener("click", e => {
    displayExactColorBorder(inputSeven,colorDisplay7);
})
inputButtonEight.addEventListener("click", e => {
    displayExactColorText(inputEight,colorDisplay8);
})
inputButtonNine.addEventListener("click", e => {
    displayExactColorText(inputNine,colorDisplay9);
})
inputButtonTen.addEventListener("click", e => {
    displayExactColorBg(inputTen,colorDisplay10);
})