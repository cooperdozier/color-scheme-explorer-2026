let color = "65BBEA";
let url = `https://www.thecolorapi.com/scheme?hex=${color}&count=10&format=json&mode=quad`;
// let url = "https://colormagic.api/api/palette/search?q=blue"
// let url = `https://colormagic.app/api/palette/search?q=green`
async function sendRequest() {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

async function getData() {
    const data = await sendRequest();
    // console.log(data);
    document.getElementById("one").style.backgroundColor = `${data.colors[0].hex.value}`;
    document.getElementById("two").style.backgroundColor = `${data.colors[1].hex.value}`;
    document.getElementById("three").style.backgroundColor = `${data.colors[2].hex.value}`;
    document.getElementById("four").style.backgroundColor = `${data.colors[3].hex.value}`;
    document.getElementById("five").style.backgroundColor = `${data.colors[4].hex.value}`;
    
    // document.getElementById("one").style.backgroundColor = `${data[0].colors[0]}`;
    // document.getElementById("two").style.backgroundColor = `${data[0].colors[1]}`;
    // document.getElementById("three").style.backgroundColor = `${data[0].colors[2]}`;
    // document.getElementById("four").style.backgroundColor = `${data[0].colors[3]}`;
    // document.getElementById("five").style.backgroundColor = `${data[0].colors[4]}`;


    // console.log(data[0].colors[0])
}

getData();