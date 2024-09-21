import { useCombatantsStore } from "../database-stores/combatants";
import { Result } from "../models/BasicAndTempModels";
import { Combatant } from "../models/entitiesStats/CombatantModels";

export class CombatantsRepository {
  private store;

  constructor(store = useCombatantsStore()) {
    this.store = store;
  }

  /** Getters **/
  getAllCombatants(): Combatant[] {
    return this.store.combatants;
  }

  getAllEnnemies(): Combatant[] {
    return this.getAllCombatants().filter((combatant) => {
      return combatant.type === "ENNEMY";
    });
  }

  getAllAllies(): Combatant[] {
    return this.getAllCombatants().filter((combatant) => {
      return combatant.type === "ALLY";
    });
  }

  /** Technical Actions - no actual high level user-action at this level **/
  // player stats, equiped equipement/items are not taken into account here

  getCombatantStoreState() {
    return { combatants: this.store.combatants };
  }

  setCombatantStoreState(data: Combatant[]) {
    // TODO
    this.store.combatants = data;
  }
}
