// fetch-2.js is used only by lorem-ipsum.html
// the difference is that some of the values being set are text color, background color, or border color
// instead of all ten values setting a background color


async function sendRequest1(color,mode) {
    // Get input from HTML inputs for color scheme type and seed color value
    mode = document.getElementById("scheme-select-mode").value;
    color = document.getElementById("scheme-select-color").value.slice(1,7);
    // API call and translation
    let url = `https://www.thecolorapi.com/scheme?hex=${color}&count=10&format=json&mode=${mode}`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
}


async function sendRequest2(color,mode) {
    // Get input from HTML inputs for color scheme type and seed color value
    mode = document.getElementById("scheme-select-mode-exact").value;
    color = document.getElementById("scheme-select-color-exact").value;
    // Input validation
    let out = '#' + color;
    if (!CSS.supports('color', out)) {
        alert('Please enter a valid 6 digit hex color')
        return
    }
    // API call and translation
    let url = `https://www.thecolorapi.com/scheme?hex=${color}&count=10&format=json&mode=${mode}`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
}


async function getData1() {
    // Get Data from thecolorapi.com
    const data = await sendRequest1();
    // Style divs and text in lorem-ipsum.html with API 
    document.getElementById("one").style.backgroundColor = `${data.colors[0].hex.value}`;
    document.getElementById("one").style.border = `8px solid ${data.colors[1].hex.value}`;
    document.getElementById("three").style.color = `${data.colors[2].hex.value}`;
    document.getElementById("four").style.color = `${data.colors[3].hex.value}`;
    document.getElementById("five").style.color = `${data.colors[4].hex.value}`;
    document.getElementById("six").style.backgroundColor = `${data.colors[5].hex.value}`;
    document.getElementById("six").style.border = `8px solid ${data.colors[6].hex.value}`;
    document.getElementById("eight").style.color = `${data.colors[7].hex.value}`;
    document.getElementById("nine").style.color = `${data.colors[8].hex.value}`;
    document.getElementById("ten").style.color = `${data.colors[9].hex.value}`;
    // Use API data to set color select buttons
    document.getElementById("color-1").value = `${data.colors[0].hex.value}`;
    document.getElementById("color-2").value = `${data.colors[1].hex.value}`;
    document.getElementById("color-3").value = `${data.colors[2].hex.value}`;
    document.getElementById("color-4").value = `${data.colors[3].hex.value}`;
    document.getElementById("color-5").value = `${data.colors[4].hex.value}`;
    document.getElementById("color-6").value = `${data.colors[5].hex.value}`;
    document.getElementById("color-7").value = `${data.colors[6].hex.value}`;
    document.getElementById("color-8").value = `${data.colors[7].hex.value}`;
    document.getElementById("color-9").value = `${data.colors[8].hex.value}`;
    document.getElementById("color-10").value = `${data.colors[9].hex.value}`;
}


async function getData2() {
    // Get Data from thecolorapi.com
    const data = await sendRequest2();
    // Style divs and textin lorem-ipsum.html with API 
    document.getElementById("one").style.backgroundColor = `${data.colors[0].hex.value}`;
    document.getElementById("one").style.border = `8px solid ${data.colors[1].hex.value}`;
    document.getElementById("three").style.color = `${data.colors[2].hex.value}`;
    document.getElementById("four").style.color = `${data.colors[3].hex.value}`;
    document.getElementById("five").style.color = `${data.colors[4].hex.value}`;
    document.getElementById("six").style.backgroundColor = `${data.colors[5].hex.value}`;
    document.getElementById("six").style.border = `8px solid ${data.colors[6].hex.value}`;
    document.getElementById("eight").style.color = `${data.colors[7].hex.value}`;
    document.getElementById("nine").style.color = `${data.colors[8].hex.value}`;
    document.getElementById("ten").style.color = `${data.colors[9].hex.value}`;
    // Use API data to set color select buttons
    document.getElementById("color-1").value = `${data.colors[0].hex.value}`;
    document.getElementById("color-2").value = `${data.colors[1].hex.value}`;
    document.getElementById("color-3").value = `${data.colors[2].hex.value}`;
    document.getElementById("color-4").value = `${data.colors[3].hex.value}`;
    document.getElementById("color-5").value = `${data.colors[4].hex.value}`;
    document.getElementById("color-6").value = `${data.colors[5].hex.value}`;
    document.getElementById("color-7").value = `${data.colors[6].hex.value}`;
    document.getElementById("color-8").value = `${data.colors[7].hex.value}`;
    document.getElementById("color-9").value = `${data.colors[8].hex.value}`;
    document.getElementById("color-10").value = `${data.colors[9].hex.value}`;
}


document.getElementById('get-scheme').addEventListener('click', e => {
    // Prevent reloading a page with no data on click
    e.preventDefault();
    // Do all the above things
    getData1();
}
)


document.getElementById('get-scheme-exact').addEventListener('click', e => {
    // Prevent reloading a page with no data on click
    e.preventDefault();
    // Do all the above things
    getData2();
}
)

// getData();