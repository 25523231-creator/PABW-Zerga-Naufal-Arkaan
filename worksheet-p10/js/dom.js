function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu-item";
  li.dataset.kategori = proyek.kategori;

  const h4 = document.createElement("h4");
  h4.textContent = proyek.judul;

  const pTahun = document.createElement("p");
  pTahun.textContent = "Tahun: " + proyek.tahun;

  const pKategori = document.createElement("p");
  pKategori.textContent = "Kategori: " + proyek.kategori;

  li.append(h4, pTahun, pKategori);
  return li;
}

export function render(daftar) {
  const wadah = document.querySelector("#daftar");
  const kosong = document.querySelector("#kosong");
  if (!wadah || !kosong) return;

  wadah.textContent = "";

  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;

  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

export function tampilkanGalat(pesan) {
  const galat = document.querySelector("#galat");
  if (!galat) return;
  galat.textContent = pesan;
  galat.hidden = false;
}

export function aturMemuat(status) {
  const muat = document.querySelector("#muat");
  if (muat) {
    muat.hidden = !status;
  }
  if (status) {
    const galat = document.querySelector("#galat");
    if (galat) galat.hidden = true;
  }
}

export function inisialisasiFilter(daftarAwal) {
  const filter = document.querySelector("#filter");
  if (!filter) return;

  filter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button[data-kategori]");
    if (!tombol || !filter.contains(tombol)) return;

    const kategori = tombol.dataset.kategori;
    const dataTerpilih = daftarAwal.filter((proyek) => {
      return (
        kategori === "semua" || proyek.kategori === kategori
      );
    });

    render(dataTerpilih);

    filter.querySelectorAll("button[data-kategori]").forEach((item) => {
      item.classList.toggle("aktif", item === tombol);
    });
  });
}