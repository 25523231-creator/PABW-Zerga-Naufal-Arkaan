<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'

const daftarTampil = computed(() => {
  return saring(state.daftarProyek, state.kategoriAktif)
})
</script>

<template>
  <section id="bagian-1" class="kartu sorotan">
    <h2>Jadwal Olahraga</h2>
    <p v-if="state.memuat" id="muat">Memuat data olahraga...</p>
    <p v-if="state.pesanGalat" id="galat" role="alert">{{ state.pesanGalat }}</p>

    <div v-if="!state.memuat && !state.pesanGalat" class="table-wrap">
      <table>
        <caption>Jadwal Olahraga Mingguan</caption>
        <thead>
          <tr>
            <th scope="col">Jenis olahraga</th>
            <th scope="col">Waktu</th>
            <th scope="col">Durasi</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody id="jadwal-body">
          <tr
            v-for="item in daftarTampil"
            :key="item.id || item.nama"
            :data-kategori="item.kategori"
          >
            <td>{{ item.nama }}</td>
            <td>{{ item.waktu }}</td>
            <td>{{ item.durasi }}</td>
            <td>
              <button
                type="button"
                class="tombol-favorit"
                @click="tambahFavorit(item.id || item.nama)"
              >
                {{ state.favorit.includes(item.id || item.nama) ? '★ Favorit' : '☆ Tambah' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-if="daftarTampil.length === 0" id="kosong" class="pesan-kosong">
        Belum ada program olahraga untuk kategori ini.
      </p>
    </div>
  </section>
</template>