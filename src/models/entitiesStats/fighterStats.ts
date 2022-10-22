// base stats used when calculating the stat of player with his level.
//only updated with some specific items/events
interface FighterStats {
  hp: number;
  mana: number;
  atk: number;
  mAtk: number;
  def: number;
  mDef: number;
  agility: number; // high agility increase dodge rate
  dexterity: number; // high dexterity increase crit rate and hit rate
  speed: number;
  luck: number;
}
