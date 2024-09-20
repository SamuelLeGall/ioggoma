import { defineStore } from "pinia";
import { ref } from "vue";
import { OnGoingQuests, Quests } from "../models/quests/QuestsModels";

// Use QuestRepository to manipulate the data
export const useQuestsStore = defineStore("quests", () => {
  const onGoingQuests = ref<OnGoingQuests>([
    {
      id: "loc1_quest002",
      data: [
        { idItem: "loot_slime_001", currentQuantity: 2, goal: 5 },
        { idItem: "loot_goblin_001", currentQuantity: 1, goal: 3 },
      ],
    },
  ]);

  // player can complete some quests multiple times.
  const completedQuests = ref<string[]>(["loc1_quest001"]);
  const listQuests = ref<Quests>([
    {
      id: "loc1_quest001",
      locationId: "loc1_tuto",
      typeQuest: "lootOnly",
    },
    {
      id: "loc1_quest002",
      locationId: "loc1_tavern",
      typeQuest: "lootOnly",
    },
  ]);

  return {
    listQuests,
    onGoingQuests,
    completedQuests,
  };
});
