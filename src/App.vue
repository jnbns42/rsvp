<script setup>

</script>

<template>
  <div class="appcontainer">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.appcontainer {
  width: 100%;

}
.fade-enter-active,.fade-leave-active {  
  transition: all 0.5s ease;
}
.fade-enter-from,.fade-leave-to {  
  opacity: 0;
  transform: translateY(15px);
}
</style>
