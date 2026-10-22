import { reactive } from 'vue'

const KUNCI = 'pabw-p11'
const VERSI = 2

export const state = reactive({
  daftarProyek: [
    { id: 1, nama: 'Gym', waktu: 'Pagi', durasi: '1 jam', kategori: 'kebugaran' },
    { id: 2, nama: 'Push up', waktu: 'Siang', durasi: '30 menit', kategori: 'kebugaran' },
    { id: 3, nama: 'Lari', waktu: 'Malam', durasi: '1 jam', kategori: 'lari' }
  ],
  kategoriAktif: 'semua',
  favorit: [],
  memuat: false,
  pesanGalat: '',
  temaGelap: false
})

export function simpan() {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
    favorit: state.favorit
  }
  localStorage.setItem(KUNCI, JSON.stringify(isi))
}

export function muat() {
  try {
    const raw = localStorage.getItem(KUNCI)
    if (!raw) return null

    const isi = JSON.parse(raw)
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI)
      return null
    }
    return isi
  } catch {
    localStorage.removeItem(KUNCI)
    return null
  }
}

export function pulihkan() {
  const isi = muat()
  if (!isi) return
  if (isi.kategoriAktif) state.kategoriAktif = isi.kategoriAktif
  if (Array.isArray(isi.favorit)) state.favorit = isi.favorit
}

export async function muatData() {
  pulihkan()
  state.memuat = true
  state.pesanGalat = ''
  try {
    const res = await fetch('/data/proyek.json')
    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data) && data.length > 0) {
        state.daftarProyek = data
      }
    }
  } catch (err) {
    console.warn('Menggunakan data bawaan:', err.message)
  } finally {
    state.memuat = false
  }
}

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai
  simpan()
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) {
    state.favorit = state.favorit.filter((favId) => favId !== id)
  } else {
    state.favorit = [...state.favorit, id]
  }
  simpan()
}

export function aturUlang() {
  localStorage.removeItem(KUNCI)
  state.kategoriAktif = 'semua'
  state.favorit = []
}

export function setTema(gelap) {
  state.temaGelap = gelap
  if (gelap) {
    document.body.classList.add('tema-gelap')
  } else {
    document.body.classList.remove('tema-gelap')
  }
}