// script.js

// --- 1. Smooth Scrolling untuk Navigasi ---
// Ini akan membuat guliran halaman lebih halus ketika link navigasi diklik
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah perilaku default link

    const targetId = this.getAttribute("href"); // Mendapatkan ID target dari atribut href
    const targetSection = document.querySelector(targetId); // Menemukan elemen target

    if (targetSection) {
      // Menggulir ke elemen target dengan efek halus
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// --- 2. Validasi Formulir Kontak Sederhana ---
// Memastikan kolom nama, subjek, email, dan pesan tidak kosong
const contactForm = document.querySelector(".form-kontak");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah pengiriman formulir default

    const nama = document.getElementById("nama").value.trim();
    const subjek = document.getElementById("subjek").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (nama === "" || subjek === "" || email === "" || pesan === "") {
      alert("Mohon lengkapi semua kolom formulir sebelum mengirim!");
    } else {
      // Jika semua kolom terisi, Anda bisa melanjutkan dengan pengiriman formulir
      // atau memproses data di sini.
      // Untuk saat ini, kita hanya akan menampilkan pesan sukses dan mereset form.
      alert("Pesan Anda berhasil dikirim!");
      this.reset(); // Mereset semua input di formulir
      console.log("Data Formulir:");
      console.log("Nama:", nama);
      console.log("Subjek:", subjek);
      console.log("Email:", email);
      console.log("Pesan:", pesan);
    }
  });
}

// --- 3. Efek Animasi Sederhana: Memudarkan Elemen Saat Menggulir (Contoh) ---
// Ini adalah contoh sederhana. Anda bisa mengembangkan ini dengan library animasi seperti AOS (Animate On Scroll)
const mainContent = document.querySelector(".main-content");
const aboutSection = document.querySelector(".about");
const opiniBeritaSection = document.querySelector(".opini-berita");
const portfolioSection = document.querySelector("section:nth-of-type(3)"); // Untuk bagian portofolio

const sectionsToAnimate = [
  mainContent,
  aboutSection,
  portfolioSection,
  opiniBeritaSection,
];

const checkVisibility = () => {
  sectionsToAnimate.forEach((section) => {
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Jika bagian terlihat di layar, tambahkan kelas 'visible'
      if (sectionTop < windowHeight * 0.75) {
        // Angka 0.75 bisa disesuaikan
        section.classList.add("visible");
      } else {
        section.classList.remove("visible"); // Opsional: Hapus kelas jika tidak terlihat lagi
      }
    }
  });
};

// Panggil fungsi saat halaman dimuat dan saat menggulir
window.addEventListener("load", checkVisibility);
window.addEventListener("scroll", checkVisibility);

// Anda perlu menambahkan CSS untuk efek animasinya di file style.css Anda:
/*
.main-content,
.about,
.opini-berita,
section:nth-of-type(3) { // Bagian portofolio
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.main-content.visible,
.about.visible,
.opini-berita.visible,
section:nth-of-type(3).visible {
    opacity: 1;
    transform: translateY(0);
}
*/