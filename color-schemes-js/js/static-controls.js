// static-controls.js is used in circles.html and bars.html

// set background color of main column
document.getElementById("bg-select-button").addEventListener("click", e => {
    const dropdown = document.getElementById("bg-select");
    const value = dropdown.value;
    // const text = dropdown.options[dropdown.selectedIndex].text;
    switch (value) {
        case 'black':
            document.querySelector(".main-column").style.backgroundColor = "black";
            break;
        case 'white':
            document.querySelector(".main-column").style.backgroundColor = "white";
            break;
        case 'light':
            document.querySelector(".main-column").style.backgroundColor = '#fcefef';
            break;
        case 'grey':
            document.querySelector(".main-column").style.backgroundColor = '#b9c4d5';
            break;
        case "dark":
            document.querySelector(".main-column").style.backgroundColor = '#041a30';
            break;
        case "beige":
            document.querySelector(".main-column").style.backgroundColor = 'beige';
            break;
        case "random":
            let bgColor = '#' + (Math.floor(Math.random() * 16777216)).toString(16)
            document.querySelector(".main-column").style.backgroundColor = `${bgColor}`;
            break;
        default:
            document.querySelector(".main-column").style.backgroundColor = 'beige';
    }

    // return {value, text};
    }
)

// set background according to hex color text input
document.getElementById("background-input-exact-submit").addEventListener("click", e => {
    // input validation
    color = document.getElementById("background-input-exact").value;
    let out = '#' + color;
    if (!CSS.supports('color', out)) {
        alert('Please enter a valid 6 digit hex color')
        return
    }
    document.querySelector(".main-column").style.backgroundColor = `#${document.getElementById("background-input-exact").value}`;
})

// set background according to color selector input
document.getElementById("background-input").addEventListener("input", e => {
    document.querySelector(".main-column").style.backgroundColor = document.getElementById("background-input").value;
})

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

// initialize save scheme variable; has to be outside the event listener for some reason
let scheme =[];
// on click for save-scheme button gather all scheme data into an array and save it to localStorage
document.getElementById("save-scheme").addEventListener("click", e =>{
    scheme = [document.getElementById("scheme-title").value,color1.value,color2.value,color3.value,color4.value,color5.value,color6.value,color7.value,color8.value,color9.value,color10.value]
    localStorage.setItem(`Scheme ${localStorage.length}`, JSON.stringify(scheme));
    // n = n+1;
})