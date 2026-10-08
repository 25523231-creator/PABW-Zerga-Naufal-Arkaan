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