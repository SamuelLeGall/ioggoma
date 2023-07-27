import {
  Elements,
  MultiplierBonuses,
} from "@config/globalConstants/fighting/basic";
import { drawingResult } from "src/models/game/basic";
import {
  convertPercentSuccessIntoSuccessMinNumber,
  isSuccess,
} from "@utils/DrawsUtils";

export const elementalMultiplier = (
  attackerElement: string,
  defenderElement: string
): number => {
  /* 
    Elements : fire - water - plant | light - dark | null
  */
  let elementalMultiplier = MultiplierBonuses.BASIC;
  if (
    (attackerElement === Elements.LIGHT && defenderElement === Elements.DARK) ||
    (attackerElement === Elements.DARK && defenderElement === Elements.LIGHT)
  ) {
    elementalMultiplier = MultiplierBonuses.EXCELLENT;
  } else if (
    (attackerElement === Elements.FIRE && defenderElement === Elements.PLANT) ||
    (attackerElement === Elements.WATER && defenderElement === Elements.FIRE) ||
    (attackerElement === Elements.PLANT && defenderElement === Elements.WATER)
  ) {
    elementalMultiplier = MultiplierBonuses.GOOD;
  } else if (
    (attackerElement === Elements.PLANT && defenderElement === Elements.FIRE) ||
    (attackerElement === Elements.FIRE && defenderElement === Elements.WATER) ||
    (attackerElement === Elements.WATER && defenderElement === Elements.PLANT)
  ) {
    elementalMultiplier = MultiplierBonuses.BAD;
  }
  return elementalMultiplier;
};

// Note: max luckyHitRate is fixed at 30% chance. (coresponding to successMinNumber = 70)
//calc tel que max pour 180 luck | max-10% pour 150
// 2.5sqrt(X)  ----  recursiveCalc()
// S = 250,
// A = 200,
// B = 175,
// C = 125,
// D = 90,
// E = 75,
// F = 50,
// const recursiveCalc = (result, currentStatValue) => {
//   // result += 1.85*Math.sqrt(currentStatValue);
//   result += Math.round(currentStatValue/50);
//   if(currentStatValue === 0) {
//     return Math.round(result/10);
//   }
//   currentStatValue--;
//   return recursiveCalc(result,currentStatValue);
// };

// const res = [10,50,75,100,125,150,180];
// for(i =0;i < res.length; i++) {
//   console.log(recursiveCalc(25,res[i]));
// }

export const isLuckyHit = (attackerLuck: number): boolean => {
  const maxLuckyHitRate = 30;
  let luckyHitRate = Math.round((attackerLuck + 5) / 100);
  if (luckyHitRate > maxLuckyHitRate) {
    luckyHitRate = maxLuckyHitRate;
  }
  const res: drawingResult = isSuccess(
    convertPercentSuccessIntoSuccessMinNumber(luckyHitRate)
  );
  return res === drawingResult.SUCCESS;
};
export const isCriticalHit = (attackerStats, defenderStats): boolean => {
  return false;
};

// speed - agility - dexterity - luck
// high agility increase dodge rate
// high dexterity increase crit rate and hit rate
export const checkDodgeSuccesfull = (attackerStats, defenderStats): boolean => {
  return true;
};
