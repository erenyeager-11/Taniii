const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const BDAY=new Date(2026,9,19,0,0,0); // 19 Oct 2026
$('#envelope-screen').onclick=()=>{$('#envelope-screen').style.display='none';$('#main').hidden=false;burst();};
$$('.tab').forEach(t=>t.onclick=()=>{
  $$('.tab,.panel').forEach(e=>e.classList.remove('active'));
  t.classList.add('active');$('#'+t.dataset.tab).classList.add('active');
});
// countdown
function tick(){
  const d=BDAY-new Date();
  if(d<=0){$('#countdown').textContent='🎉 It\'s your birthday today, Tanishka! 🎉';return;}
  const D=Math.floor(d/864e5),H=Math.floor(d/36e5)%24,M=Math.floor(d/6e4)%60,S=Math.floor(d/1e3)%60;
  $('#countdown').textContent=`Birthday in: ${D}d ${H}h ${M}m ${S}s ⏳`;
}
tick();setInterval(tick,1000);
// candles
$('#blow').onclick=()=>{
  $('.cake').classList.add('out');
  $('#wishmsg').textContent='Made your wish? I\'ll make sure it comes true 💖';
  burst();
};
// floating hearts
setInterval(()=>{const h=document.createElement('span');h.className='h';h.textContent=['💖','💗','🌸','✨'][Math.random()*4|0];
  h.style.left=Math.random()*100+'vw';h.style.fontSize=14+Math.random()*20+'px';h.style.animationDuration=6+Math.random()*6+'s';
  $('#hearts').appendChild(h);setTimeout(()=>h.remove(),12000);},700);
// dodging NO + YES
const no=$('#no');
function dodge(e){e&&e.preventDefault();const w=$('.qbtns');
  no.style.position='absolute';
  no.style.left=Math.random()*(w.offsetWidth-no.offsetWidth)+'px';
  no.style.top=Math.random()*120-30+'px';}
no.addEventListener('mouseover',dodge);no.addEventListener('touchstart',dodge);no.addEventListener('click',dodge);
$('#yes').onclick=()=>{$('#q').hidden=true;$('#a').hidden=false;const v=$('#a video');v.play().catch(()=>{});burst();};
// confetti
const cv=$('#confetti'),cx=cv.getContext('2d');let ps=[];
function size(){cv.width=innerWidth;cv.height=innerHeight}size();addEventListener('resize',size);
function burst(){for(let i=0;i<140;i++)ps.push({x:innerWidth/2,y:innerHeight/2,vx:(Math.random()-.5)*16,vy:Math.random()*-14-2,g:.3,c:`hsl(${Math.random()*360},90%,60%)`,s:5+Math.random()*6,l:120});}
(function loop(){cx.clearRect(0,0,cv.width,cv.height);
  ps=ps.filter(p=>p.l-->0);
  ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;cx.fillStyle=p.c;cx.fillRect(p.x,p.y,p.s,p.s);});
  requestAnimationFrame(loop);})();
