// let color = "65BBEA";
// let color = document.getElementById("scheme-select").value};

// let url = `https://www.thecolorapi.com/scheme?hex=${color}&count=10&format=json&mode=quad`;
// let url = "https://colormagic.api/api/palette/search?q=blue"
// let url = `https://colormagic.app/api/palette/search?q=green`
async function sendRequest(color,mode) {
    mode = document.getElementById("scheme-select-mode").value;
    color = document.getElementById("scheme-select-color").value.slice(1,7);
    let url = `https://www.thecolorapi.com/scheme?hex=${color}&count=10&format=json&mode=${mode}`;
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
    document.getElementById("six").style.backgroundColor = `${data.colors[5].hex.value}`;
    document.getElementById("seven").style.backgroundColor = `${data.colors[6].hex.value}`;
    document.getElementById("eight").style.backgroundColor = `${data.colors[7].hex.value}`;
    document.getElementById("nine").style.backgroundColor = `${data.colors[8].hex.value}`;
    document.getElementById("ten").style.backgroundColor = `${data.colors[9].hex.value}`;
    
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

    // document.getElementById("oneLabel").innerText = `${data.colors[0].hex.value}`
    // document.getElementById("twoLabel").innerText = `${data.colors[1].hex.value}`
    // document.getElementById("threeLabel").innerText = `${data.colors[2].hex.value}`
    // document.getElementById("fourLabel").innerText = `${data.colors[3].hex.value}`
    // document.getElementById("fiveLabel").innerText = `${data.colors[4].hex.value}`
    // document.getElementById("sixLabel").innerText = `${data.colors[5].hex.value}`
    // document.getElementById("sevenLabel").innerText = `${data.colors[6].hex.value}`
    // document.getElementById("eightLabel").innerText = `${data.colors[7].hex.value}`
    // document.getElementById("nineLabel").innerText = `${data.colors[8].hex.value}`
    // document.getElementById("tenLabel").innerText = `${data.colors[9].hex.value}`


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
    e.preventDefault();
    getData();
}
)

// getData();