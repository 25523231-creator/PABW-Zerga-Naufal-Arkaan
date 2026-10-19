function buatKartu(proyek) {
  const kartu = document.createElement("li");
  kartu.className = "item-proyek";
  kartu.dataset.kategori = proyek.kategori;
  const judul = document.createElement("h3");
  judul.textContent = proyek.judul;
  const tahun = document.createElement("p");
  tahun.textContent = "Tahun: " + proyek.tahun;
  const kategori = document.createElement("p");
  kategori.textContent = "Kategori: " + proyek.kategori;
  kartu.append(judul, tahun, kategori);
  return kartu;
}

export function render(daftar) {
  const wadah = document.querySelector("#daftar");
  const kosong = document.querySelector("#kosong");
  if (!wadah || !kosong) {
    console.error("Wadah daftar atau pesan kosong tidak ditemukan.");
    return;
  }
  wadah.textContent = "";
  if (daftar.length === 0) {
    kosong.textContent = "Belum ada program olahraga.";
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
    if (galat) {
      galat.hidden = true;
    }
  }
}

export function inisialisasiFilter(daftarAwal) {
  const filter = document.querySelector("#filter");
  if (!filter) {
    console.error("Elemen #filter tidak ditemukan.");
    return;
  }

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
