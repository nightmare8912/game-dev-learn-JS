const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log (ctx)

const CANVAS_WIDTH = canvas.width = 500
const CANVAS_HEIGHT = canvas.height = 300

const playerImage = new Image ();
playerImage.src = 'shadow_dog.png';
let x = 0, y = 100;
const spriteWidth = 575;
const spriteHeight = 523;
function animateTest () // self declared method
{
    // calling built-in method in next line
    ctx.clearRect (0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // clearing the frame after every animation
    ctx.fillRect (x, 50, 100, 100) // test object
    x++;y++;
    if (y > CANVAS_WIDTH)
        x = 0, y = 100
    // ctx.drawImage (playerImage,50, 0, 5200, 3000); 
    // ctx.drawImage can take multiple types of arguments, 4 or 9   
    // ctx.drawImage (playerImage,0, 0, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);    
    requestAnimationFrame(animateTest); // this function will call the function given in its parameter once, but since we're calling it inside the function that it is going to call, it is an infinite recursive loop
}
animateTest();