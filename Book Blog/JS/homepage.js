
    window.onscroll = function() {
        var navBar = document.querySelector('.navBar');
        if (document.documentElement.scrollTop > 100) {
            navBar.classList.add('smaller');
        } else {
            navBar.classList.remove('smaller');
        }
    };

