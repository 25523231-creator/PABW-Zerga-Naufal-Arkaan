import { ambilProyek } from "./api.js";

import {
  render,
  tampilkanGalat,
  aturMemuat,
  inisialisasiFilter,
} from "./dom.js";

const profil = {
  nama: "Zerga Naufal Arkaan",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const teksProfil = JSON.stringify(profil);
const profilSalinan = JSON.parse(teksProfil);

console.log("Hasil stringify:", teksProfil);
console.log("Hasil parse:", profilSalinan);

console.log(`${profil.nama} — ${profil.peran}`);
console.log("Keahlian:", profil.keahlian.join(" · "));

async function muat() {
  aturMemuat(true);

  try {
    const data = await ambilProyek();

    console.log("Data dari JSON:", data);

    render(data);
    inisialisasiFilter(data);
  } catch (galat) {
    tampilkanGalat(
      "Data gagal dimuat. Periksa koneksi dan alamat JSON, lalu muat ulang halaman."
    );

    console.error("Kesalahan aplikasi:", galat.message);
  } finally {
    aturMemuat(false);
  }
}

muat();

function inisialisasiFormOlahraga() {
  const form = document.querySelector(".form-olahraga");
  const tabel = document.querySelector("#jadwal-body");

  if (!form || !tabel) {
    console.error("Form atau tabel jadwal tidak ditemukan.");
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nama = document.querySelector("#nama-kolom").value.trim();
    const waktu = document.querySelector("#waktu").value;
    const durasi = document.querySelector("#Durasi").value.trim();

    if (!nama || !waktu || !durasi) {
      alert("Semua kolom wajib diisi!");
      return;
    }

    const baris = document.createElement("tr");

    [nama, waktu, durasi].forEach((nilai) => {
      const kolom = document.createElement("td");
      kolom.textContent = nilai;
      baris.appendChild(kolom);
    });

    tabel.appendChild(baris);
    form.reset();

    alert("Jadwal olahraga berhasil ditambahkan!");
  });
}

inisialisasiFormOlahraga();
