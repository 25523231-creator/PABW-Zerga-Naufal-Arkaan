# Proyek Jadwal & Program Olahraga Saya

## Deskripsi
Proyek ini merupakan pembaruan halaman profil dan jadwal olahraga berbasis web pada Pertemuan 11 PABW. Fokus utama proyek ini adalah menerapkan arsitektur modular (ES Modules), memisahkan data keadaan (*state*) dari antarmuka (*DOM*), serta menyimpan preferensi pengguna di peramban menggunakan `localStorage` agar pilihan terakhir tidak hilang saat halaman dimuat ulang.

## Fitur Baru (Pertemuan 11)
- **Arsitektur 5 Modul ES**: Kode JavaScript dipecah menurut tanggung jawabnya masing-masing tanpa ada berkas yang memikul peran ganda.
- **Single Source of Truth (State Tunggal)**: Seluruh keadaan aplikasi dikelola dalam satu objek `state`; antarmuka murni merupakan fungsi dari keadaan (`UI = f(state)`).
- **Tombol Favorit**: Pengguna dapat menandai program olahraga yang disukai dengan tombol bintang (★ / ☆).
- **Penyimpanan Klien (`localStorage`)**: Pilihan kategori aktif dan daftar favorit tersimpan secara otomatis dan dipulihkan saat halaman dibuka kembali.
- **Tombol Atur Ulang**: Menyediakan tombol untuk membersihkan simpanan di `localStorage` dan mengembalikan antarmuka ke nilai bawaan.
- **Penanganan Simpanan Rusak & Versi Lama**: Pembacaan simpanan diamankan dengan `try/catch` dan pemeriksaan nomor versi skema (`VERSI = 2`) agar aplikasi tidak macet saat data rusak.

## Struktur Berkas
- `profil.html` — Halaman utama aplikasi dengan pemanggilan skrip `type="module"`.
- `data/proyek.json` — Berkas data program olahraga mentah berformat JSON (dari P10).
- `js/api.js` — Modul lapisan data khusus untuk memanggil `fetch()` dan memeriksa `respons.ok` (dari P10).
- `js/data.js` — Menyimpan data profil statis dan fungsi murni penyaring data (`saring`).
- `js/state.js` — Objek `state` tunggal, fungsi pengubah (*actions*), serta mekanisme simpan/muat/atur ulang `localStorage`.
- `js/dom.js` — Mengelola seluruh sentuhan antarmuka (`render(state)`, pembuatan kartu, penanda tombol aktif, dan pesan status).
- `js/events.js` — Memasang seluruh pendengar peristiwa (*event listener*) untuk filter, favorit, form tambah olahraga, dan atur ulang.
- `js/app.js` — Perakit utama yang mengimpor seluruh modul dan mengeksekusi fungsi `mulai()`.

## Batas Penyimpanan Klien
- **Yang Disimpan**: Kategori aktif dan daftar ID favorit (berupa preferensi antarmuka pengguna).
- **Yang Sengaja Tidak Disimpan**: 
  - Token autentikasi, kata sandi, atau data pribadi (karena `localStorage` tidak terenkripsi dan dapat diakses skrip peramban).
  - Data mentah proyek olahraga (data selalu diambil langsung dari server agar tidak kedaluwarsa).

## Pengujian
Pengujian dilakukan secara mandiri di peramban dan DevTools:
1. **Pemecahan Modul**: Halaman berjalan tanpa galat impor (`Failed to resolve module specifier`) di Console.
2. **Pemisahan State**: Mengganti kategori dan menambah favorit hanya memperbarui objek `state`, tidak membaca status kelas dari elemen HTML.
3. **Ketahanan Simpanan**: Mengubah filter dan menambah favorit, menutup tab peramban, lalu membukanya kembali; pilihan terakhir tetap bertahan.
4. **Uji Simpanan Rusak**: 
   - Menjalankan `localStorage.setItem("pabw-p11", "bukan-json")` di Console: halaman tetap terbuka dan data kembali ke nilai bawaan.
   - Menjalankan `localStorage.setItem("pabw-p11", "{}")`: skema versi lama terdeteksi, simpanan lama dibersihkan, dan halaman tetap normal.
5. **Tombol Atur Ulang**: Menekan tombol "Atur ulang" berhasil menghapus kunci di `localStorage` dan merender ulang antarmuka ke kondisi awal.

## Pekerjaan Rumah Persiapan Pertemuan 12 (Node.js & npm)
Pemeriksaan perkakas pada terminal lokal:
- `node -v` : `v22.14.0` (versi LTS)
- `npm -v`  : `10.9.2`

## Penggunaan AI
Saya menggunakan AI sebagai mitra diskusi untuk:
- Memahami konsep pemisahan tanggung jawab pada ES Modules (`export` dan `import`).
- Mempelajari prinsip *Single Source of Truth* serta penulisan fungsi render yang bergantung murni pada *state*.
- Merancang alur pembacaan `localStorage` yang aman dari data *corrupt* menggunakan `try/catch` dan nomor versi skema.
- Membantu menelusuri galat impor (*Failed to resolve module specifier*) dan kendala integrasi event listener.

Seluruh kode tetap saya susun, integrasikan ke dalam struktur proyek `worksheet-p11/`, serta saya uji secara mandiri melalui Live Server dan panel Developer Tools.