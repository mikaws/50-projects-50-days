
const toggles = document.querySelectorAll('.faq-toggle')

let actived = 1;

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    });
})