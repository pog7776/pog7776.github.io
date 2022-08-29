function expandProject(element_id) {
    var project = document.getElementById(element_id);
    var expand_elements = project.querySelectorAll(".expand_content");
    var preview_elements = project.querySelectorAll(".preview_content");

    if(expand_elements.length > 0) {
        expand_elements.forEach(element => {
            if(element.style.display != 'block') {
                element.style.display = 'block'
            } else {
                element.style.display = 'none'
            }
        });

        preview_elements.forEach(element => {
            if(element.style.display != 'none') {
                element.style.display = 'none'
            } else {
                element.style.display = 'initial'
            }
        });
    }
}