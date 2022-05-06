//for signup.html
const background = 'url(asset/images/background.jpg)';
const opacity = 'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5))';

const username = document.getElementById('sign_up_username');
const pw = document.getElementById('sign_up_pw');
const confirm_pw = document.getElementById('sign_up_confirm_pw');
const join_us_button = document.getElementById('join_us')

join_us_button.addEventListener('click', join_us);

function join_us() {
    verify = true;
    if (verify) {
        modify_background();
        questionnaire();
    } else {
        // alert()
    }
}

function modify_background() {
    document.body.style.visibility = 'hidden';
    document.body.style.backgroundImage = `${opacity}, ${background}`;
    document.body.style.backgroundSize = 'cover';
}

function questionnaire() {
    const box = document.createElement('div');
    box.classList.add('card', 'bg-dark');
    document.body.append(box);
    console.log(document.body)
}
