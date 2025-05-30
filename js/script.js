document.getElementById('currentYear').textContent = new Date().getFullYear();

const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.opacity = "1";
        scrollTopBtn.style.visibility = "visible";
    } else {
        scrollTopBtn.style.opacity = "0";
        scrollTopBtn.style.visibility = "hidden";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}