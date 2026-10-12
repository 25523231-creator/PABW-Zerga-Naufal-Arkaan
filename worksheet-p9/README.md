Pertemuan 9 — JavaScript DOM & Event Delegation

Repositori ini berisi pengerjaan lembar kerja Praktikum Pertemuan 9 mengenai manipulasi Document Object Model (DOM), penanganan *event* menggunakan *event delegation*, modularisasi skrip JavaScript (`import`/`export`), serta validasi form web.

## Identitas Pembuat
* **Nama:** Zerga Naufal Arkaan
* **NIM:** 25523231

## Teknologi yang Digunakan
* **HTML5:** Struktur halaman web (`profil.html`).
* **CSS3:** Desain antarmuka dan penataan tata letak (*tokens.css*, *base.css*, *layout.css*, *komponen.css*, *tema.css*, *responsif.css*).
* **JavaScript (ES Modules):** Logika data (`js/app.js`) dan manipulasi DOM (`js/dom.js`).
* **Git & GitHub:** Pengelolaan versi kode sumber.

## Struktur Berkas Utama
* `profil.html` : Berkas utama antarmuka web jadwal olahraga.
* `js/app.js`   : Berkas sumber data (menyimpan array objek `daftarProyek` yang diekspor).
* `js/dom.js`   : Berkas logika interaktif (seleksi elemen, pembuatan kartu dinamis, *event delegation* filter, dan fungsi render).

## Fitur & Implementasi
1. **Seleksi Elemen DOM:** Menggunakan `querySelector` dan `querySelectorAll` secara aman.
2. **Modularisasi Kode:** Memisahkan data dan logika interaksi menggunakan sistem modul ES6 (`export` & `import`).
3. **Penyaringan Dinamis (*Event Delegation*):** Mendengarkan kejadian klik pada elemen induk (`#filter`) untuk menyaring daftar berdasarkan kategori secara efisien tanpa membebani memori.
4. **Pencegahan XSS:** Memasukkan data teks secara aman menggunakan properti `textContent` alih-alih `innerHTML`.
5. **Validasi Form & Render Bersih:** Memastikan wadah dikosongkan sebelum render ulang (`wadah.textContent = ""`) serta menangani keadaan data kosong (`#kosong`).

## Cara Menjalankan
1. Klon repositori ini atau unduh berkasnya.
2. Buka peladen lokal (seperti *Live Server* di VS Code) atau buka berkas `profil.html` langsung di peramban web modern.