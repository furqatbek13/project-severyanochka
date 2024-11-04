function toggleMenu() {
    let menu = document.getElementById("menu_list");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";  
    } else {
        menu.style.display = "none";  
    }
}

let  menuButton = document.getElementById("menu_button");
function darkMode(){
    document.body.classList.toggle('darkMode');
    let button = document.getElementById("toggle-btn");
    
    if (document.body.classList.contains('darkMode')) {
        button.textContent = "Light Mode";
    } else {
        button.textContent = "Dark Mode";
    }
}