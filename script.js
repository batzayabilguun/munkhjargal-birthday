const girlfriendName = "Миний аз жаргал";
const birthdayDate = "2026-06-24T00:00:00";
const correctAnswer = "messi";

document.getElementById("herName").textContent = girlfriendName;

function startMusic() {
  const music = document.getElementById("bgMusic");
  music.play().catch(() => {
    alert("music.mp3 файлаа энэ хавтас дотор хийгээд дахин дарна уу.");
  });
}

function updateCountdown() {
  const target = new Date(birthdayDate).getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "<h3>Өнөөдөр чиний төрсөн өдөр ❤️</h3>";
    return;
  }

  document.getElementById("days").textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("hours").textContent = Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").textContent = Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById("seconds").textContent = Math.floor((diff / 1000) % 60);
}

setInterval(updateCountdown, 1000);
updateCountdown();

function checkAnswer() {
  const answer = document.getElementById("answer").value.trim().toLowerCase();
  const msg = document.getElementById("quizMessage");

  if (answer === correctAnswer || answer.includes(correctAnswer)) {
    document.getElementById("letter").classList.remove("hidden");
    msg.textContent = "Нээгдлээ ❤️";
    document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
  } else {
    msg.textContent = "Үгүй ээ 😭 Дахиад оролдоод үзээрэй.";
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = ["❤️", "💕", "💗", "💖"][Math.floor(Math.random() * 4)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  heart.style.fontSize = 16 + Math.random() * 22 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 350);
