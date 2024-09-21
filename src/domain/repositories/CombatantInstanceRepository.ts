import { useCombatantsStore } from "../database-stores/combatants";
import { Result } from "../models/BasicAndTempModels";
import { Combatant } from "../models/entitiesStats/CombatantModels";
import { ElementalTypes } from "../models/fight/ElementalTypesModels";

export class CombatantInstanceRepository {
  private store;
  private combatant: Combatant;

  constructor(combatantId: string, store = useCombatantsStore()) {
    const [data, error] = this.getCombatantById(combatantId);

    if (!data) {
      throw error;
    }

    this.store = store;
    this.combatant = data;
  }

  /** Getters **/
  getCombatantById(combatantId: string): Result<Combatant> {
    const currentCombatant = this.store.combatants.find((combatant) => {
      return combatant.id === combatantId;
    });

    if (!currentCombatant) {
      return [null, new Error("Can't find the combatant for this Id")];
    }

    return [currentCombatant, null];
  }

  getName(): string {
    return this.combatant.name;
  }

  getLevel() {
    return this.combatant.level;
  }

  getElementalType(): ElementalTypes {
    return this.combatant.element;
  }

  getBaseMaxHealthValue(): number {
    return this.combatant.baseStats.hp;
  }

  getBaseMaxManaValue(): number {
    return this.combatant.baseStats.hp;
  }

  getBaseAttackValue(): number {
    return this.combatant.baseStats.atk;
  }

  getBaseMagicAttackValue(): number {
    return this.combatant.baseStats.mAtk;
  }

  getBaseDefenseValue(): number {
    return this.combatant.baseStats.def;
  }

  getBaseMagicDefenseValue(): number {
    return this.combatant.baseStats.mDef;
  }

  getBaseAgilityValue(): number {
    return this.combatant.baseStats.agility;
  }

  getBaseDexterityValue(): number {
    return this.combatant.baseStats.dexterity;
  }

  getBaseSpeedValue(): number {
    return this.combatant.baseStats.speed;
  }

  getBaseLuckValue(): number {
    return this.combatant.baseStats.luck;
  }

  /** Technical Actions - no actual high level user-action at this level **/
  // player stats, equiped equipement/items are not taken into account here

  getCombatantStoreState() {
    return this.combatant;
  }
  setCombatantStoreState(data: Combatant) {
    // TODO
    this.store.combatants = [data];
  }
}
