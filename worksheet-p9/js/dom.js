import { daftarProyek } from './app.js';

document.querySelector(".galeri");     // elemen, atau null
document.querySelectorAll(".filter");  // NodeList

// NodeList bukan array: map dan filter tidak ada di sana
Array.from(document.querySelectorAll(".filter")).map((t) => t.textContent);

const wadah = document.querySelector(".galeri");
const kosong = document.querySelector("#kosong");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;      // teks, bukan HTML
  return li;
}

daftarProyek.forEach((proyek) => wadah.append(buatKartu(proyek)));  

const barisFilter = document.querySelector("#filter");

if (barisFilter) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;                 // klik di luar tombol, abaikan

    const kategori = tombol.dataset.kategori;
    const terpilih = daftarProyek.filter(
      (proyek) => kategori === "semua" || proyek.kategori === kategori
    );

    render(terpilih);
    tandaiTombolAktif(tombol);
  });
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

function render(daftar) {
  wadah.textContent = "";                 // 1. kosongkan lebih dulu

  if (daftar.length === 0) {              // 2. periksa keadaan kosong
    if (kosong) kosong.hidden = false;
    return;
  }
  if (kosong) kosong.hidden = true;

  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));   // 3. isi ulang
}