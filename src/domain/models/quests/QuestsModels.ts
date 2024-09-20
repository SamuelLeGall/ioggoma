// Interface for an individual ongoing quest
export interface QuestItemProgression {
  idItem: string;
  currentQuantity: number;
  goal: number;
}

// Interface for the ongoing quests data structure
export interface OnGoingQuest {
  id: string;
  data: QuestItemProgression[];
}
export type OnGoingQuests = OnGoingQuest[];

// Interface for a single quest in the list
export interface QuestItem {
  id: string;
  locationId: string;
  typeQuest: string;
}
export type Quests = QuestItem[];

// Interface for the overall quest state
export interface QuestState {
  onGoingQuests: OnGoingQuests;
  completedQuests: string[]; // Array of quest IDs
  listQuests: Quests;
}
