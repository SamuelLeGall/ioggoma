import { defineStore } from "pinia";
import { ref } from "vue";

export const useQuestsStore = defineStore("quests", () => {
  const onGoingQuests = ref({
    id: "loc1_quest002",
    data: [
      { idItem: "loot_slime_001", currentQuantity: 2, goal: 5 },
      { idItem: "loot_goblin_001", currentQuantity: 1, goal: 3 },
    ],
  });
  // player can complete some quests multiple times.
  const completedQuests = ref(["loc1_quest001"]);
  const listQuests = ref({
    loc1_quest001: {
      id: "loc1_quest001",
      locationId: "loc1_tuto",
      typeQuest: "lootOnly",
    },
    loc1_quest002: {
      id: "loc1_quest002",
      locationId: "loc1_tavern",
      typeQuest: "lootOnly",
    },
  });

  function getQuestById(questId: string) {
    // TODO faire dev
    console.log(questId);

    return "TODO";
  }

  function removeOnGoingQuestById(questId: string) {
    try {
      // TODO faire dev
      console.log(questId);
      return true;
    } catch {
      return false;
    }
  }
  function addOnGoingQuestById(questId: string) {
    try {
      // TODO faire dev
      console.log(questId);
      return true;
    } catch {
      return false;
    }
  }
  function addCompletedQuestById(questId: string) {
    try {
      // TODO faire dev
      console.log(questId);
      return true;
    } catch {
      return false;
    }
  }
  function saveQuestAsCompleted(questId: string) {
    try {
      removeOnGoingQuestById(questId);
      addCompletedQuestById(questId);
      return true;
    } catch {
      return false;
    }
  }
  function saveQuestAsOnGoing(questId: string) {
    try {
      addOnGoingQuestById(questId);
      return true;
    } catch {
      return false;
    }
  }

  function getQuestsStoreState() {
    return {
      onGoingQuests: onGoingQuests.value,
      completedQuests: completedQuests.value,
      listQuests: listQuests.value,
    };
  }
  function setQuestsStoreState(data: any) {
    if (data) {
      onGoingQuests.value = data.onGoingQuests;
      completedQuests.value = data.completedQuests;
      listQuests.value = data.listQuests;
    }
  }
  return {
    listQuests,
    onGoingQuests,
    completedQuests,
    saveQuestAsOnGoing,
    saveQuestAsCompleted,
    getQuestById,
    getQuestsStoreState,
    setQuestsStoreState,
  };
});
