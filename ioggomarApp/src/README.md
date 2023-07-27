project/
|-- src/
| |-- assets/ // Static assets (images, icons, etc.)
| |-- components/ // Reusable UI components (e.g., buttons, modal)
| |-- design-system/ // **External design system package (if it's a separate package)**
| |-- localization/ // **Localization-related files**
| |-- **models/** // **Interfaces used to type utility functions**
| |-- **styles/** // **SCSS files**
| |-- **config/**
| | |-- **entitiesStats/** // **Base stats of each monster, player class, etc.**
| | |-- **globalConstants/** // **Enums for multipliers, bonuses, etc.**
| | |-- **mapping/** // **Localization, theme, and other key/value mappings**
| |-- utils/ // General utility functions (e.g., isLuckyHit, isCriticalHit)
| |-- app/
| | |-- main.ts // Entry point of the application
| | |-- App.vue // Main Vue.js app component
| |-- core/ // Core application modules and services
| | |-- usecases/ // Use Cases Layer (e.g., GetMainMenuUseCase, FightPlayerActionsUseCase)
| | |-- domain/ // Domain Layer (e.g., MainMenuEntity, FightPlayerActionEntity)
| | |-- interfaceadapters/ // Interface Adapters Layer (e.g., MainMenuViewModel, FightPlayerActionsViewModel)
| |-- features/ // Features (each feature has its own folder)
| | |-- MainMenu/
| | | |-- components/ // Vue.js components related to the MainMenu feature
| | | |-- usecases/ // Use Cases specific to the MainMenu feature
| | | |-- domain/ // Domain-specific entities for the MainMenu feature
| | | |-- interfaceadapters/ // Interface Adapters for the MainMenu feature
| | |-- SettingPage/
| | | |-- components/ // Vue.js components related to the SettingPage feature
| | | |-- usecases/ // Use Cases specific to the SettingPage feature
| | | |-- domain/ // Domain-specific entities for the SettingPage feature
| | | |-- interfaceadapters/ // Interface Adapters for the SettingPage feature
| | |-- FightUI/
| | | |-- components/ // Vue.js components related to the FightUI feature
| | | |-- usecases/ // Use Cases specific to the FightUI feature
| | | |-- domain/ // Domain-specific entities for the FightUI feature
| | | |-- interfaceadapters/ // Interface Adapters for the FightUI feature
| | |-- FightPlayerActionsUI/
| | | |-- components/ // Vue.js components related to the FightPlayerActionsUI feature
| | | |-- usecases/ // Use Cases specific to the FightPlayerActionsUI feature
| | | |-- domain/ // Domain-specific entities for the FightPlayerActionsUI feature
| | | |-- interfaceadapters/ // Interface Adapters for the FightPlayerActionsUI feature
| | |-- LocationActionsUI/
| | | |-- components/ // Vue.js components related to the LocationActionsUI feature
| | | |-- usecases/ // Use Cases specific to the LocationActionsUI feature
| | | |-- domain/ // Domain-specific entities for the LocationActionsUI feature
| | | |-- interfaceadapters/ // Interface Adapters for the LocationActionsUI feature
| | |-- PlayerInventoryUI/
| | | |-- components/ // Vue.js components related to the PlayerInventoryUI feature
| | | |-- usecases/ // Use Cases specific to the PlayerInventoryUI feature
| | | |-- domain/ // Domain-specific entities for the PlayerInventoryUI feature
| | | |-- interfaceadapters/ // Interface Adapters for the PlayerInventoryUI feature
