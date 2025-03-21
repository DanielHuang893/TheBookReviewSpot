window.onscroll = function () {
    var navBar = document.querySelector('.navBar');
    if (window.scrollY > 100) {
        navBar.classList.add('smaller');
    } else {
        navBar.classList.remove('smaller');
    }
};

