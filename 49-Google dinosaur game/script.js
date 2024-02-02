const dino = document.getElementById('dino');
const obstacle = document.getElementById('obstacle');

document.addEventListener('keydown', jump);

function jump(event) {
    if (event.code === 'Space') {
        if (dino.classList != 'jump') {
            dino.classList.add('jump');
            setTimeout(() => {
                dino.classList.remove('jump');
            }, 300);
        }
    }
}

function gameLoop() {
    const dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
    const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

    if (obstacleLeft > 0 && obstacleLeft < 60 && dinoBottom <= 50) {
        alert('Game Over!');
    }

    obstacle.style.left = obstacleLeft - 4 + 'px';

    requestAnimationFrame(gameLoop);
}

gameLoop();
