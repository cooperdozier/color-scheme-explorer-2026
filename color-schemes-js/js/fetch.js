// fetch.js is used in bars.html and circles.html

async function sendRequest1(color,mode) {
    // get color mode selection and seed color value from HTML inputs
    // color selector version
    mode = document.getElementById("scheme-select-mode").value;
    color = document.getElementById("scheme-select-color").value.slice(1,7);
    // get generated scheme data from thecolorapi.com
    let url = `https://www.thecolorapi.com/scheme?hex=${color}&count=10&format=json&mode=${mode}`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
}


async function sendRequest2(color,mode) {
    // get color mode selection and seed color value from HTML inputs
    // color text input version
    mode = document.getElementById("scheme-select-mode-exact").value;
    color = document.getElementById("scheme-select-color-exact").value;
    // validate 6 digit hex color input for scheme seed
    let out = '#' + color;
    if (!CSS.supports('color', out)) {
        alert('Please enter a valid 6 digit hex color')
        return
    }
    // get generated scheme data from thecolorapi.com
    let url = `https://www.thecolorapi.com/scheme?hex=${color}&count=10&format=json&mode=${mode}`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
}


async function getData1() {
    // get generated scheme data
    const data = await sendRequest1();
    // style bars or circles with generated scheme
    document.getElementById("one").style.backgroundColor = `${data.colors[0].hex.value}`;
    document.getElementById("two").style.backgroundColor = `${data.colors[1].hex.value}`;
    document.getElementById("three").style.backgroundColor = `${data.colors[2].hex.value}`;
    document.getElementById("four").style.backgroundColor = `${data.colors[3].hex.value}`;
    document.getElementById("five").style.backgroundColor = `${data.colors[4].hex.value}`;
    document.getElementById("six").style.backgroundColor = `${data.colors[5].hex.value}`;
    document.getElementById("seven").style.backgroundColor = `${data.colors[6].hex.value}`;
    document.getElementById("eight").style.backgroundColor = `${data.colors[7].hex.value}`;
    document.getElementById("nine").style.backgroundColor = `${data.colors[8].hex.value}`;
    document.getElementById("ten").style.backgroundColor = `${data.colors[9].hex.value}`;
    // set color select buttons to generated scheme data
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
    // set text in color elements to color hex values
    document.getElementById("one").innerText = `${data.colors[0].hex.value}`;
    document.getElementById("two").innerText = `${data.colors[1].hex.value}`;
    document.getElementById("three").innerText = `${data.colors[2].hex.value}`;
    document.getElementById("four").innerText = `${data.colors[3].hex.value}`;
    document.getElementById("five").innerText = `${data.colors[4].hex.value}`;
    document.getElementById("six").innerText = `${data.colors[5].hex.value}`;
    document.getElementById("seven").innerText = `${data.colors[6].hex.value}`;
    document.getElementById("eight").innerText = `${data.colors[7].hex.value}`;
    document.getElementById("nine").innerText = `${data.colors[8].hex.value}`;
    document.getElementById("ten").innerText = `${data.colors[9].hex.value}`;
}


async function getData2() {
    // get data from thecolorapi.com
    const data = await sendRequest2();
    // set bars or circles to reflect color data
    document.getElementById("one").style.backgroundColor = `${data.colors[0].hex.value}`;
    document.getElementById("two").style.backgroundColor = `${data.colors[1].hex.value}`;
    document.getElementById("three").style.backgroundColor = `${data.colors[2].hex.value}`;
    document.getElementById("four").style.backgroundColor = `${data.colors[3].hex.value}`;
    document.getElementById("five").style.backgroundColor = `${data.colors[4].hex.value}`;
    document.getElementById("six").style.backgroundColor = `${data.colors[5].hex.value}`;
    document.getElementById("seven").style.backgroundColor = `${data.colors[6].hex.value}`;
    document.getElementById("eight").style.backgroundColor = `${data.colors[7].hex.value}`;
    document.getElementById("nine").style.backgroundColor = `${data.colors[8].hex.value}`;
    document.getElementById("ten").style.backgroundColor = `${data.colors[9].hex.value}`;
    // set color select buttons to reflect data from generated scheme
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
    // set text in bars or circles to hex color values from scheme
    document.getElementById("one").innerText = `${data.colors[0].hex.value}`;
    document.getElementById("two").innerText = `${data.colors[1].hex.value}`;
    document.getElementById("three").innerText = `${data.colors[2].hex.value}`;
    document.getElementById("four").innerText = `${data.colors[3].hex.value}`;
    document.getElementById("five").innerText = `${data.colors[4].hex.value}`;
    document.getElementById("six").innerText = `${data.colors[5].hex.value}`;
    document.getElementById("seven").innerText = `${data.colors[6].hex.value}`;
    document.getElementById("eight").innerText = `${data.colors[7].hex.value}`;
    document.getElementById("nine").innerText = `${data.colors[8].hex.value}`;
    document.getElementById("ten").innerText = `${data.colors[9].hex.value}`;
}


document.getElementById('get-scheme').addEventListener('click', e => {
    // prevent window from refreshing to no-data on click
    e.preventDefault();
    // do all of the above things on click of get scheme button
    getData1();
}
)


document.getElementById('get-scheme-exact').addEventListener('click', e => {
    // prevent window from refreshing to no-data on click
    e.preventDefault();
    // do all of the above things on click of get exact scheme button
    getData2();
}
)