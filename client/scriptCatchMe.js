document.addEventListener('click', e => {
  if (e.target.matches('.logout') || e.target.matches('.logout *')) {
    fetch('/logout', {
      method: 'POST'
    }).then(() => {
      window.location.href = '/login';
    });
  }
});

function randomText() {
  const text = ("!@#$%^&*()_+");
  const letters = text[Math.floor(Math.random() * text.length)];
  return letters;
}

function rain(){
  let cloud = document.querySelector('.cloud');
  let e = document.createElement('div');
  e.classList.add('drop');
  cloud.appendChild(e);

  let left = Math.floor(Math.random() * 300) + 20;
  let size = Math.random() * 1.5;
  let duration = Math.random() * 1;

  e.innerText = randomText();
  e.style.left = left + 'px';
  e.style.fontSize = 0.5 + size + 'em';
  e.style.animationDuration = 1 + duration + 's';

  setTimeout(function(){
    cloud.removeChild(e)
  }, 2000)
}

setInterval(function(){
  rain()
}, 30)
