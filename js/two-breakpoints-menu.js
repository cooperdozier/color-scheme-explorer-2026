// not certain if I've got everything pixel perfectly correct with this code and logically fully consistent 
// but it appears to fully function without bugs (7/19/2026)

// state variable, 
//      layoutState[0] means screen is wide, medium, or narrow
//      layoutState[1] means submenu-switch is closed, invisible ('none'), or open
//      layoutState[2] means main-menu-switch is closed, invisible ('none'), or open
let layoutState = ['wide', 'closed', 'none'];

// booleans for when window is narrower than 48 em or 26 em
let mediaVar = window.matchMedia('screen and (max-width:48em)');
let mediaVar2 = window.matchMedia('screen and (max-width:26em)');

// check for portrait/landscape screen orientation change and closeVisible menus when it changes
window.addEventListener('orientationchange', closeVisible);

// check if screen is narrow, medium or wide and set state variables
function checkMedia() {
    if (mediaVar2.matches) {
        layoutState = ['narrow', 'none', 'closed'];
    } else if (mediaVar.matches) {
        layoutState = ['medium', 'none', 'closed'];
    } else {
        layoutState = ['wide', 'closed', 'none']
    }
}

// fire checkMedia on window load
window.onload = checkMedia;

// when screen is resized to above or below 26 em wide, closeVisible and change state vairable
mediaVar2.addEventListener("change", (e) => {
    if (e.matches) {
                layoutState = ['narrow', 'none', 'closed'];
        closeVisible();
                document.getElementById('main-menu-list').style.display = 'none';
            console.log('1');
    } else {
        layoutState = ['medium', 'closed', 'none'];
        closeVisible();
            console.log('3');
    };
});

// when screen is resized to above or below 48 wide em closeVisible and change state variable
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

// cases for all possible layouts when submenu switch can be clicked
document.getElementById('submenu-switch').addEventListener('click', function (e) {
    // all cases evaluate to a boolean
    switch (true) {

        // if wide screen and submenu closed, show submenu and set menu to 30em tall        
        case (layoutState[0] === 'wide' && layoutState[1] === 'closed'):
        document.getElementById('submenu').style.display = "block";
// INSTRUCTIONS *** to add or remove items in submenu for wide screen, simply change the height of 
//                  "36em" here to a different height and make the needed HTML alterations.
//                  less tricky when all menu items stack one per line vertically
            document.getElementById('main-menu').style.height = "36em";
            layoutState[1] = 'open';
            console.log('4');
            break;

            // if narrow screen and submenu closed, open submenu  and set menu to 62.6 em tall
        case (layoutState[0] === 'narrow' && layoutState[1] === 'closed'):
            document.getElementById('submenu').style.display = "block";
// INSTRUCTIONS *** to add or remove menu items for narrow with both main and submenu open, simply 
//                  change height of "62.6em" here to a different height and make the needed 
//                  HTML alterations
//                  less tricky when all menu items stack one per line vertically
            document.getElementById('main-menu').style.height = "80em";
            document.getElementById('submenu').classList.add('narrow-menu');
            layoutState[1] = 'open';
            console.log('5');
            break;

            // if wide screen and submenu open close it and set menu to 2.1 em tall
        case (layoutState[0] === 'wide' && layoutState[1] === 'open'):
            document.getElementById('submenu').style.display = "none";
// INSTRUCTIONS *** to change the height of the navigation bar in widescreen with submenu closed, 
//                  simply change the height of "2.1em" here and in the closeVisible()
//                  function to a different height and make the needed HTML alterations
            document.getElementById('main-menu').style.height = "2.1em";
            layoutState[1] = 'closed';
            console.log('6');
            break;

            // if narrow screen and submenu open, close it and set menu to 21.2 em tall
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

            // if medium screen and submenu open, close submenu and set menu to 21.2em tall
        case (layoutState[0] === 'medium' && layoutState[1] === 'open'):
            document.getElementById('submenu').style.display = "none";
            document.getElementById('main-menu').style.height = "21.2em";
            layoutState[1] = 'closed';
            console.log('8');
            break;

            // if medium screen and submenu closed, open submenu and set menu to 48.6em tall
        case (layoutState[0] === 'medium' && layoutState[1] === 'closed'):
            document.getElementById('submenu').style.display = "block";
            document.getElementById('main-menu').style.height = "60em";
            document.getElementById('submenu').classList.add('narrow-menu');
            layoutState[1] = 'open';
            console.log('9');
            break;        

            // default cases should not be possible if everything is working right, because the state variable
            // always matches one and only one of the cases
        default:
            console.log('something is wrong - from submenu-switch listener');
    }
});


// watch main menu switch or clicks; only visible when screen is medium or narrow
document.getElementById('main-menu-switch').addEventListener('click', function (e) {
    // all cases evaluate to a boolean
    switch (true) {

        // when screen is narrow and main menu is closed, open it and set it to 18.2 em tall
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

            // when screen is narrow and main menu is open, close it and set menu to 2.1em tall
            // and close the submenu
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

            // when screen is medium and main menu is closed, open it and set it to 18.2 em tall
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

            // when screen is medium wide and main menu is open, close it, close the submenu,
            // and set the menu to 2.1 em tall
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

            // default cases should never occur when it's set up right because the state variable is always
            // in one and only one of the handled states whenever main-menu-switch is visible
        default:
            console.log('something is wrong - from main-menu-switch listener')
    }
});


// close submenu, close main menu, set menu to 2.1 em tall
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
    } 
    // not sure if i should technically need an else if for if !mediaVar2.matches here but not trying it yet
    // everything seems to work without pretty much. Do I want the menu to close when it transits from
    // !mediaVar.matches to !mediaVar2.matches ? (7/19/2026)
    else {
        layoutState[1] = 'none';
        layoutState[2] = 'closed';
        document.getElementById('submenu').classList.remove('narrow-menu');
        document.getElementById('main-menu-list').style.display = 'none';
        console.log('15');
    }
}