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
    <div>
        <nav>
            <router-link to="/">Go to Home</router-link>
            <router-link to="/rsvp">R.S.V.P</router-link>
        </nav>
        <div v-if="loaded" class="container">
            <p>Test</p>
        </div>
    </div>
  </Transition>

</template>

<style scoped>
label {
    margin: 0 0 30px;
    display: block;
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
