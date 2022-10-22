import crypto from "crypto";
export const randomIntNumberInclusive = (minimum: number, maximum: number) => {
  return crypto.randomInt(minimum, maximum + 1);
};
