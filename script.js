//for index.html
const download_apple = document.getElementById('apple');
const download_android = document.getElementById('android');

//update when mobile apps are available.
const apple_message = 'Currently Not Available...';
const android_message = 'Currently Not Available...';

//DOM events.
download_apple.addEventListener('click', apple_status);
download_android.addEventListener('click', android_status);

function apple_status() {
    download_apple.style.background = 'white';
    download_apple.innerHTML = apple_message;
}

function android_status() {
    download_android.style.background = 'white';
    download_android.innerHTML = android_message;
}