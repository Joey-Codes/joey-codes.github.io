const cube = document.querySelector('.cube');
let rotateX = 0;
let rotateY = 0;


function rotateCube() {
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'w': 
            rotateX -= 90;
            break;
        case 's': 
            rotateX += 90;
            break;
        case 'a': 
            rotateY -= 90;
            break;
        case 'd':
            rotateY += 90;
            break;
    }
    rotateCube();
});

let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    if (!touchStartX || !touchStartY) {
        return;
    }
    const touchEndX = event.touches[0].clientX;
    const touchEndY = event.touches[0].clientY;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    const sensitivity = 5;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > sensitivity) {
        //X direction
        if (deltaX > 0) {
            //right
            rotateY += 90;
        } else {
            //left
            rotateY -= 90;
        }
    } else if (Math.abs(deltaY) > sensitivity) {
        //Y direction
        if (deltaY > 0) {
            //down
            rotateX += 90;
        } else {
            //up
            rotateX -= 90;
        }
    }

    rotateCube();

    touchStartX = 0;
    touchStartY = 0;
};
