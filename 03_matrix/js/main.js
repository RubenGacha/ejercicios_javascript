const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
const position=Array(300).join(0).split("");
const w=document.body.clientWidth;
const h=document.body.clientHeight;

console.log(h);
canvas.setAttribute("width",w);
canvas.setAttribute("height",h+100);


const initMatrix=()=>{
    ctx.fillStyle="rgba(0, 15, 2, 0.15)";
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle="#4caf50";
    ctx.font="11pt";

    position.map((y,index)=>{
        const text=String.fromCharCode(1e3+(Math.random()*30));
        const x=(index * 15) + 15;
        canvas.getContext("2d").fillText(text,x,y);
        y > 100 + Math.random() * 1e3 
        ?position[index]=0
        :position[index]=y+15;
    })
}

setInterval(initMatrix, 70);