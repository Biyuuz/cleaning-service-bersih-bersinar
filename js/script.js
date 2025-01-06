const navbarNav = document.querySelector('.navbar-nav');

// Ketika layanan menu di klik
document.querySelector("#menu-layanan").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const layanan = document.querySelector('#menu-layanan');

document.addEventListener('click', function (e) {
  if (!layanan.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// Scroll ke beranda saat menu beranda diklik
const menuBeranda = document.querySelector('a[href="home"]');

menuBeranda.addEventListener('click', function (e) {
  e.preventDefault();

  document.getElementById('home').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

// Scroll ke layanan saat menu "Jasa Layanan" diklik
const menuLayanan = document.querySelector('a[href="#services"]');

menuLayanan.addEventListener('click', function (e) {
  e.preventDefault();

  document.getElementById('layanan').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

// Scroll ke Tentang Kami saat menu "Tentang Kami" diklik
const menuTentangKami = document.querySelector('a[href="#about"]');

menuTentangKami.addEventListener('click', function (e) {
  e.preventDefault();

  document.getElementById('about').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

// Scroll ke Kontak saat menu "Kontak" diklik
const menuKontak = document.querySelector('a[href="#contact"]');

menuKontak.addEventListener('click', function (e) {
  e.preventDefault();

  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});