# Proyek Program Olahraga

## Deskripsi
Proyek ini merupakan aplikasi web sederhana untuk menampilkan daftar program olahraga menggunakan JavaScript dan mengambil data dari file JSON. Data program yang ditampilkan meliputi program lari dan marathon 10K, gym rutin, serta komunitas sepeda.

## Fitur
- Mengambil data program olahraga dari `data/proyek.json`.
- Memeriksa status respons saat mengambil data.
- Menampilkan data program olahraga ke halaman web.
- Menampilkan keadaan memuat, data kosong, dan pesan kesalahan.
- Menyediakan fitur filter untuk daftar program olahraga.

## Struktur Berkas
- `profil.html` — halaman utama aplikasi.
- `data/proyek.json` — menyimpan data program olahraga dalam format JSON.
- `js/api.js` — mengambil data menggunakan `fetch()` dan memeriksa respons.
- `js/dom.js` — mengatur tampilan data, pesan kesalahan, keadaan memuat, dan filter.
- `js/app.js` — menghubungkan proses pengambilan data dengan tampilan halaman.

## Teknologi
- HTML
- CSS
- JavaScript
- JSON
- Fetch API
- Git dan GitHub

## Cara Menjalankan
1. Buka folder proyek di Visual Studio Code.
2. Jalankan `profil.html` menggunakan ekstensi Live Server.
3. Pastikan file `data/proyek.json` tersedia pada lokasi yang sesuai.
4. Periksa halaman web dan Console/Network di Developer Tools untuk memastikan data berhasil dimuat.

## Penggunaan AI
Saya menggunakan AI sebagai alat bantu untuk memahami materi JavaScript asynchronous, `fetch()`, `async/await`, `try/catch`, pemeriksaan `respons.ok`, serta pemisahan kode ke dalam beberapa berkas. AI juga membantu memberikan contoh dan memeriksa kemungkinan kesalahan.

Saya tetap menjalankan dan menguji kode pada proyek saya, memeriksa hasilnya melalui browser, serta menyesuaikan kode sesuai kebutuhan proyek.

## Pengujian
Pengujian dilakukan dengan memeriksa:
- Pengambilan data JSON dengan status respons yang berhasil.
- Tampilan daftar program olahraga.
- Penanganan kesalahan saat alamat data tidak benar.
- Tampilan saat data kosong.
- Pesan keadaan memuat dan pesan kesalahan.
