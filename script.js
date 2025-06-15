function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function openVideoInNewWindow() {
    window.open('D:/Portfolio/assets/DEMO Video.mp4', '_blank');
}