<template>
  <div class="center-both fill-both">
    <h1>{{ t("MainMenuMessage.MainMenu.title") }}</h1>

    <span>Player level {{ playerLvl }}</span>
    <button @click="playerLvlUp(1)">lvl+1</button>
    <router-link :to="{ name: 'HELLO_WORLD' }"> HelloWorld </router-link>

    <!-- <div class="column half-width-container padding-2">
      <h1>{{ t("MainMenuMessage.MainMenu.title") }}</h1>
      <button>
        {{ t("MainMenuMessage.MainMenu.resumeButton") }}
      </button>
      <button @click="save">
        {{ t("MainMenuMessage.MainMenu.saveButton") }}
      </button>
      <button @click="load">
        {{ t("MainMenuMessage.MainMenu.loadButton") }}
      </button>
      <select-change-data
        :options="mapping.game.localization"
        type="localization"
        :model-value="locale"
        :sorted="true"
        :multiple="false"
        @update:model-value="locale = $event"
      />
      <select-change-data
        :options="mapping.game.theme"
        type="theme"
        :model-value="currentTheme"
        :sorted="true"
        :multiple="false"
        @update:model-value="currentTheme = $event"
      />
    </div> -->
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { usePlayerStore } from "@stores/player";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "MainMenu",
  setup() {
    const { t } = useI18n();
    const playerStore = usePlayerStore();
    const { playerLvl } = storeToRefs(playerStore);
    const { playerLvlUp } = playerStore;
    return {
      t,
      playerLvl,
      playerLvlUp,
    };
  },
});
</script>

<!--  <style lang="scss" scoped>
// // .half-width-container {
// //   background-color: var(--primary--container-color);
// //   color: var(--primary--font-color);
// //   border-radius: var(--border-radius);
// //   border: var(--secondary--font-color) solid var(--border-size);
// // }
// //
 </style>
-->
