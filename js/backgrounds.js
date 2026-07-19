// set background colors on all pages but index

// set background color of main column according to presets or random
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

    }
)

// set background according to hex color text input
document.getElementById("background-input-exact-submit").addEventListener("click", e => {
    // input validation that it is a valid CSS hex color
    color = document.getElementById("background-input-exact").value;
    let out = '#' + color;
    if (!CSS.supports('color', out)) {
        alert('Please enter a valid 6 digit hex color')
        return
    }
    // set the background color
    document.querySelector(".main-column").style.backgroundColor = `#${document.getElementById("background-input-exact").value}`;
})

// set background according to color selector input
document.getElementById("background-input").addEventListener("input", e => {
    document.querySelector(".main-column").style.backgroundColor = document.getElementById("background-input").value;
})