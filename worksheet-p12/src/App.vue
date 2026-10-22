<script setup>
import { onMounted } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { profil } from './data.js'
import { state, muatData, setTema } from './state.js'

onMounted(() => {
  muatData()
})
</script>

<template>
  <div class="page">
    <header>
      <div class="header-baris">
        <div>
          <input
            type="checkbox"
            id="tema"
            class="pengalih-tema"
            :checked="state.temaGelap"
            @change="setTema($event.target.checked)"
          />
          <label for="tema" class="tombol-tema">Tema gelap</label>
          <h1>Jadwal Olahraga Saya</h1>
        </div>
        <nav aria-label="Navigasi utama">
          <ul class="navbar">
            <li><a href="#bagian-1">Jadwal Olahraga</a></li>
            <li><a href="#bagian-2">Tambah Olahraga</a></li>
            <li><a href="#bagian-3">Target Olahraga</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="isi">
      <KepalaProfil :profil="profil" />

      <div class="konten-kanan">
        <TombolFilter />

        <div class="galeri">
          <DaftarProyek />
          <FormKontak />
        </div>
      </div>
    </main>
    <footer>
      <p>{{ profil.nama }} · {{ profil.nim }} · 2026</p>
    </footer>
  </div>
</template>