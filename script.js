(function(){
  var burger=document.querySelector('.burger'),nav=document.getElementById('nav');
  if(burger&&nav){
    burger.addEventListener('click',function(){
      var open=nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded',open?'true':'false');
    });
    nav.addEventListener('click',function(e){
      if(e.target.tagName==='A'){nav.classList.remove('is-open');burger.setAttribute('aria-expanded','false');}
    });
  }
  // Language switcher (visual only in this concept)
  document.querySelectorAll('.lang button').forEach(function(b){
    b.addEventListener('click',function(){
      document.querySelectorAll('.lang button').forEach(function(x){x.classList.remove('is-active');x.removeAttribute('aria-pressed');});
      b.classList.add('is-active');b.setAttribute('aria-pressed','true');
    });
  });
  var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
})();
