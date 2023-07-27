// MainMenuViewModel.ts (Interface Adapters Layer)

import { MainMenuEntity } from "./Model/MainMenuEntity";
import { GetMainMenuUseCase } from "./GetMainMenuUserCase";

export class MainMenuViewModel {
  private mainMenuList: MainMenuEntity[];
  private getMainMenuUseCase: GetMainMenuUseCase; // GetMainMenuUseCase is injected

  constructor(getMainMenuUseCase: GetMainMenuUseCase) {
    this.getMainMenuUseCase = getMainMenuUseCase;
    this.mainMenuList = [];
  }

  async loadMainMenu(): Promise<void> {
    try {
      this.mainMenuList = await this.getMainMenuUseCase.execute();
    } catch (error) {
      // Handle error appropriately (e.g., show an error message)
      console.error("Failed to load main menu:", error);
    }
  }

  get menuItems(): { name: string; icon: string }[] {
    return this.mainMenuList.map((menu) => ({
      name: menu.name,
      icon: menu.icon,
    }));
  }
}
