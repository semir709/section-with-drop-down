

const drop_f_btn = document.querySelector('#drop-features-btn');
const drop_f = document.querySelector('#drop-features');
const img_f = document.querySelector('#img_drop_f');

const drop_c_btn = document.querySelector('#drop-company-btn');
const drop_c = document.querySelector('#drop-company');
const img_c = document.querySelector('#img_drop_c');

drop_f_btn.addEventListener('click', (e) => {

    drop_f.classList.toggle('active');

    if(drop_f.classList.contains('active')) {
        img_f.src = './images/icon-arrow-up.svg';
    } else {
        img_f.src = './images/icon-arrow-down.svg';
    }

    //Check if select the wrong element 
    if(e.target.classList.contains('drop-btn')) {
        e.target.children[0].classList.toggle('focus');
    } else {
        e.target.parentElement.children[0].classList.toggle('focus');
    }

});

drop_c_btn.addEventListener('click', (e) => {

    drop_c.classList.toggle('active');

    if(drop_c.classList.contains('active')) {
        img_c.src = './images/icon-arrow-up.svg';
    } else {
        img_c.src = './images/icon-arrow-down.svg';
    }


    //Check if select the wrong element
    if(e.target.classList.contains('drop-btn')) {
        e.target.children[0].classList.toggle('focus');
    } else {
        e.target.parentElement.children[0].classList.toggle('focus');
    }

    

});


// Registration button hover event
const regButton = document.querySelector('.user-nav');
const reg_aTag = regButton.children[0].children[1];

reg_aTag.addEventListener('mouseover', () => {

    regButton.children[0].children[1].children[0].classList.add('focus');

});

reg_aTag.addEventListener('mouseout', () => {

    regButton.children[0].children[1].children[0].classList.remove('focus');

});

const ham_btn_close = document.querySelector('#hamburger-close');
const ham_btn = document.querySelector('#hamburger-menu');
const nav_container = document.querySelector('#navigation-container');

ham_btn_close.addEventListener('click', (e) => {

    nav_container.classList.remove('open');

});

ham_btn.addEventListener('click', (e) => {

    nav_container.classList.add('open');

});