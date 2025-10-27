// Khi nhấn vào phong thư thì mở ra
const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");
});

// Tạo hiệu ứng trái tim bay
const bg = document.querySelector(".hearts-bg");
const hearts = ['💖', '❤️', '💕', '💘', '💗'];

function createHeart() {
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.top = Math.random() * 100 + "vh";
  heart.style.setProperty("--y", Math.random() * 20 - 10 + "vh");
  heart.style.fontSize = 18 + Math.random() * 12 + "px";
  heart.style.animationDuration = 8 + Math.random() * 4 + "s";
  bg.appendChild(heart);

  setTimeout(() => heart.remove(), 13000);
}

setInterval(createHeart, 400);
