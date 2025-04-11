const canvas= document.getElementById("myCanvas");
const ctx= canvas.getContext("2d");
ctx.fillStyle="red"
// console.log(ctx);
// console.log(canvas);

// ctx.fillStyle ="red";
// ctx.fillRect(50,50,100,50);

// ctx.beginPath()
// ctx.moveTo(20,20)
// ctx.lineTo(150,100)
// ctx.stroke();
// ctx.beginPath();
// ctx.arc(100,100,40,0,2 * Math.PI);
// ctx.fillStyle="red";
// ctx.stroke()
// // ctx.fill();

// ctx.beginPath()
// ctx.font="20px Arial";
// ctx.fillText("Hello World",50,100)

// canvas.addEventListener("click",(event) =>{
//     ctx.fillStyle="blue"
//     ctx.fillRect(event.clientX,event.clientY,10,10);
// });

// let x=0;
// function animate(){
//     ctx.clearRect(0, 0, canvas.Width,canvas.height);
//     ctx.fillRect(x,50,50,50);
//     x+=2;
//     if(x>canvas.width)
//         x=-50;
//     requestAnimationFrame(animate)
// }
// animate();

// let x=0
// let speed=2
// function animate(){
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     ctx.fillRect(x,50,50,50)
//      ctx.fillStyle="green"  
//     x += speed;
//     if(x+50>=canvas.width||x<=0){
//      speed=-speed
//      ctx.fillStyle="blue"
//     }
// requestAnimationFrame(animate);
// }
// animate();
// console.log(ctx);


let x=0;
function animate(){
    ctx.fillRect(5,50,50,50)
    ctx.fillStyle="blue"
    x+=2
    if(x>canvas.width)
        x=50
    reqestAnimationFrame(animate)
}

animate()
