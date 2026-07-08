    // const dropdown = document.getElementById("bg-select");
    // const value = dropdown.value;
    // const text = dropdown.options[dropdown.selectedIndex].text;
document.getElementById("bg-select-button").addEventListener("click", e => {
    const dropdown = document.getElementById("bg-select");
    const value = dropdown.value;
    const text = dropdown.options[dropdown.selectedIndex].text;
    switch (text) {
        case 'Black':
            document.querySelector(".main-column").style.backgroundColor = "black";
            break;
        case 'White':
            document.querySelector(".main-column").style.backgroundColor = "white";
            break;
        case 'Light':
            document.querySelector(".main-column").style.backgroundColor = '#fcefef';
            break;
        case 'Grey':
            document.querySelector(".main-column").style.backgroundColor = '#b9c4d5';
            break;
        case "Dark":
            document.querySelector(".main-column").style.backgroundColor = '#041a30';
            break;
        case "Beige":
            document.querySelector(".main-column").style.backgroundColor = 'beige';
            break;
        case "Random":
            let bgColor = '#' + (Math.floor(Math.random() * 16777216)).toString(16)
            document.querySelector(".main-column").style.backgroundColor = `${bgColor}`;
            break;
        default:
            document.querySelector(".main-column").style.backgroundColor = 'beige';
    }

    return {value, text};
    }
)

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

document.getElementById("color-1").addEventListener("input", e => {
    document.getElementById("one").style.backgroundColor = color1.value;
})
document.getElementById("color-2").addEventListener("input", e => {
    document.getElementById("two").style.backgroundColor = color2.value;
})
document.getElementById("color-3").addEventListener("input", e => {
    document.getElementById("three").style.backgroundColor = color3.value;
})
document.getElementById("color-4").addEventListener("input", e => {
    document.getElementById("four").style.backgroundColor = color4.value;
})
document.getElementById("color-5").addEventListener("input", e => {
    document.getElementById("five").style.backgroundColor = color5.value;
})
document.getElementById("color-6").addEventListener("input", e => {
    document.getElementById("six").style.backgroundColor = color6.value;
})
document.getElementById("color-7").addEventListener("input", e => {
    document.getElementById("seven").style.backgroundColor = color7.value;
})
document.getElementById("color-8").addEventListener("input", e => {
    document.getElementById("eight").style.backgroundColor = color8.value;
})
document.getElementById("color-9").addEventListener("input", e => {
    document.getElementById("nine").style.backgroundColor = color9.value;
})
document.getElementById("color-10").addEventListener("input", e => {
    document.getElementById("ten").style.backgroundColor = color10.value;
})

let scheme =[];
// let n = localStorage.length;
document.getElementById("save-scheme").addEventListener("click", e =>{
    scheme = [document.getElementById("scheme-title").value,color1.value,color2.value,color3.value,color4.value,color5.value,color6.value,color7.value,color8.value,color9.value,color10.value]
    localStorage.setItem(`Scheme ${localStorage.length}`, JSON.stringify(scheme));
    // n = n+1;
})