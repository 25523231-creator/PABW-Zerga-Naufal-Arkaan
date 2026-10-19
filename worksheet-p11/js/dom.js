import { saring } from './data.js';

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");
const muat = document.querySelector("#muat");
const galatEl = document.querySelector("#galat");

export function aturMemuat(status) {
  if (muat) muat.hidden = !status;
}

export function tampilkanGalat(pesan) {
  if (galatEl) {
    galatEl.textContent = pesan;
    galatEl.hidden = false;
  }
}

export function buatKartu(proyek, favorit = []) {
  const li = document.createElement("li");
  li.className = "kartu";

  const isi = document.createElement("div");
  isi.className = "kartu__isi";

  const h4 = document.createElement("h4");
  h4.textContent = proyek.judul;

  const p = document.createElement("p");
  p.textContent = `Kategori: ${proyek.kategori} · Tahun: ${proyek.tahun}`;

  const tombol = document.createElement("button");
  tombol.className = "favorit";
  tombol.type = "button";
  tombol.dataset.id = proyek.id;
  tombol.textContent = favorit.includes(proyek.id) ? "★" : "☆";
  tombol.style.cursor = "pointer";
  tombol.style.fontSize = "1.2rem";
  tombol.style.background = "none";
  tombol.style.border = "none";
  tombol.style.color = "#f59e0b";
  tombol.style.marginLeft = "8px";

  isi.append(h4, p, tombol);
  li.append(isi);
  return li;
}

export function tandaiTombolAktif(kategoriAktif) {
  const tombolKategori = document.querySelectorAll("#filter [data-kategori]");
  tombolKategori.forEach((tombol) => {
    if (tombol.dataset.kategori === kategoriAktif) {
      tombol.classList.add("aktif");
    } else {
      tombol.classList.remove("aktif");
    }
  });
}

export function render(state) {
  if (!wadah) return;
  if (galatEl) galatEl.hidden = true;

  wadah.textContent = "";

  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  if (tampil.length === 0) {
    if (kosong) kosong.hidden = false;
  } else {
    if (kosong) kosong.hidden = true;
    tampil.forEach((item) => {
      wadah.append(buatKartu(item, state.favorit));
    });
  }
  tandaiTombolAktif(state.kategoriAktif);
}

export function tambahBarisJadwal(jenis, waktu, durasi) {
  const tbody = document.querySelector("#jadwal-body");
  if (!tbody) return;

  const tr = document.createElement("tr");
  tr.dataset.kategori = "kebugaran";

  const tdJenis = document.createElement("td");
  tdJenis.textContent = jenis;

  const tdWaktu = document.createElement("td");
  tdWaktu.textContent = waktu;

  const tdDurasi = document.createElement("td");
  tdDurasi.textContent = durasi;

  tr.append(tdJenis, tdWaktu, tdDurasi);
  tbody.appendChild(tr);
}