const cube = document.querySelector('.cube');

let rotateX = 0;
let rotateY = 0;

function rotateCube() {
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function spinCube() {
    const randomSide = Math.floor(Math.random() * 6);
    const cube = document.querySelector('.cube');

    const rotations = [
        'rotateX(0deg) rotateY(0deg) rotateZ(0deg)', // Front
        'rotateX(180deg) rotateY(0deg) rotateZ(0deg)', // Back
        'rotateX(0deg) rotateY(90deg) rotateZ(0deg)', // Right
        'rotateX(0deg) rotateY(-90deg) rotateZ(0deg)', // Left
        'rotateX(-90deg) rotateY(0deg) rotateZ(0deg)', // Top
        'rotateX(90deg) rotateY(0deg) rotateZ(0deg)' // Bottom
    ];

    cube.style.transform = rotations[randomSide];
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