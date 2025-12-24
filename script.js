const SECRET_CODE = "2512"; // 🔐 apna code
let attempts = 0;

function unlock(){
  const input = document.getElementById("codeInput").value;
  const error = document.getElementById("error");

  if(input === SECRET_CODE){
    document.getElementById("lockScreen").style.display="none";
    document.getElementById("content").style.display="block";
    document.getElementById("song").play();
    startGifts();
  } else {
    attempts++;
    error.style.display="block";
    if(attempts >= 5){
      error.innerText = "Too many wrong attempts ❌";
    }
  }
}

const gifts=["🎁","🎄","🎅","❄️","🔔"];

function startGifts(){
  setInterval(()=>{
    const g=document.createElement("div");
    g.className="gift";
    g.innerText=gifts[Math.floor(Math.random()*gifts.length)];
    g.style.left=Math.random()*100+"vw";
    g.style.animationDuration=(2+Math.random()*3)+"s";
    document.body.appendChild(g);
    setTimeout(()=>g.remove(),5000);
  },160);
}