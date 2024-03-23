<script setup>
import RenuoLogo from "../components/renuoLogo.vue";
</script>
<template>
  <div class="slidev-layout">
    <div class="relative w-full h-full">
      <div class="absolute bottom-0 right-0 flex text-primary">
        <RenuoLogo />
      </div>
      <slot />
    </div>
  </div>
</template>
