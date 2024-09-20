import { GameRepository } from "../repositories/GameRepository";
import { OptionConfig } from "../models/BasicAndTempModels";
import { MainSettings } from "../models/game/SettingsModels";
export class GameService {
  private repository: GameRepository;

  constructor(repository = new GameRepository()) {
    this.repository = repository;
  }
  /** High-level Actions **/
  changeLocalization(newLocalization: OptionConfig) {
    // Perform any additional logic before setting the new localization
    this.repository.setCurrentLocalization(newLocalization);
  }

  changeTheme(newTheme: OptionConfig) {
    // Perform any additional logic before setting the new theme
    this.repository.setCurrentDataTheme(newTheme);
  }

  getCurrentLocalization(): OptionConfig {
    return this.repository.getLocalization();
  }

  getCurrentTheme(): OptionConfig {
    return this.repository.getDataTheme();
  }

  initializeGameState(savedState: MainSettings) {
    if (savedState) {
      this.repository.setGameStoreState(savedState);
    } else {
      // Optionally set default state if no saved state exists
      this.repository.setCurrentLocalization({
        key: "en_US",
        value: "English",
      });
      this.repository.setCurrentDataTheme({ key: "light", value: "Light" });
    }
  }

  exportGameState(): MainSettings {
    return this.repository.getGameStoreState();
  }

  resetGameSettings() {
    // Reset to default values
    this.repository.setCurrentLocalization({ key: "en_US", value: "English" });
    this.repository.setCurrentDataTheme({ key: "light", value: "Light" });
  }
}
