<script setup>

</script>

<template>
  <div class="container">
    <img src="../assets/header.png" class="title" alt="Kirby and Jonathan" />
    <h1><img src="../assets/title2.png" class="title" alt="Kirby and Jonathan" /></h1>
    <h2>Invite you to their wedding</h2>
    <h2>12pm Tuesday November 1st, 2022</h2>
    <p>
      Ness Botanic Gardens, Neston Rd, Little Neston, Ness CH64 4AY
    </p>
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
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
  }
</style>
