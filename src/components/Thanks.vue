<script setup>

</script>

<template>
  <Transition>
    <div class="details">
        <nav>
            <router-link to="/">Go to Home</router-link>
            <router-link to="/info">Info</router-link>
        </nav>
        <div class="container">
            <h1>You've R.S.V.P'd!</h1>
            <p>We look forward to celebrating with you!</p>
        </div>
    </div>
  </Transition>

</template>

<style scoped>
    .button {
      display: inline-block;
      padding: 20px;
      background-color: #541f1a;
      color: white;
      text-decoration: none;
      transition: 0.35s ease;
      font-family: 'GNUTypewriter', Helvetica, Arial, sans-serif;
      margin-right: 20px;
    }
    .button:hover {
      opacity: 0.75;
    }

h1, h2 {
      position: relative;
      display: inline-block;
    }
    h2 {
      margin-top: 80px;
    }
    h1:before, h2:before {
      content: ' ';
      display: block;
      background-image: url('../assets/t.webp');
      background-repeat: no-repeat; 
      height: 200px;
      width: 200px;
      position: absolute;
      left: -60px;
      top: -35px;
      opacity: 0.25;
    }
    .colour-blocks {
      display: flex;
      gap: 10px;
      position: relative;
      z-index: 100;
    }

    .colour-blocks > div {
      background: var(--bg);
      border-radius: 50px;
      height: 50px;
      width: 50px;
    }

    .container {
      max-width: 700px;
      margin: 70px auto 0;
    }
    form p,
    label {
        font-family: Arial, Helvetica, sans-serif;
        
    }
    
    select, input[type=text], input[type=email], textarea {
        display: block;
        margin: 0 auto;
        background-color: white;
        color: black;
        padding: 10px;
    }
    .v-enter-active,
    .v-leave-active {
        transition: all 1.75s ease;
    }
    .v-enter-from,
    .v-leave-to {
        opacity: 0;
        transform: translateY(20px);
    }
</style>
