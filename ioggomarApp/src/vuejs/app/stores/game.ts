import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { Option } from "src/models/game/basic";
export const useGameStore = defineStore("game", () => {
  const currentLocalization: Ref<Option> = ref({
    key: "fr_FR",
    value: "Français",
  });
  const currentDataTheme: Ref<Option> = ref({
    key: "primary",
    value: "primary",
  });

  function setCurrentLocalization(newLocalization: Option) {
    currentLocalization.value = newLocalization;
  }

  function setCurrentDataTheme(newDataTheme: Option) {
    currentDataTheme.value = newDataTheme;
  }

  function getGameStoreState() {
    return {
      currentLocalization: currentLocalization.value,
      currentDataTheme: currentDataTheme.value,
    };
  }
  function setGameStoreState(data: any) {
    if (data) {
      setCurrentLocalization(data.currentLocalization);
      setCurrentDataTheme(data.currentDataTheme);
    }
  }
  return {
    currentLocalization,
    currentDataTheme,
    setCurrentLocalization,
    setCurrentDataTheme,
    getGameStoreState,
    setGameStoreState,
  };
});
