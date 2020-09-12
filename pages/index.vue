<template>
  <div class="flex flex-col h-full">
    <the-menu></the-menu>
    <top-doctors></top-doctors>
  </div>
</template>

<script>
import TheMenu from "~/components/the-menu";
import TopDoctors from "~/components/top-doctors";

export default {
  components: {
    TheMenu,
    TopDoctors
  }
};
</script>

<style></style>
