<template>
  <div class="display-flex flex-direction-column flex-center gap-1em">
    <h1>{{ t("MainMenuMessage.MainMenu.title") }}</h1>
    <p>Player level {{ playerLvl }}</p>
    <button @click="playerLvlUp(1)">lvl + 1</button>
    <router-link :to="{ name: 'HELLO_WORLD' }"> HelloWorld </router-link>
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
      :sorted="true"
      :multiple="false"
      :model-value="currentLocalization"
      @update:model-value="currentLocalization = $event"
    />
    <select-change-data
      :options="mapping.game.theme"
      type="theme"
      :sorted="true"
      :multiple="false"
      :model-value="currentDataTheme"
      @update:model-value="currentDataTheme = $event"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import { storeToRefs } from "pinia";
import { usePlayerStore } from "@stores/player";
import { save, load } from "@utils/SaveSystem";
import { useGameStore } from "@stores/game";
import mapping from "@config/mapping.json";
import SelectChangeData from "@components/UIElements/inputs/Special/SelectChangeData/SelectChangeData.vue";

export default defineComponent({
  name: "MainMenu",
  components: {
    SelectChangeData,
  },
  setup() {
    const { t } = useI18n();
    const playerStore = usePlayerStore();
    const { playerLvl } = storeToRefs(playerStore);
    const { playerLvlUp } = playerStore;
    const modelValueTest = ref([]);

    const gameStore = useGameStore();
    const { currentLocalization, currentDataTheme } = storeToRefs(gameStore);

    return {
      t,
      playerLvl,
      currentLocalization,
      currentDataTheme,
      mapping,
      modelValueTest,
      playerLvlUp,
      save,
      load,
    };
  },
});
</script>
