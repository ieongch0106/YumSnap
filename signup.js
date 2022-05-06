import { male_icon, female_icon } from "./asset/images/svg/sex.js";

//for signup.html
const background = 'url(asset/images/background.jpg)';
const opacity = 'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5))';

const username = document.getElementById('sign_up_username');
const pw = document.getElementById('sign_up_pw');
const confirm_pw = document.getElementById('sign_up_confirm_pw');
const join_us_button = document.getElementById('join_us')

join_us_button.addEventListener('click', verify);

function verify() {
    join_us();
}

function join_us() {
    verify = true;
    if (verify) {
        const elements = document.getElementsByClassName('sign_up_section');
        for (const e of elements) {
            e.innerHTML = '';   
        }
        document.getElementById('questionnaire').classList.add('fade-in-down');
        document.getElementById('box_card').innerHTML += '<h1>What is your sex?<h1><br>' + male_icon + female_icon;
        document.getElementById('male_icon').addEventListener('click', choose_age);
        document.getElementById('female_icon').addEventListener('click', choose_age);
    } else {
        // alert();
    }
}

function choose_age() {
    restart_animation('questionnaire', 'fade-in-down');
    const input = document.createElement('input');
    input.type = 'range';
    input.min = '15';
    input.max = '80';
    input.classList.add('col-lg-12', 'col-md-10', 'col-sm-10')
    document.getElementById('box_card').innerHTML = '<h1>What is your age:<h1><br>';
    document.getElementById('box_card').append(input);
}

function restart_animation(id_container, class_animation) {
    document.getElementById(id_container).classList.remove(class_animation);
    document.getElementById(id_container).offsetWidth;
    document.getElementById(id_container).classList.add(class_animation);
}