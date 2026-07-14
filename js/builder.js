// variables for color selector inputs
let colorExact1 = document.getElementById("color-exact-one");
let colorExact2 = document.getElementById("color-exact-two").value;
let colorExact3 = document.getElementById("color-exact-three").value;
let colorExact4 = document.getElementById("color-exact-four").value;
let colorExact5 = document.getElementById("color-exact-five").value;
let colorExact6 = document.getElementById("color-exact-six").value;
let colorExact7 = document.getElementById("color-exact-seven").value;
let colorExact8 = document.getElementById("color-exact-eight").value;
let colorExact9 = document.getElementById("color-exact-nine").value;
let colorExact10 = document.getElementById("color-exact-ten").value;

// variables for color display circles or bars
let colorPanelExact1 = document.getElementById("one");
let colorPanelExact2 = document.getElementById("two");
let colorPanelExact3 = document.getElementById("three");
let colorPanelExact4 = document.getElementById("four");
let colorPanelExact5 = document.getElementById("five");
let colorPanelExact6 = document.getElementById("six");
let colorPanelExact7 = document.getElementById("seven");
let colorPanelExact8 = document.getElementById("eight");
let colorPanelExact9 = document.getElementById("nine");
let colorPanelExact10 = document.getElementById("ten");

// variables for color select Set buttons
let colorSelect1 = document.getElementById("color-exact-one-button");
let colorSelect2 = document.getElementById("color-exact-two-button");
let colorSelect3 = document.getElementById("color-exact-three-button");
let colorSelect4 = document.getElementById("color-exact-four-button");
let colorSelect5 = document.getElementById("color-exact-five-button");
let colorSelect6 = document.getElementById("color-exact-six-button");
let colorSelect7 = document.getElementById("color-exact-seven-button");
let colorSelect8 = document.getElementById("color-exact-eight-button");
let colorSelect9 = document.getElementById("color-exact-nine-button");
let colorSelect10 = document.getElementById("color-exact-ten-button");

// colorSelect1.addEventListener("click", e => {
//     // input validation
//     let color1 = colorExact1.value;
//     let out1 = '#' + color1;
//     if (!CSS.supports('color', out1)) {
//         alert('Please enter a valid 6 digit hex color')
//         // return
//     } else {
//     colorPanelExact1.style.backgroundColor = `#${colorExact1.value}`;
//     }
// })

function selectIt(itsNumber) {
    document.getElementById(`color-exact-${itsNumber}-button`).addEventListener("click", e => {
        let out = '#' + document.getElementById(`color-exact-${itsNumber}`).value;
        if (!CSS.supports('color', out)) {
        alert('Please enter a valid 6 digit hex color')
        return
        } else {
            document.getElementById(`${itsNumber}`).style.backgroundColor = document.getElementById(`color-exact-${itsNumber}`).value;
       }
    })
}

selectIt("one");
selectIt("two");

// colorSelect2.addEventListener("click", e => {
//     // e.preventDefault();
//     let color2 = `#${colorExact2.value}`;
//     if (!CSS.supports('color', color2)) {
//         alert('please enter a valid 6 digit hex color');
//     } else {
//         colorPanelExact2.style.backgroundColor = color2;
//     }
// })

// colorSelect2.addEventListener("click", e => {
//     // input validation
//     let color2 = colorExact2.value;
//     let out2 = `#${color2}`;
//     if (!CSS.supports('color', out2)) {
//         alert('Please enter a valid 6 digit hex color')
//         // return
//     } else {
//     colorPanelExact2.style.backgroundColor = `#${colorExact2.value}`;
//     }
// })
// colorSelect3.addEventListener("click", e => {
//     // input validation
//     let color3 = colorExact3.value;
//     let out3 = `#${color3}`;
//     if (!CSS.supports('color', out)) {
//         alert('Please enter a valid 6 digit hex color')
//         // return
//     } else {
//     colorPanelExact3.style.backgroundColor = `#${colorExact3.value}`;
//     }
// })
// colorSelect4.addEventListener("click", e => {
//     // input validation
//     color = colorExact4.value;
//     let out = '#' + color;
//     if (!CSS.supports('color', out)) {
//         alert('Please enter a valid 6 digit hex color')
//         // return
//     } else {
//     colorPanelExact4.style.backgroundColor = `#${colorExact4.value}`;
//     }
// })
// colorSelect5.addEventListener("click", e => {
//     // input validation
//     color = colorExact5.value;
//     let out = '#' + color;
//     if (!CSS.supports('color', out)) {
//         alert('Please enter a valid 6 digit hex color')
//         // return
//     } else {
//     colorPanelExact5.style.backgroundColor = `#${colorExact5.value}`;
//     }
// })
// colorSelect6.addEventListener("click", e => {
//     // input validation
//     color = colorExact6.value;
//     let out = '#' + color;
//     if (!CSS.supports('color', out)) {
//         alert('Please enter a valid 6 digit hex color')
//         // return
//     } else {
//     colorPanelExact6.style.backgroundColor = `#${colorExact6.value}`;
//     }
// })
// colorSelect7.addEventListener("click", e => {
//     // input validation
//     color = colorExact7.value;
//     let out = '#' + color;
//     if (!CSS.supports('color', out)) {
//         alert('Please enter a valid 6 digit hex color')
//         // return
//     } else {
//     colorPanelExact7.style.backgroundColor = `#${colorExact7.value}`;
//     }
// })
// colorSelect8.addEventListener("click", e => {
//     // input validation
//     color = colorExact8.value;
//     let out = '#' + color;
//     if (!CSS.supports('color', out)) {
//         alert('Please enter a valid 6 digit hex color')
//         // return
//     } else {
//     colorPanelExact8.style.backgroundColor = `#${colorExact8.value}`;
//     }
// })
// colorSelect9.addEventListener("click", e => {
//     // input validation
//     color = colorExact9.value;
//     let out = '#' + color;
//     if (!CSS.supports('color', out)) {
//         alert('Please enter a valid 6 digit hex color')
//         // return
//     } else {
//     colorPanelExact9.style.backgroundColor = `#${colorExact9.value}`;
//     }
// })
// colorSelect10.addEventListener("click", e => {
//     // input validation
//     color = colorExact10.value;
//     let out = '#' + color;
//     if (!CSS.supports('color', out)) {
//         alert('Please enter a valid 6 digit hex color')
//         // return
//     } else {
//     colorPanelExact10.style.backgroundColor = `#${colorExact10.value}`;
//     }
// })


