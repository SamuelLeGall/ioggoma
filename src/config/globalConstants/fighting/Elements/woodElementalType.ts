import {
  ElementalTypesInteractions,
  ElementalTypes,
} from "src/domain/models/fight/ElementalTypesModels";
import { defaultElementalTypeConfig } from "./elementTypesConfig";

export const woodElementalTypeConfig: ElementalTypesInteractions = {
  effectOn: {
    DEFAULT: defaultElementalTypeConfig,
    [ElementalTypes.FIRE]: {
      damageMultiplier: 0.5,
    },
    [ElementalTypes.WATER]: {
      damageMultiplier: 0.25,
      criticalConfig: {
        failure: {
          optionnalStatusEffects: [],
        },
      },
    },
    [ElementalTypes.WOOD]: {
      damageMultiplier: 1.75,
      criticalConfig: {
        success: {
          optionnalStatusEffects: [],
        },
      },
    },
  },
};
