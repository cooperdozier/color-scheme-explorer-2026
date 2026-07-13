// static-controls-2.js is used only in lorem-ipsum.html

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

document.getElementById("background-input").addEventListener("input", e => {
    document.querySelector(".main-column").style.backgroundColor = document.getElementById("background-input").value;
})

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