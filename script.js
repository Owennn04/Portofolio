// ===== EDIT DI SINI SAJA =====
var SITE = { name: 'NAMA KAMU', initial: 'N', email: 'emailkamu@gmail.com' };
// =============================

document.title = 'Portofolio | ' + SITE.name;
document.querySelectorAll('[data-name]').forEach(function (e) { e.textContent = SITE.name; });
document.querySelectorAll('[data-initial]').forEach(function (e) { e.textContent = SITE.initial; });
document.querySelectorAll('[data-email]').forEach(function (e) { e.href = 'mailto:' + SITE.email; });
document.getElementById('y').textContent = new Date().getFullYear();

// Mode terang/gelap
document.getElementById('theme').addEventListener('click', function () {
  var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Tandai menu sesuai bagian yang sedang dilihat
(function () {
  if (!('IntersectionObserver' in window)) return;
  var links = document.querySelectorAll('.links a'), map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) { a.classList.remove('active'); });
      if (map[e.target.id]) map[e.target.id].classList.add('active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach(function (s) { io.observe(s); });
})();
