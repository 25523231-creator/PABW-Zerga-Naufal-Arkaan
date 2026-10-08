const profil = {
  nama: "Zerga Naufal Arkaan",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const jumlahProyek = 1;

let pilihanAktif = "semua";

const kalimat = `Zerga Naufal Arkaan ${profil.Zerga}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

console.log(typeof profil.nama);
console.log(typeof jumlahProyek);
console.log(typeof profil.keahlian);
console.log(typeof pilihanAktif);

console.log(profil, jumlahProyek, pilihanAktif);

// 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Merapikan daftar keahlian menjadi satu baris teks
function formatKeahlian(daftar) {
  return daftar.join(" · ");
}

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

console.log(buatPerkenalan ({ nama: "Zerga", peran: "Mahasiswa"}));
console.log(formatKeahlian (["HTML", "CSS"]));
console.log(formatKeahlian (["JavaScript"]));

const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, selesai: true },
  { judul: "Katalog Produk", tahun: 2026, selesai: false },
];

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog);

const judulProyek = daftarProyek.map((proyek) => proyek.judul);
console.log(judulProyek);

const urut = [...daftarProyek].sort((a, b) => a.judul.localeCompare(b.judul));
console.table(urut);
console.table(daftarProyek);

console.log(profil.nama);

const nilaiInput = "3";
console.log(nilaiInput + 1);

const elemen = document.querySelector("#tidak-ada");
elemen.textContent = "tes";