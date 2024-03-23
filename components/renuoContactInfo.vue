<script setup>
import RenuoLogo from "./renuoLogo.vue";

const props = defineProps({
  showContactText: {
    type: Boolean,
    default: true
  },
  website: {
    type: String,
    default: 'www.renuo.ch'
  },
  email: {
    type: String,
    default: 'hello@renuo.ch',
  },
  phone: {
    type: String,
    default: '+41 44 500 55 66'
  }
});
</script>
<template>
  <div class="absolute bottom-0 left-0 flex bg-primary p-2 -m-2">
    <RenuoLogo />
    <div v-if="props.showContactText" class="flex flex-col ml-4 text-3 items-start justify-center">
      <span>{{website}}</span>
      <span>{{email}}</span>
      <span>{{phone}}</span>
    </div>
  </div>
</template>
