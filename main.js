

const drop_f_btn = document.querySelector('#drop-features-btn');
const drop_f = document.querySelector('#drop-features');
const img_f = document.querySelector('#img_drop_f');

const drop_c_btn = document.querySelector('#drop-company-btn');
const drop_c = document.querySelector('#drop-company');
const img_c = document.querySelector('#img_drop_c');

drop_f_btn.addEventListener('click', (e) => {

    drop_f.classList.toggle('active');

    img_f.src = './images/icon-arrow-up.svg';// it is not done

    e.target.parentElement.children[0].classList.toggle('focus'); //some issue here

});

drop_c_btn.addEventListener('click', (e) => {

    drop_c.classList.toggle('active');

    img_c.src = './images/icon-arrow-up.svg'; // it is not done

    e.target.parentElement.children[0].classList.toggle('focus'); //some issue here

});