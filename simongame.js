let btn1=document.querySelector(".box1");
let btn2=document.querySelector(".box2");
let btn3=document.querySelector(".box3");
let btn4=document.querySelector(".box4");
let h4=document.querySelector("h4");
let container=document.querySelector(".container");
let userseq=[];
let gameseq=[];

let btn=["box1","box2","box3","box4"];
let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(!started){
    console.log("game started");
        started=true;
    xbody.classList.remove("endgamecolor");

        levelup();//this will also have blikcolor fn call in it

    }
});

function random_no_from1_4(){
    return (Math.floor(Math.random()*4));
}

function btnflash(btn){
    btn.classList.add("changecolor");
    setTimeout(function(){
        btn.classList.remove("changecolor");
    },250);

}


function levelup(){
    level++;
    h4.innerText=`Level ${level}`;
    //a random button flash
    let x=random_no_from1_4();
    let randcolor=btn[x];//imp
    console.log(randcolor);
    gameseq.push(randcolor);
    let randbtn=document.querySelector(`.${randcolor}`);//imp
     btnflash(randbtn);

    

}

let boxes=document.querySelectorAll(".box");
for(el of boxes){
    el.addEventListener("click",function(){
        if(userseq.length<gameseq.length){
            userseq.push(this.classList[1]);
            //check
            if(userseq[userseq.length-1]!=gameseq[userseq.length-1]){
                console.log("game over");
                gameover();
            }
            else{
                //correct color choosen
                //check the curr color is the last color
                if(userseq.length==gameseq.length){
                userseq=[];
                setTimeout(levelup,1000);//giving some time before a new colr appear after the level is up
               
                }
            }
            
        }
    })
}

let xbody=document.querySelector("body");
function gameover(){
    xbody.classList.add("endgamecolor");
    h4.innerHTML=`GAMEOVER <br> ur score :${level} <br> press anykey to start`;
    started=false;
    level=0;
    gameseq=[];
    userseq=[];


}

