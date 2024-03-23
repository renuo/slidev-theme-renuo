<script setup>
const props = defineProps({
  showAddressText: {
    type: Boolean,
    default: true
  },
  addressHeader: {
    type: String,
    default: 'Renuo'
  },
  company: {
    type: String,
    default: 'Renuo AG'
  },
  street: {
    type: String,
    default: 'Industriestrasse 44'
  },
  zip: {
    type: String,
    default: '8304'
  },
  city: {
    type: String,
    default: 'Wallisellen'
  }
})
</script>
<template>
  <div class="absolute right-0 text-right bg-primary p-2 -m-2">
    <h2 class="mb-2">{{addressHeader}}</h2>
    <div v-if="props.showAddressText" class="flex flex-col text-3">
      <span>{{company}}</span>
      <span>{{street}}</span>
      <span>{{zip}} {{city}}</span>
    </div>
  </div>
</template>
