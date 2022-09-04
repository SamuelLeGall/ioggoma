<template>
  <div class="hello-world-main-container">
    <p>Player level {{ playerLvl }}</p>
    <router-link :to="{ name: 'MAIN_MENU' }"> MainMenu </router-link>
  </div>
</template>
<script lang="ts">
import { usePlayerStore } from "@stores/player";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  setup() {
    const playerStore = usePlayerStore();
    const { playerLvl } = storeToRefs(playerStore);
    const { playerLvlUp } = playerStore;
    return {
      playerLvl,
      playerLvlUp,
    };
  },
});
</script>
