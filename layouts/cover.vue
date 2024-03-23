<script setup>
import SlideBackground from "../components/slideBackground.vue";
import ContactInfo from "../components/renuoContactInfo.vue";
import AddressCard from "../components/renuoContactCard.vue";

const props = defineProps({
  showContactText: {
    type: Boolean,
    default: true
  },
  showAddressText: {
    type: Boolean,
    default: true
  }
});
</script>
<template>
  <div class="absolute p-5 h-full">
    <SlideBackground class="top-0" />
  </div>
  <div id="cover-slide" class="slidev-layout cover bg-primary">
    <div class="relative w-full text-white">
      <AddressCard :show-address-text="props.showAddressText" />
      <ContactInfo :show-contact-text="props.showContactText" />
      <div class="slot">
        <slot />
      </div>
    </div>
  </div>
</template>
