import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useGameStore = defineStore('game', () => {
  const currentLocalization = ref({
    key: "fr_FR",
    value: "Français",
    imgExt: "svg",
  });
  const currentDataTheme = ref({
    key: "primary",
    value: "primary",
    imgExt: "svg",
  });

  function setCurrentLocalization(newLocalization: any) {
    currentLocalization.value = newLocalization;
  };

  function setCurrentDataTheme(newDataTheme: any) {
    currentDataTheme.value = newDataTheme;
  };


  return { currentLocalization, currentDataTheme, setCurrentLocalization, setCurrentDataTheme }
})