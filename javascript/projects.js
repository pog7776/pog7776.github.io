/* exported expandProject */
function expandProject(element_id) {
    var project = document.getElementById(element_id);
    if (!project) return;

    var wasExpanded = project.classList.contains("is-expanded");

    // Close all other expanded projects if desired, or toggle current
    project.classList.toggle("is-expanded");

    if (!wasExpanded) {
        setTimeout(function() {
            scrollToProject(project);
        }, 150);
    }
}

function scrollToProject(element) {
    var navbar = document.getElementById("navbar");
    var navHeight = navbar ? navbar.offsetHeight : 60;
    var rect = element.getBoundingClientRect();
    var targetY = window.pageYOffset + rect.top - navHeight - 20;

    window.scrollTo({
        top: Math.max(0, targetY),
        behavior: 'smooth'
    });
}
