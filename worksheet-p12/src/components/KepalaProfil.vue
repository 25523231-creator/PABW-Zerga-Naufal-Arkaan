<script setup>
defineProps({
  profil: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <aside class="sisi">
    <h2>Menu</h2>
    <nav aria-label="Menu navigasi">
      <ul>
        <li><a href="#bagian-1">Jadwal Olahraga</a></li>
        <li><a href="#bagian-2">Tambah Olahraga</a></li>
        <li><a href="#bagian-3">Target Olahraga</a></li>
      </ul>
    </nav>
  </aside>
</template>