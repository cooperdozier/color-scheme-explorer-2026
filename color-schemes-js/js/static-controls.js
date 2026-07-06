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
        default:
            document.querySelector(".main-column").style.backgroundColor = 'beige';
    }

    return {value, text};
    }
)