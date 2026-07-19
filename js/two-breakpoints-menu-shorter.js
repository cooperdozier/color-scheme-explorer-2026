let layoutState = ['wide', 'closed', 'none'];

let mediaVar = window.matchMedia('screen and (max-width:47.999em)');
let mediaVar2 = window.matchMedia('screen and (max-width:25.999em)');

window.addEventListener('orientationchange', closeVisible);

function checkMedia() {
    if (mediaVar2.matches) {
        layoutState = ['narrow', 'none', 'closed'];
    } else if (mediaVar.matches) {
        layoutState = ['medium', 'none', 'closed'];
    } else {
        layoutState = ['wide', 'closed', 'none']
    }
}

window.onload = checkMedia;

mediaVar2.addEventListener("change", (e) => {
    if (e.matches) {
                layoutState = ['narrow', 'none', 'closed'];
        closeVisible();
                document.getElementById('main-menu-list').style.display = 'none';
            console.log('1');
    // } else if (mediaVar2.matches) {
    //             layoutState = ['medium', 'none', 'closed'];
    //     closeVisible();
    //         console.log('2');
    } else {
        layoutState = ['medium', 'closed', 'none'];
        closeVisible();
            console.log('3');
    };
});

mediaVar.addEventListener("change", (e) => {
    if (e.matches) {
        layoutState = ['medium', 'none', 'closed'];
        closeVisible();
        document.getElementById('main-menu-list').style.display = 'none';
        console.log('2');
    } else {
        layoutState = ['wide', 'closed', 'none'];
        closeVisible();
            console.log('3');
    }
})

document.getElementById('submenu-switch').addEventListener('click', function (e) {
    switch (true) {
                // is it wide or narrow means - window/viewport is greater or less than 47.999em
        case (layoutState[0] === 'wide' && layoutState[1] === 'closed'):
        document.getElementById('submenu').style.display = "block";
// INSTRUCTIONS *** to add or remove items in submenu for wide screen, simply change the height of 
//                  "13em" here to a different height and make the needed HTML alterations
            document.getElementById('main-menu').style.height = "20em";
            layoutState[1] = 'open';
            console.log('4');
            break;
        case (layoutState[0] === 'narrow' && layoutState[1] === 'closed'):
            document.getElementById('submenu').style.display = "block";
// INSTRUCTIONS *** to add or remove menu items for narrow with both main and submenu open, simply 
//                  change height of "25.6em" here to a different height and make the needed 
//                  HTML alterations
            document.getElementById('main-menu').style.height = "42.6em";
            document.getElementById('submenu').classList.add('narrow-menu');
            layoutState[1] = 'open';
            console.log('5');
            break;
        case (layoutState[0] === 'wide' && layoutState[1] === 'open'):
            document.getElementById('submenu').style.display = "none";
// INSTRUCTIONS *** to change the height of the navigation bar in widescreen with submenu closed, 
//                  simply change the height of "2.1em" here and in the closeVisible()
//                  function to a different height and make the needed HTML alterations
            document.getElementById('main-menu').style.height = "2.1em";
            layoutState[1] = 'closed';
            console.log('6');
            break;
        case (layoutState[0] === 'narrow' && layoutState[1] === 'open'):
            document.getElementById('submenu').style.display = "none";
// INSTRUCTIONS *** to add or remove menu items in narrow screen with main-menu open but submenu 
//                  closed, simply change the height of "15.2em" here and in the first case in 
//                  MAIN MENU SWITCH LISTENER, below to a different height,
//                  and make the needed HTML alterations
            document.getElementById('main-menu').style.height = "21.2em";
            layoutState[1] = 'closed';
            console.log('7');
            break;
        case (layoutState[0] === 'medium' && layoutState[1] === 'open'):
            document.getElementById('submenu').style.display = "none";
            document.getElementById('main-menu').style.height = "21.2em";
            layoutState[1] = 'closed';
            console.log('8');
            break;
        case (layoutState[0] === 'medium' && layoutState[1] === 'closed'):
            document.getElementById('submenu').style.display = "block";
            document.getElementById('main-menu').style.height = "38.6em";
            document.getElementById('submenu').classList.add('narrow-menu');
            layoutState[1] = 'open';
            console.log('9');
            break;        
        default:
            console.log('something is wrong - from submenu-switch listener');
    }
});

document.getElementById('main-menu-switch').addEventListener('click', function (e) {
    switch (true) {
        case (layoutState[0] === 'narrow' && layoutState[2] === 'closed'):
            // no need to display submenu-switch, because it is always visible when main-menu is
            // visible, in either horizontal or vertical
            document.getElementById('main-menu-list').style.display = "block";
// INSTRUCTIONS *** see the 4th case in SUBMENU SWITCH LISTENER for info on height="17em"
            document.getElementById('main-menu').style.height = "18.2em";
            document.getElementById('i-can-transform').classList.remove('pure-menu-horizontal');
            document.getElementById('main-menu-switch').classList.add('x-shape');
            layoutState[1] = 'closed';
            layoutState[2] = 'open';
            console.log('10');
            break;
        case (layoutState[0] === 'narrow' && layoutState[2] === 'open'):
            // submenu and submenu switch are inside main-menu, so they disappear when main menu 
            // closes, but if main-menu closes while submenu is open, we want submenu to be already
            // closed when main menu is reopened
            document.getElementById('submenu').style.display = "none";
            document.getElementById('main-menu-list').style.display = "none";
// INSTRUCTIONS *** to change the height of the navigation bar in narrow screen with the menu 
//                  closed, simply change the height of "2.1em" here and in the third case in
//                  SUBMENU SWITCH LISTENER above and second line with the closeVisible() function
//                  below to a different height
            document.getElementById('main-menu').style.height = "2.1em";
            document.getElementById('main-menu-switch').classList.remove('x-shape');
            layoutState[1] = 'none';
            layoutState[2] = 'closed';
            console.log('11');
            break;
        case (layoutState[0] === 'medium' && layoutState[2] === 'closed'):
            // no need to display submenu-switch, because it is always visible when main-menu is
            // visible, in either horizontal or vertical
            document.getElementById('main-menu-list').style.display = "block";
// INSTRUCTIONS *** see the 4th case in SUBMENU SWITCH LISTENER for info on height="17em"
            document.getElementById('main-menu').style.height = "18.2em";
            document.getElementById('i-can-transform').classList.remove('pure-menu-horizontal');
            document.getElementById('main-menu-switch').classList.add('x-shape');
            layoutState[1] = 'closed';
            layoutState[2] = 'open';
            console.log('12');
            break;
        case (layoutState[0] === 'medium' && layoutState[2] === 'open'):
            // submenu and submenu switch are inside main-menu, so they disappear when main menu 
            // closes, but if main-menu closes while submenu is open, we want submenu to be already
            // closed when main menu is reopened
            document.getElementById('submenu').style.display = "none";
            document.getElementById('main-menu-list').style.display = "none";
// INSTRUCTIONS *** to change the height of the navigation bar in narrow screen with the menu 
//                  closed, simply change the height of "2.1em" here and in the third case in
//                  SUBMENU SWITCH LISTENER above and second line with the closeVisible() function
//                  below to a different height
            document.getElementById('main-menu').style.height = "2.1em";
            document.getElementById('main-menu-switch').classList.remove('x-shape');
            layoutState[1] = 'none';
            layoutState[2] = 'closed';
            console.log('13');
            break;
        default:
            console.log('something is wrong - from main-menu-switch listener')
    }
});

function closeVisible() {
    document.getElementById('submenu').style.display = 'none';
// INSTRUCTIONS *** the third case in SUBMENU SWITCH LISTENER and second case in MAIN MENU 
//                  SWITCH LISTENER for info on height="2.1em"
    document.getElementById('main-menu').style.height = "2.1em";
    document.getElementById('main-menu-switch').classList.remove('x-shape');
    if (!mediaVar.matches) {
        document.getElementById('main-menu-list').style.display = 'inline-block';
        document.getElementById('i-can-transform').classList.add('pure-menu-horizontal');
        // adding these 4 layoutState settings below (where before there were none) fixes the 
        // must-be-clicked-twice-after-resize-within-narrow-viewport issue. Not certain what 
        // the exact problem was in, but I noticed i was changing state w/o changing 
        // the state variable here, so these lines were *logically* required for consistency.
        // I'm kind of surprised that that was the only broken behavior without them
        layoutState[1] = 'closed';
        layoutState[2] = 'none';
        console.log('14');
    } else {
        layoutState[1] = 'none';
        layoutState[2] = 'closed';
        document.getElementById('submenu').classList.remove('narrow-menu');
        document.getElementById('main-menu-list').style.display = 'none';
        console.log('15');
    }
}