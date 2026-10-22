export const profil = {
  nama: 'Zerga Naufal Arkaan',
  nim: '25523231',
  peran: 'Mahasiswa Informatika'
}

export function saring(daftar = [], kategori = 'semua') {
  if (!Array.isArray(daftar)) return []
  if (!kategori || kategori === 'semua') {
    return daftar
  }
  return daftar.filter((item) => item.kategori?.toLowerCase() === kategori.toLowerCase())
}