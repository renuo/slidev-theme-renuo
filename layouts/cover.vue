<template>
  <div class="absolute p-5 h-full">
    <img src="/images/cover.svg" class="h-full object-fit-cover -scale-y-100">
  </div>
  <div id="cover-slide" class="slidev-layout cover bg-primary">
    <div class="relative w-full text-white">
      <div class="absolute right-0 text-right">
        <h2 class="mb-2">Renuo</h2>
        <div class="flex flex-col text-4">
          <span>Renuo AG</span>
          <span>Industriestrasse 44</span>
          <span>8304 Walisellen</span>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 flex">
        <img src="/images/logo.svg" alt="Renuo" class="self-stretch object-cover h-19" />
        <div class="flex flex-col ml-4 items-start justify-center">
          <span>www.renuo.ch</span>
          <span>hello@renuo.ch</span>
          <span>+41 44 500 55 66</span>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>
<script setup>
</script>
