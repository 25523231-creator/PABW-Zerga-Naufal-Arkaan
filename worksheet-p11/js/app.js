import { ambilProyek } from './api.js';
import { isiProyek, pulihkan, muat } from './state.js';
import { tampilkanGalat, aturMemuat } from './dom.js';
import { pasangPendengar } from './events.js';

  async function mulai() {
    pulihkan(muat());                 // lembar D: pilihan terakhir, atau nilai bawaan
    pasangPendengar();                // events.js: klik filter, favorit, atur ulang
    aturMemuat(true);
    try {
      isiProyek(await ambilProyek()); // isiProyek memanggil render(state)
    } catch (galat) {
      tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang.');
    } finally {
      aturMemuat(false);
    }
  }
  mulai();

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

  if (!form || !tabel) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Mencegah reload halaman

    const inputNama = document.querySelector("#nama-kolom");
    const inputWaktu = document.querySelector("#waktu");
    const inputDurasi = document.querySelector("#Durasi");

    const nama = inputNama ? inputNama.value.trim() : "";
    const waktu = inputWaktu ? inputWaktu.value : "";
    const durasi = inputDurasi ? inputDurasi.value.trim() : "";

    if (!nama || !waktu || !durasi) {
      alert("Semua kolom wajib diisi!");
      return;
    }

    const baris = document.createElement("tr");

    const tdNama = document.createElement("td");
    tdNama.textContent = nama;

    const tdWaktu = document.createElement("td");
    tdWaktu.textContent = waktu;

    const tdDurasi = document.createElement("td");
    tdDurasi.textContent = durasi;

    baris.append(tdNama, tdWaktu, tdDurasi);
    tabel.appendChild(baris);

    form.reset();
    alert("Jadwal olahraga berhasil ditambahkan!");
  });
}

inisialisasiFormOlahraga(); 