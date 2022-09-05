/* exported expandProject */
function expandProject(element_id) {
    var project = document.getElementById(element_id);
    var expand_elements = project.querySelectorAll(".expand_content");
    var preview_elements = project.querySelectorAll(".preview_content");

    if(project.style.maxHeight != (250 + getTallestChild(element_id)) + "px") {
        project.style.maxHeight = (250 + getTallestChild(element_id)) + "px";
        //setTimeout(function(){project.scrollIntoView(true);}, 50);
        //project.scrollIntoView(true);
        setTimeout(function(){scrollToProject(project);}, 250);
    } else {
        project.style.maxHeight = "250px";
    }

    if(expand_elements.length > 0) {
        expand_elements.forEach(element => {
            if(element.style.opacity != '1') {
                //element.style.display = 'block'
                element.style.opacity = '1';
            } else {
                //element.style.display = 'none'
                element.style.opacity = '0';
            }
        });
    }

    if(preview_elements.length > 0) {
        preview_elements.forEach(element => {
            if(element.style.opacity != '0') {
                //element.style.display = 'none'
                //element.style.opacity = '0';
            } else {
                //element.style.display = 'initial'
                element.style.opacity = '1';
            }
        });
    }
}

function getTallestChild(element_id){
    var project = document.getElementById(element_id);
    var project_left = project.querySelectorAll(".project_left");
    var project_right = project.querySelectorAll(".project_right");

    var tallest = 0;

    if(project_left[0].scrollHeight > tallest) {
        tallest = project_left[0].scrollHeight;
    }

    if(project_right[0].scrollHeight > tallest) {
        tallest = project_right[0].scrollHeight;
    }

    return tallest;
}

function scrollToProject(element) {
    var navbar = document.getElementById("navbar");
    const y = (element.getBoundingClientRect().top + window.scrollY) - navbar.scrollHeight - 30;
    window.scroll({
    top: y,
    behavior: 'smooth'
    });
}