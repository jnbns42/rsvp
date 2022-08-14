<script setup>
  import { ref, onMounted } from 'vue'
  let loaded = ref(false);
  onMounted(() => {
    loaded.value = true;
  })
</script>

<template>

    <div v-if="loaded" class="container">
      <div>
        <img src="../assets/header.png" class="title" alt="Kirby and Jonathan" />
        <h1><img src="../assets/title2.png" class="title" alt="Kirby and Jonathan" /></h1>
        <h2>Invite you to their wedding</h2>
        <h2>12pm Tuesday November 1st, 2022</h2>
        <p class="decorative">
          Ness Botanic Gardens, Neston Rd, Little Neston, Ness CH64 4AY
        </p>
      </div>
      <nav>
        <router-link to="/rsvp">R.S.V.P</router-link>
        <router-link to="/rsvp">Info</router-link>
      </nav>
    </div>

</template>

<style scoped>
  .header {
    width:100%;
    height: 80vh;
    object-fit: contain
  }
  .title {
    width: 100%;
    max-width: 500px;
  }
  h2 {
    text-transform: uppercase;
    font-size: 1.25rem;
  }

  h2 + h2 {
    margin-bottom: 40px; 
  }
  .container {
    position: relative;
    
  }
</style>
