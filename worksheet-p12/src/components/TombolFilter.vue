<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'

const daftarKategori = ['semua', 'lari', 'kebugaran', 'sepeda']

function tesKlik(kat) {
  alert('Tombol ditekan: ' + kat)
  pilihKategori(kat)
}
</script>

<template>
  <div 
    id="filter" 
    class="baris-filter" 
    style="position: relative; z-index: 9999; pointer-events: auto !important;"
  >
    <button
      v-for="kat in daftarKategori"
      :key="kat"
      type="button"
      :class="{ aktif: state.kategoriAktif === kat }"
      @click="tesKlik(kat)"
      style="cursor: pointer; pointer-events: auto !important; position: relative; z-index: 10000;"
    >
      {{ kat.charAt(0).toUpperCase() + kat.slice(1) }}
    </button>
    <button 
      type="button" 
      id="atur-ulang" 
      @click="() => { alert('Atur ulang ditekan'); aturUlang(); }"
      style="cursor: pointer; pointer-events: auto !important; position: relative; z-index: 10000;"
    >
      Atur ulang
    </button>
  </div>
</template>