<script setup>
  import { ref, onMounted, reactive } from 'vue'
  let loaded = ref(false);
    
  const partnerName = ref('');
  const childrenName = ref('');

    const state = reactive({
        partnerName: partnerName.value,
        childrenName: childrenName.value
    })

  onMounted(() => {
    loaded.value = true;
  })



</script>

<template>
  <Transition>
    <div class="details">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/rsvp">R.S.V.P</router-link>
        </nav>
        <div v-if="loaded" class="container">
            <h1><img src="../assets/finer.png" alt="The Finer Details..."/></h1>
            <p class="decorative">Feel free to arrive at the venue any time after 11:30am as pre-ceremony refreshments will be served. The entrance you will need is the one for the rock garden, not the visitor centre *if you park at the visitor centre, you will have a fair walk down to the ceremony space!*.</p>
            <p class="decorative">This isn't an all day event - following the ceremony, we will be heading up to the Hulme Room at the venue and sharing lunch, speeches and some quality time with you - our favourite people. The whole day will be finished by 4:30pm.</p>
            
            <p class="decorative">If you need details on how to get to the venue, please see the below links</p>
            <a class="button" href="https://www.liverpool.ac.uk/ness-gardens/visit,us/getting-here/" target="_blank">Ness Gardens</a>
            <a class="button" href="https://www.google.com/maps/dir//Ness+Botanic+Gardens+Neston+Rd+Little+Neston+Ness+CH64+4AY/@53.2723907,-3.0430234,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x487ad93e02335a09:0x4bd4bc3c0252fec2!2m2!1d-3.0430234!2d53.2723907" target="_blank">Google Maps</a>
            
            <h2><img src="../assets/dresscode.png" alt="The Finer Details..."/></h2>
            <p class="decorative">As this is a small affair, we would really like to get our photos looking as special as possible. Therefore, we please ask that everyone incorporates part of our colour scheme in to their outfit.</p>
            <div class="colour-blocks">
              <div style="--bg:rgb(126, 0, 35);"></div>
              <div style="--bg:rgb(152, 79, 24);"></div>
              <div style="--bg:rgb(28, 45, 9);"></div>
              <div style="--bg:rgb(201, 74, 18);"></div>
              <div style="--bg:rgb(145, 15, 0);"></div>
            </div>

            <h2><img src="../assets/gifts.png" alt="The Finer Details..."/></h2>
            <p class="decorative">As a couple, we have everything we need so please don't feel obliged to buy us a gift. However, if you would like to give us something, a contribution towards our honeymoon would be most welcome.</p>
        </div>
    </div>
  </Transition>

</template>

<style scoped>
    nav {
        margin: 0 0 50px;
    }
    .button {
      display: inline-block;
      padding: 13px;
      background-color: #541f1a;
      color: white;
      text-decoration: none;
      transition: 0.35s ease;
      font-family: 'GNUTypewriter', Helvetica, Arial, sans-serif;
      margin-right: 20px;
      margin-bottom: 20px;
    }
    .button:hover {
      opacity: 0.75;
    }
    .details {
      text-align: left;

    }
    h1, h2 {
      position: relative;
    }
    img {
      max-width: 100%;
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
      flex-wrap: wrap;
    }

    .colour-blocks > div {
      background: var(--bg);
      border-radius: 70px;
      height: 70px;
      width: 70px;
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
