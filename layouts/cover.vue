<script setup>
import SlideBackground from "../components/slideBackground.vue";
import ContactInfo from "../components/renuoContactInfo.vue";
import AddressCard from "../components/renuoContactCard.vue";

const props = defineProps({
  showContactText: {
    type: Boolean,
    default: true
  },
  website: String,
  email: String,
  phone: String,
  showAddressText: {
    type: Boolean,
    default: true
  },
  addressHeader: String,
  company: String,
  street: String,
  zip: String,
  city: String
});
</script>
<template>
  <div class="absolute p-5 h-full">
    <SlideBackground class="top-0" />
  </div>
  <div id="cover-slide" class="slidev-layout cover bg-primary">
    <div class="relative w-full text-white">
      <AddressCard v-bind="props" />
      <ContactInfo v-bind="props" />
      <div class="slot">
        <slot />
      </div>
    </div>
  </div>
</template>
