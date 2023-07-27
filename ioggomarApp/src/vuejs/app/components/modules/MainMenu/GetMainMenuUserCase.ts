// GetMainMenuUseCase.ts (Use Cases Layer)

import { MainMenuEntity } from "./Model/MainMenuEntity";

export interface GetMainMenuUseCase {
  execute(): MainMenuEntity[];
}

// Example implementation (replace this with your actual logic to fetch MainMenu)
export class GetMainMenuUseCaseImpl implements GetMainMenuUseCase {
  execute(): MainMenuEntity[] {
    // Replace this with your actual data retrieval logic
    return [
      { name: "Home", icon: "home-icon" },
      { name: "Profile", icon: "profile-icon" },
      { name: "Settings", icon: "settings-icon" },
    ];
  }
}
