import { useGameStore } from "@stores/game";
import { usePlayerStore } from "@stores/player";
import { useQuestsStore } from "@stores/quests";

const gameStore = useGameStore();
const playerStore = usePlayerStore();
const questsStore = useQuestsStore();
const { getGameStoreState, setGameStoreState } = gameStore;
const { getPlayerStoreState, setPlayerStoreState } = playerStore;
const { getQuestsStoreState, setQuestsStoreState } = questsStore;

// METHODS
export const save = async () => {
  const saveData = {
    GameStore: getGameStoreState(),
    PlayerStore: getPlayerStoreState(),
    QuestsStore: getQuestsStoreState(),
  };
  const isSaved = await window.electronAPI.saveGame(JSON.stringify(saveData));
  if (isSaved) {
    console.log("saved");
  }
};
export const load = async () => {
  const gameData = await window.electronAPI.loadGame();
  if (gameData) {
    setGameStoreState(gameData.GameStore);
    setPlayerStoreState(gameData.PlayerStore);
    setQuestsStoreState(gameData.QuestsStore);
    console.log("loaded");
  }
};
