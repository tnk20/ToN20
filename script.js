function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString('id-ID', {hour12: false});
}
setInterval(updateClock, 1000);
updateClock();

document.getElementById('date').textContent = new Date().toLocaleDateString('id-ID', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});

const quotes = [
  "Masa depan cerah menanti mereka yang berusaha hari ini",
  "Jangan menyerah sebelum mencoba",
  "Setiap hari adalah kesempatan baru",
  "Kesuksesan adalah hasil dari kerja keras",
  "Belajar dari kegagalan adalah awal dari kesuksesan"
];
let qi = 0;
function changeQuote() {
  document.getElementById('quote').textContent = `"${quotes[qi]}"`;
  qi = (qi + 1) % quotes.length;
}
setInterval(changeQuote, 5000);
changeQuote();

const bgm = document.getElementById('bgm');
function toggleMusic() {
  if (bgm.paused) bgm.play();
  else bgm.pause();
}
function setVolume() {
  bgm.volume = document.getElementById('volume').value;
}
