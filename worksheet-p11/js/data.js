export const profil = {
  nama: "Zerga Naufal Arkaan",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript", "Git"]
};

export function buatPerkenalan({ nama, peran }) {
  return `Halo, saya ${nama}, seorang ${peran}.`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");
export function saring(daftar, kategori) {
  if (!kategori || kategori === "semua") {
    return daftar;
  }
  return daftar.filter((proyek) => proyek.kategori === kategori);
}