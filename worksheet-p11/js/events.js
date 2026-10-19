import { pilihKategori, tambahFavorit, aturUlang } from './state.js';
import { tambahBarisJadwal } from './dom.js';

export function pasangPendengar() {
  const wadahFilter = document.querySelector("#filter");
  if (wadahFilter) {
    wadahFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("[data-kategori]");
      if (!tombol) return;
      pilihKategori(tombol.dataset.kategori);
    });
  }

  const wadahDaftar = document.querySelector("#daftar");
  if (wadahDaftar) {
    wadahDaftar.addEventListener("click", (event) => {
      const tombol = event.target.closest(".favorit");
      if (!tombol) return;
      tambahFavorit(Number(tombol.dataset.id));
    });
  }

  const tombolAturUlang = document.querySelector("#atur-ulang");
  if (tombolAturUlang) {
    tombolAturUlang.addEventListener("click", () => {
      aturUlang();
    });
  }
  const formOlahraga = document.querySelector(".form-olahraga");
  if (formOlahraga) {
    formOlahraga.addEventListener("submit", (event) => {
      event.preventDefault();

      const inputJenis = document.querySelector("#nama-kolom");
      const inputWaktu = document.querySelector("#waktu");
      const inputDurasi = document.querySelector("#Durasi");

      const jenis = inputJenis.value.trim();
      const waktu = inputWaktu.value.trim();
      const durasi = inputDurasi.value.trim();

      if (!jenis || !waktu || !durasi) {
        alert("Harap lengkapi semua data formulir!");
        return;
      }
      tambahBarisJadwal(jenis, waktu, durasi);
      formOlahraga.reset();
    });
  }
}