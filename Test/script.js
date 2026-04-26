const cover=document.getElementById('cover');
const swipe=document.getElementById('swipe');

document.getElementById('openBtn').onclick=()=>{
  cover.classList.add('hide');
  setTimeout(()=>{cover.style.display='none';swipe.classList.add('show');},800);
};

// hide swipe on first scroll
let hidden=false;
window.addEventListener('scroll',()=>{
  if(!hidden){swipe.style.opacity='0';hidden=true}
});

// guest name from URL
const params=new URLSearchParams(location.search);
document.getElementById('guest').innerText=params.get('to')||'Tamu Undangan';
