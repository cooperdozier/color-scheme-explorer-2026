// let color = "65BBEA";
// let color = document.getElementById("scheme-select").value};

// let url = `https://www.thecolorapi.com/scheme?hex=${color}&count=10&format=json&mode=quad`;
// let url = "https://colormagic.api/api/palette/search?q=blue"
// let url = `https://colormagic.app/api/palette/search?q=green`
async function sendRequest(color,mode) {
    mode = document.getElementById("scheme-select-mode").value;
    color = document.getElementById("scheme-select-color").value;
    let url = `https://www.thecolorapi.com/scheme?hex=${color}&count=10&format=json&mode=${mode}`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

async function getData() {
    const data = await sendRequest();
    // console.log(data);
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
    e.preventDefault();
    getData();
}
)

// getData();