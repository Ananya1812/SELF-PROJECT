document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.querySelector('.generateBtn');
    const generatedEmoji = document.getElementById('generatedEmoji');

    const emojis = [
        '😀', '😂', '😍', '🤔', '🎉', '🚀', '🌈', '🐱', '🍕', '🎸',
        '😎', '👍', '🌟', '💡', '🎊', '💻', '🍦', '🐼', '🍔', '🎹',
        '😊', '🤣', '❤️', '🙌', '🎈', '🌌', '🐶', '🍟', '🍓', '🎤',
        '😜', '👏', '💖', '🤗', '🎁', '🚗', '🍩', '🐵', '🍭', '🎮',
        '😇', '😋', '💯', '🙏', '🎆', '🚢', '🍰', '🦄', '🍇', '🎵'
      ]
      

    generateBtn.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        const randomEmoji = emojis[randomIndex];
        generatedEmoji.textContent = randomEmoji;
    });
});
