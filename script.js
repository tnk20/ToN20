function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString('id-ID');
  document.getElementById('date').textContent = now.toLocaleDateString('id-ID', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
}
setInterval(updateClock, 1000);
updateClock();

const quotes = [
  "Masa depan cerah menanti mereka yang berusaha hari ini",
  "Jangan menyerah sebelum mencoba",
  "Setiap hari adalah kesempatan baru",
  "Kesuksesan adalah hasil dari kerja keras",
  "Belajar dari kegagalan adalah awal dari kesuksesan"
];

let idx = 0;
setInterval(() => {
  idx = (idx + 1) % quotes.length;
  document.getElementById('quote').textContent = `"${quotes[idx]}"`;
}, 5000);
