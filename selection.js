var i = 0;
var txt = undefined; /* The text */
var ele = undefined; /* Element to affect */
var speed = 20; /* The speed/duration of the effect in milliseconds */
var routune;

function typeWriter(element, selection_string) {
    // Setup references
    if(txt === undefined) { txt = selection_string; }
    if(ele === undefined) { ele = element; }

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
    // Set to nothing
    document.getElementById(element).innerHTML = "";
}