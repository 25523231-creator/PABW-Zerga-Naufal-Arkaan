<script setup>
import { ref } from 'vue'
import { state } from '../state.js'

const nama = ref('')
const waktu = ref('')
const durasi = ref('')

function tambahJadwal() {
  if (!nama.value || !waktu.value || !durasi.value) return
  
  state.daftarProyek.push({
    nama: nama.value,
    waktu: waktu.value,
    durasi: durasi.value,
    kategori: 'kebugaran'
  })
  
  nama.value = ''
  waktu.value = ''
  durasi.value = ''
}
</script>

<template>
  <section id="bagian-2" class="kartu">
    <h2>Tambah Olahraga</h2>
    <form class="form-olahraga" @submit.prevent="tambahJadwal">
      <div class="form-kolom">
        <label for="nama-kolom">Jenis olahraga</label>
        <input type="text" id="nama-kolom" v-model="nama" required />
      </div>
      <div class="form-kolom">
        <label for="waktu">Waktu</label>
        <input type="time" id="waktu" v-model="waktu" required />
      </div>
      <div class="form-kolom">
        <label for="durasi">Durasi</label>
        <input type="text" id="durasi" v-model="durasi" required />
      </div>
      <button id="submit" type="submit">Simpan</button>
    </form>
  </section>

  <section id="bagian-3" class="kartu">
    <h2>Target Olahraga</h2>
    <div class="kartu__isi">
      <p>Ingin menjadi atlet olahraga profesional dan menjaga kebugaran tubuh.</p>
    </div>
  </section>

  <figure class="kartu kartu-foto">
    <img src="/poto.png" alt="Contoh kegiatan olahraga lari pagi" loading="lazy" />
    <figcaption class="kartu__isi">Contoh kegiatan olahraga lari pagi</figcaption>
  </figure>
</template>