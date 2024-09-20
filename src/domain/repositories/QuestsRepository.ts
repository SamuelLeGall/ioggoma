import { useQuestsStore } from "../database-stores/quests";
import { Result } from "../models/BasicAndTempModels";
import {
  OnGoingQuest,
  OnGoingQuests,
  QuestItem,
  Quests,
  QuestState,
} from "../models/quests/QuestsModels";

export class QuestRepository {
  private store;

  constructor(store = useQuestsStore()) {
    this.store = store;
  }

  /** Getters **/
  getOnGoingQuests(): OnGoingQuests {
    return this.store.onGoingQuests;
  }

  getCompletedQuestsKeys(): string[] {
    return this.store.completedQuests;
  }

  getAllQuests(): Quests {
    return this.store.listQuests;
  }

  getQuestById(questId: string): Result<QuestItem> {
    const listQuests = this.getAllQuests();
    const selectedQuest = listQuests.find((quest: QuestItem) => {
      quest.id === questId;
    });
    if (!selectedQuest) {
      return [null, new Error("Quest not found")];
    }

    return [selectedQuest, null];
  }

  getOnGoingQuestById(questId: string): Result<OnGoingQuest> {
    const listQuests = this.getOnGoingQuests();
    const selectedQuest = listQuests.find((quest: OnGoingQuest) => {
      quest.id === questId;
    });

    if (!selectedQuest) {
      return [null, new Error("OnGoingQuest not found")];
    }

    return [selectedQuest, null];
  }

  getOnGoingQuestIndexById(questId: string): Result<number> {
    const listQuests = this.getOnGoingQuests();
    const selectedQuestIndex = listQuests.findIndex((quest: OnGoingQuest) => {
      quest.id === questId;
    });

    if (selectedQuestIndex === -1) {
      return [null, new Error("OnGoingQuest not found")];
    }

    return [selectedQuestIndex, null];
  }

  /** Technical Actions - no actual high level user-action at this level **/
  removeOnGoingQuestById(questId: string): Result<true> {
    const [selectedQuestIndex, error] = this.getOnGoingQuestIndexById(questId);

    if (error) {
      return [null, new Error("Quest not found")];
    }

    this.store.onGoingQuests.splice(selectedQuestIndex, 1);
    return [true, null];
  }

  addOnGoingQuestById(questId: string): Result<true> {
    const [_, errorAllQuest] = this.getQuestById(questId);
    const [onGoingQuest, errorOngoingQuest] = this.getOnGoingQuestById(questId);

    if (errorAllQuest || errorOngoingQuest) {
      return [null, new Error("Quest not found or already added")];
    }

    this.store.onGoingQuests.push(onGoingQuest);
    return [true, null];
  }

  addCompletedQuestById(questId: string): Result<true> {
    // Example logic for adding a completed quest
    if (!this.getCompletedQuestsKeys().includes(questId)) {
      return [null, new Error("Quest already completed")];
    }

    this.store.completedQuests.push(questId);
    return [true, null];
  }

  getQuestsStoreState(): QuestState {
    return {
      onGoingQuests: this.getOnGoingQuests(),
      completedQuests: this.getCompletedQuestsKeys(),
      listQuests: this.getAllQuests(),
    };
  }

  setQuestsStoreState(data: QuestState) {
    this.store.onGoingQuests = data.onGoingQuests;
    this.store.completedQuests = data.completedQuests;
    this.store.listQuests = data.listQuests;
  }
}
