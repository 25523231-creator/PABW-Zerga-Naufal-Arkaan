import { daftarProyek } from './app.js';

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");
const barisFilter = document.querySelector("#filter");
const formOlahraga = document.querySelector(".form-olahraga");

const inputNama = document.querySelector("#nama-kolom");
const inputWaktu = document.querySelector("#waktu");
const inputDurasi = document.querySelector("#Durasi");
const tombolSubmit = document.querySelector("#submit");

const errorNama = document.querySelector("#error-nama");
const errorWaktu = document.querySelector("#error-waktu");
const errorDurasi = document.querySelector("#error-durasi");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu-item";

  const h4 = document.createElement("h4");
  h4.textContent = proyek.judul;

  const pTahun = document.createElement("p");
  pTahun.className = "teks-tahun";
  pTahun.textContent = `Tahun: ${proyek.tahun}`;

  const pKategori = document.createElement("p");
  pKategori.className = "teks-kategori";
  pKategori.textContent = `Kategori: ${proyek.kategori}`;

  li.append(h4, pTahun, pKategori);
  return li;
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

function render(daftar) {
  if (!wadah) return;
  wadah.textContent = "";
  if (daftar.length === 0) {
    if (kosong) kosong.hidden = false;
    return;
  }
  if (kosong) kosong.hidden = true;
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

if (barisFilter) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;
    const terpilih = daftarProyek.filter(
      (proyek) => kategori === "semua" || proyek.kategori === kategori
    );

    render(terpilih);
    tandaiTombolAktif(tombol);
  });
}

function validasiForm() {
  let sah = true;

  if (!inputNama || !inputNama.value.trim()) {
    if (errorNama) errorNama.textContent = "Jenis olahraga wajib diisi.";
    if (inputNama) inputNama.setAttribute("aria-invalid", "true");
    sah = false;
  } else {
    if (errorNama) errorNama.textContent = "";
    inputNama.removeAttribute("aria-invalid");
  }

  if (!inputWaktu || !inputWaktu.value.trim()) {
    if (errorWaktu) errorWaktu.textContent = "Waktu wajib dipilih.";
    if (inputWaktu) inputWaktu.setAttribute("aria-invalid", "true");
    sah = false;
  } else {
    if (errorWaktu) errorWaktu.textContent = "";
    inputWaktu.removeAttribute("aria-invalid");
  }

  if (!inputDurasi || !inputDurasi.value.trim()) {
    if (errorDurasi) errorDurasi.textContent = "Durasi wajib diisi.";
    if (inputDurasi) inputDurasi.setAttribute("aria-invalid", "true");
    sah = false;
  } else {
    if (errorDurasi) errorDurasi.textContent = "";
    inputDurasi.removeAttribute("aria-invalid");
  }

  if (tombolSubmit) {
    tombolSubmit.disabled = !sah;
  }

  return sah;
}

[inputNama, inputWaktu, inputDurasi].forEach((kolom) => {
  if (kolom) {
    kolom.addEventListener("input", validasiForm);
  }
});

if (formOlahraga) {
  formOlahraga.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validasiForm()) {
      alert("Jadwal olahraga berhasil disimpan!");
      formOlahraga.reset();
      if (tombolSubmit) tombolSubmit.disabled = true;
    }
  });
}

render(daftarProyek);