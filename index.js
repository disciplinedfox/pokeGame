const canvas = document.querySelector("canvas");

const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = '/Users/andrewb/Desktop/pokeGame/img/pokeGame Map.png'

const playerImage = new Image();
playerImage.src = '/Users/andrewb/Desktop/pokeGame/img/playerDown.png';

//placing and centering player on loaded center screen
class Sprite {
    constructor({position, velocity, image}){
        this.position = position,
        this.image = image
    }
    draw() {
        c.drawImage(this.image, -1100, -700, );
    }
}

const background = new Sprite({
    position: {
        x: -1100, 
        y: -700
        },
    image: image
    })
//player movement
const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    s: {
        pressed: false,
    },
    d: {
        pressed: false,
    }
}

function animate() {
    window.requestAnimationFrame(animate);
    background.draw();
    c.drawImage(
        playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
    canvas.width / 2 - (playerImage.width / 4) / 2, 
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
    );
    console.log('animate');
}
animate();


window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'w':
            keys.w.pressed = true;
            break;
        case 'a':
            keys.a.pressed = true;
            break;
        case 'd':
            keys.d.pressed = true;
            break;
        case 's':
            keys.s.pressed = true;
            break;
    }
})
