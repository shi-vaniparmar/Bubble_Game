var score=0;
var newhit=0;
var timer=60;
function makebubble()
{
    var bub="";
    for(var i=1;i<146;i++)
    {
        var rand=Math.floor(Math.random()*10);
        bub+=`<div class="bubble">${rand}</div>`;
    }
    document.querySelector("#boxbottom").innerHTML=bub;
}

function runtimer()
{
   var time= setInterval(function(){
        if(timer>0)
        {timer--;
        document.querySelector("#timer").textContent=timer;}
        else
        {
            clearInterval(time);
            document.querySelector("#boxbottom").innerHTML=`<h1>GAME OVER</h1>`
        }
    },1000)
}
function increascore()
{
    score+=10;
    document.querySelector("#scoreval").textContent=score;

}
function gethit()
{
     newhit=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=newhit;
}


document.querySelector("#boxbottom").addEventListener("click",function(dets){
//console.log(Number(dets.target.textContent));//isse jispr click kia wo milega
var clicknum=Number(dets.target.textContent);
if(clicknum===newhit)
increascore();
makebubble();
gethit();


})
gethit();
runtimer();
makebubble();