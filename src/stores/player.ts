import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const usePlayerStore = defineStore("player", () => {
  // base stats used when calculating the stat of player with his level.
  //only updated with some specific items/events
  const playerBaseStats = ref({
    hp: 10,
    mana: 0,
    atk: 1,
    mAtk: 1,
    def: 1,
    mDef: 1,
    agility: 1, // high agility increase dodge rate
    dexterity: 1, // high dexterity increase crit rate
    speed: 1,
    luck: 1,
  });
  const playerLvl = ref(1);
  const playerExp = ref(0);

  // player stats, equiped equipement/items are not taken into account here
  const playerCurrentRawStats = computed(() => {
    return "TODO";
  });

  function updatePlayerBaseStats(newBaseStats: any) {
    playerBaseStats.value = newBaseStats;
  }

  function playerLvlUp(quantityToAdd: number) {
    playerLvl.value += quantityToAdd;
  }

  function getPlayerStoreState() {
    return {
      playerBaseStats: playerBaseStats.value,
      playerLvl: playerLvl.value,
      playerExp: playerExp.value,
    };
  }
  function setPlayerStoreState(data: any) {
    if (data) {
      updatePlayerBaseStats(data.playerBaseStats);
      playerLvl.value = data.playerLvl;
      playerExp.value = data.playerExp;
    }
  }

  return {
    playerBaseStats,
    playerLvl,
    playerExp,
    playerCurrentRawStats,
    updatePlayerBaseStats,
    playerLvlUp,
    getPlayerStoreState,
    setPlayerStoreState,
  };
});
