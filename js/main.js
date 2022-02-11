console.log('No Errors From Js');


window.addEventListener('scroll', function () {
    const header = document.getElementById('main-header');
    let scrollTop = window.pageYOffset;

    if (scrollTop > 120) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

});