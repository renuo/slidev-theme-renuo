<template>
  <div class="absolute p-5 h-full">
    <SlideBackground class="top-0" />
  </div>
  <div id="cover-slide" class="slidev-layout cover bg-primary">
    <div class="relative w-full text-white">
      <RenuoContactCard />
      <RenuoContactInfo />
      <div class="slot">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import SlideBackground from "../components/slideBackground.vue";
import RenuoContactInfo from "../components/renuoContactInfo.vue";
import RenuoContactCard from "../components/renuoContactCard.vue";

export default {
  components: {RenuoContactCard, RenuoContactInfo, SlideBackground}
}
</script>
