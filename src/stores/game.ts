import { defineStore } from "pinia";
import { Ref, ref } from "vue";
interface Option {
  key: string;
  value: string;
}
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

  return {
    currentLocalization,
    currentDataTheme,
    setCurrentLocalization,
    setCurrentDataTheme,
  };
});
