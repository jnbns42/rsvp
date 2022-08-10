<script setup>

</script>

<template>
  <div>
    <img src="../assets/header.png" class="header" alt="" />
    <h1><img src="../assets/title.svg" class="title" alt="Kirby and Jonathan" /></h1>
    <h2>Invite you to their wedding</h2>
    <h2>12pm Tuesday November 1st, 2022</h2>
    <p>
      Ness Botanic Gardens, Neston Rd, Little Neston, Ness CH64 4AY
    </p>
  </div>
</template>

<style scoped>
  .header {
    width: 70vw;
    height: 50vh;
    object-fit: cover
  }
  .title {
    width: 80vw;
    height: 10vh;
    object-fit: cover;
  }
  h2 {
    text-transform: uppercase;
    font-size: 1.25rem;
    line-height: 1rem;
  }
  h2 + h2 {
    margin-bottom: 40px; 
  }
</style>
