let data2 = []
for (let i=0; i<localStorage.length; i++) {
    data2.push(JSON.parse(localStorage.getItem(`Scheme ${i}`)));
}

for (let i=0; i<localStorage.length; i++) {
document.getElementById("schemes-list").innerHTML += `<li>${data2[i][0]}&nbsp;
<div class="color-pane" style="background-color: ${data2[i][1]}" id="color1">${data2[i][1]}</div>
&nbsp;<div class="color-pane" style="background-color: ${data2[i][2]}" id="color2">${data2[i][2]}</div>&nbsp;
<div class="color-pane" style="background-color: ${data2[i][3]}" id="color3">${data2[i][3]}</div>
&nbsp;<div class="color-pane" style="background-color: ${data2[i][4]}" id="color4">${data2[i][4]}</div>&nbsp;
<div class="color-pane" style="background-color: ${data2[i][5]}" id="color5">${data2[i][5]}</div>
&nbsp;<div class="color-pane" style="background-color: ${data2[i][6]}" id="color6">${data2[i][6]}</div>&nbsp;
<div class="color-pane" style="background-color: ${data2[i][7]}" id="color7">${data2[i][7]}</div>
&nbsp;<div class="color-pane" style="background-color: ${data2[i][8]}" id="color8">${data2[i][8]}</div>&nbsp;
<div class="color-pane" style="background-color: ${data2[i][9]}" id="color9">${data2[i][9]}</div>
&nbsp;<div class="color-pane" style="background-color: ${data2[i][10]}" id="color10">${data2[i][10]}</div></li><br />`;
}

document.getElementById("delete-history").addEventListener("click", e => {
    localStorage.clear();
    location.reload();
});