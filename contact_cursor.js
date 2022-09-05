/* exported show_cursor */
function show_cursor(element) {
    var x = document.getElementById(element);
    x.style.display = "inline-block";
}

/* exported hide_cursor */
function hide_cursor(element) {
    var x = document.getElementById(element);
    x.style.display = "none";
}