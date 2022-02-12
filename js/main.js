console.log('No Errors From Js');

// Window Scroll Function
window.addEventListener('scroll', function () {
    const header = document.getElementById('main-header');
    let scrollTop = window.pageYOffset;

    if (scrollTop > 120) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

});


// Custom Date Input
const wraper = document.querySelector('.custom-date-input');
const input = wraper.querySelector('#date');
const output = wraper.querySelector('.output');

input.addEventListener('change', function () {
    output.innerHTML = input.value;
});