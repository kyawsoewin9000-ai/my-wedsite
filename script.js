function showResult(image,text){

document.getElementById("popupImage").src=image;

document.getElementById("popupText").innerText=text;

document.getElementById("resultModal").style.display="block";

launchConfetti();

}

function closeResult(){

document.getElementById("resultModal").style.display="none";

}

function openVideo(){

document.getElementById("videoModal").style.display="block";

}

function closeVideo(){

document.getElementById("videoModal").style.display="none";

}

for(let i=0;i<30;i++){

let heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(5+Math.random()*5)+"s";

heart.style.fontSize=
(15+Math.random()*20)+"px";

document.body.appendChild(heart);

}

function launchConfetti(){

for(let i=0;i<50;i++){

let confetti=document.createElement("div");

confetti.innerHTML="🎉";

confetti.style.position="fixed";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="20vh";

confetti.style.fontSize="24px";

document.body.appendChild(confetti);

setTimeout(()=>{
confetti.remove();
},2000);

}

}