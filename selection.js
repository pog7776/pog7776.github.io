var default_speed = 20;
var speed = 20; /* The speed/duration of the effect in milliseconds */

var typeJobs = new Map();

function typeWriterOld(element, selection_string, custom_speed) {
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

    if(txt !== undefined && ele !== undefined) {
        if (i < txt.length) {
            document.getElementById(ele).innerHTML += txt.charAt(i);
            i++;
            routine = setTimeout(typeWriter, speed);
        }
    }
}

async function typeWriter(element, selection_string, custom_speed) {
    var elementObj = document.getElementById(element);
    var txt = selection_string;
    clear_selection(element);

    if(custom_speed != undefined) {
        speed = custom_speed;
    }

    var index = 0;
    typeJobs[element] = setInterval(function() {
        elementObj.innerHTML += txt.charAt(index);
        index++;
        if(index >= txt.length) {
            clearInterval(typeJobs[element]);
        }
    }, speed);
}

function clear_selection(element) {
    // Stop the typing animation
    if(typeJobs[element] != undefined) {
        clearInterval(typeJobs[element]);
        typeJobs[element] = undefined;
    }
    
    // Reset animation
    speed = default_speed;
    // Set to nothing
    document.getElementById(element).innerHTML = "";
}

async function SetSelectionToTitle(delay, element) {
    var title = document.getElementsByTagName("title")[0].innerHTML;
    await new Promise(resolve => setTimeout(resolve, delay));
    typeWriter(element, title);
}

async function GetQuote() {
    return await fetch("https://dumbquote.herokuapp.com/api/quote")
        .then(data => data.text())
        //.then(data => console.log(data))
        .then(data => { return data });
}