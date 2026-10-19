const profil = {
  nama: "Zerga Naufal Arkaan",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};
  
const jumlahProyek = 3;
let pilihanAktif = "semua";

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

function formatKeahlian(daftar) {
  return daftar.join(" · ");
}

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
export const daftarProyek = [
  {
    judul: "Program Lari & Marathon 10K",
    tahun: 2026,
    kategori: "lari"
  },
  {
    judul: "Gym rutin",
    tahun: 2026,
    kategori: "kebugaran"
  },
  {
    judul: "Komunitas Sepeda",
    tahun: 2026,
    kategori: "sepeda"
  }
];
console.table(profil.keahlian);
console.table(daftarProyek);