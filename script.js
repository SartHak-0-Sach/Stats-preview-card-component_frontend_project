const image = document.querySelector('img');

if (window.innerWidth > 768) {
    image.src = './images/image-header-desktop.jpg';
} else {
    image.src = './images/image-header-mobile.jpg';
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
        image.src = './images/image-header-desktop.jpg';
    } else {
        image.src = './images/image-header-mobile.jpg';
    }
})