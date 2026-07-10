/* =====================================
   Allen & Alice Wedding
   Interactive Experience
   Version 1.0
===================================== */



// ==============================
// Envelope Opening
// ==============================


function openInvite(){

    const envelope =
    document.querySelector(".envelope");


    envelope.classList.toggle("open");


    const clickText =
    document.querySelector(".click-text");


    if(envelope.classList.contains("open")){

        clickText.innerHTML =
        "Welcome to our wedding";

        setTimeout(()=>{

            document
            .querySelector(".hero")
            .scrollIntoView({

                behavior:"smooth"

            });


        },1500);

    }

}






// ==============================
// Music Control
// ==============================


const music =
document.getElementById("music");


let playing=false;



function toggleMusic(){


    if(!playing){

        music.play();

        playing=true;


    }else{


        music.pause();

        playing=false;


    }


}








// ==============================
// Scroll Reveal
// ==============================


const sections =
document.querySelectorAll(
"section"
);



const revealObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


},
{

threshold:0.15

});




sections.forEach(section=>{


sections.forEach(section=>{

section.style.opacity="1";

section.style.transform=
"translateY(0)";

section.style.transition=
"all 1.2s ease";

revealObserver.observe(section);

});


revealObserver.observe(section);


});







// ==============================
// Countdown
// ==============================


const weddingDate =
new Date(
"January 24, 2027 16:30:00"
);



function createCountdown(){


const now =
new Date();


const distance =
weddingDate-now;



if(distance < 0){

return;

}



const days =
Math.floor(
distance/(1000*60*60*24)
);



const hours =
Math.floor(
(distance%(1000*60*60*24))
/
(1000*60*60)
);



const minutes =
Math.floor(
(distance%(1000*60*60))
/
(1000*60)
);



const seconds =
Math.floor(
(distance%(1000*60))
/
1000
);



let countdown =
document.querySelector(".countdown");



if(countdown){


countdown.innerHTML =

`
${days} DAYS
<br>
${hours} HOURS
<br>
${minutes} MINUTES
<br>
${seconds} SECONDS

`;

}


}



setInterval(
createCountdown,
1000
);









// ==============================
// Golden Floating Particles
// ==============================


function createParticle(){


const particle =
document.createElement(
"span"
);


particle.className =
"particle";



particle.style.left =
Math.random()*100+"vw";


particle.style.animationDuration =
(5+Math.random()*8)+"s";



particle.style.opacity =
Math.random();



document.body.appendChild(
particle
);



setTimeout(()=>{


particle.remove();


},12000);


}



setInterval(
createParticle,
600
);









// ==============================
// Smooth Image Zoom
// ==============================


window.addEventListener(
"scroll",
()=>{


const images =
document.querySelectorAll(
".photo img"
);



images.forEach(img=>{


const position =
img.getBoundingClientRect()
.top;



const screen =
window.innerHeight;



if(position < screen){


img.style.transform=
"scale(1.05)";


img.style.transition=
"2s";


}


});


}

);
.particle{

position:fixed;

top:-20px;

width:8px;

height:8px;

background:#D8C4A8;

border-radius:50%;

pointer-events:none;

z-index:999;

animation:
fall linear forwards;

}


@keyframes fall{


to{

transform:
translateY(110vh)
rotate(360deg);


opacity:0;

}


}
