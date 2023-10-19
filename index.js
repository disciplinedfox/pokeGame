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


image.onload = () => {
    c.drawImage(image, -1100, -700, );
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
}


