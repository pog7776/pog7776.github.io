var i = 0;
var txt = undefined; /* The text */
var ele = undefined; /* Element to affect */
var default_speed = 20;
var speed = 20; /* The speed/duration of the effect in milliseconds */
var routune;
var initial = true;

function typeWriter(element, selection_string, custom_speed) {
    if(initial) {
        clear_selection(element);
        initial = false;
    }
    
    // Setup references
    if(txt === undefined) { txt = selection_string; }
    if(ele === undefined) { ele = element; }
    if(custom_speed != undefined) {
        speed = custom_speed;
    }

    if (i < txt.length) {
        document.getElementById(ele).innerHTML += txt.charAt(i);
        i++;
        routune = setTimeout(typeWriter, speed);
    }
}

function clear_selection(element) {
    // Stop the typing animation
    clearTimeout(routune);
    // Reset animation
    i = 0;
    txt = undefined;
    ele = undefined;
    speed = default_speed;
    // Set to nothing
    document.getElementById(element).innerHTML = "";
}

async function SetSelectionToTitle(delay, element) {
    var title = document.getElementsByTagName("title")[0].innerHTML;
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log('after 1 second');
    typeWriter(element, title);
}