<script setup>
const props = defineProps({
  showAddressText: {
    type: Boolean,
    default: true
  }
})
</script>
<template>
  <div class="absolute right-0 text-right bg-primary p-2 -m-2">
    <h2 class="mb-2">Renuo</h2>
    <div v-if="props.showAddressText" class="flex flex-col text-3">
      <span>Renuo AG</span>
      <span>Industriestrasse 44</span>
      <span>8304 Walisellen</span>
    </div>
  </div>
</template>
