function load(url, element)
{
    fetch(url).then(res => {
        document.getElementById(element).innerHTML = res; 
    });
}