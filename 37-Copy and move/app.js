// app.js

document.addEventListener('DOMContentLoaded', function () {
    const copyBtn = document.querySelector('.copyBtn');
    const moveBtn = document.querySelector('.moveBtn');
    const copyText = document.getElementById('copyText');
    const finalText = document.getElementById('finalText');

    copyBtn.addEventListener('click', function () {
        finalText.value = copyText.value;
    });

    moveBtn.addEventListener('click', function () {
        copyText.value = finalText.value;
    });
});
