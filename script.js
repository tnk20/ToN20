function updateClock() {
  const now = new Date();
  const clock = document.getElementById('clock');
  const date = document.getElementById('date');

  clock.textContent = now.toLocaleTimeString('id-ID');
  date.textContent = now.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
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

function updateQuote() {
  const quote = document.getElementById('quote');
  const random = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[random];
}

setInterval(updateQuote, 5000);
updateQuote();
