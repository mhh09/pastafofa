const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const response = document.getElementById('response');

yesBtn.addEventListener('click', () => {
  response.textContent = "Sabia que você ia dizer SIM 💕";
});

noBtn.addEventListener('mouseover', () => {
  // Faz o botão "Não" fugir do mouse
  const x = Math.floor(Math.random() * window.innerWidth - 100);
  const y = Math.floor(Math.random() * window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;  
});

yesBtn.addEventListener('click', () => {
  response.innerHTML = "Sabia que você ia dizer SIM.<br>Te amo xuxu 💕";
  
  // Criar corações caindo
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.textContent = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-50px";
    heart.style.fontSize = "2em";
    heart.style.animation = `fall ${2 + Math.random() * 3}s linear forwards`;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
});

// Animação CSS
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(${window.innerHeight + 100}px);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
