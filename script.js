// Khi bấm nút thì hiện câu chúc
document.getElementById("btn").addEventListener("click", function() {
  const msg = document.getElementById("message");
  msg.classList.remove("hidden");
  this.disabled = true;
  this.textContent = "💖 Đã mở 💖";
});

// Tạo hiệu ứng trái tim bay ngang
const bg = document.querySelector('.hearts-bg');
const hearts = ['❤️','💖','💕','💘','💗'];

function createHeart() {
  const heart = document.createElement('span');
  heart.textContent = hearts[Math.floor(Math.random()*hearts.length)];
  heart.classList.add('heart');
  heart.style.setProperty('--y', Math.random()); // vị trí ngẫu nhiên theo trục Y
  heart.style.animationDuration = (8 + Math.random()*5) + 's';
  heart.style.fontSize = (16 + Math.random()*20) + 'px';
  bg.appendChild(heart);
  setTimeout(() => heart.remove(), 13000);
}

setInterval(createHeart, 400);
