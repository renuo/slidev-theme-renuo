<script setup>
import RenuoLogo from "./renuoLogo.vue";

const props = defineProps({
  showContactText: {
    type: Boolean,
    default: true
  }
});
</script>
<template>
  <div class="absolute bottom-0 left-0 flex bg-primary p-2 -m-2">
    <RenuoLogo />
    <div v-if="props.showContactText" class="flex flex-col ml-4 text-3 items-start justify-center">
      <span>www.renuo.ch</span>
      <span>hello@renuo.ch</span>
      <span>+41 44 500 55 66</span>
    </div>
  </div>
</template>
