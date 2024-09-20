import { useGameStore } from "../database-stores/game";
import { OptionConfig } from "../models/BasicAndTempModels";
import { MainSettings } from "../models/game/SettingsModels";

export class GameRepository {
  private store;

  constructor(store = useGameStore()) {
    this.store = store;
  }
  /** Getters **/
  getLocalizationText(): string {
    return this.store.currentLocalization.value;
  }

  getLocalizationKey(): string {
    return this.store.currentLocalization.key;
  }

  getLocalization(): OptionConfig {
    return {
      key: this.getLocalizationKey(),
      value: this.getLocalizationText(),
    };
  }

  getDataThemeText(): string {
    return this.store.currentDataTheme.value;
  }

  getDataThemeKey(): string {
    return this.store.currentDataTheme.key;
  }

  getDataTheme(): OptionConfig {
    return {
      key: this.getDataThemeKey(),
      value: this.getDataThemeText(),
    };
  }

  /** Technical Actions - no actual high level user-action at this level **/
  setCurrentLocalization(newLocalization: OptionConfig): void {
    this.store.currentLocalization = newLocalization;
  }

  setCurrentDataTheme(newDataTheme: OptionConfig): void {
    this.store.currentDataTheme = newDataTheme;
  }

  getGameStoreState(): MainSettings {
    return {
      currentLocalization: this.getLocalization(),
      currentDataTheme: this.getDataTheme(),
    };
  }
  setGameStoreState(data: MainSettings): void {
    this.setCurrentLocalization(data.currentLocalization);
    this.setCurrentDataTheme(data.currentDataTheme);
  }
}
