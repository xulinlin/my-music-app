<template>
  <div id="app">
    <v-footer></v-footer>
    <router-view />
  </div>
</template>

<script>
import VFooter from "@/components/VFooter/VFooter.vue";

export default {
  components: {
    VFooter
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
