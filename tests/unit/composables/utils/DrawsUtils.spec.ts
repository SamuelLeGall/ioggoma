import { afterEach, describe, expect, it, vi } from "vitest";
import * as GeneralUtilsModule from "@utils/GeneralUtils";
import { isSuccess } from "@utils/DrawsUtils.ts";
import { drawingResult } from "@models/game/basic";
import {
  isSuccessMockedDrawResult,
  drawingLimitsMock,
  isSuccessInvalidParameters,
  isSuccessNoAdditionnalsLimitsDrawingResult,
  isSuccessWithAdditionnalsLimitsDrawingResult,
} from "./../../../mock/DrawsUtilsMock";

describe("Test of GeneralUtils - isSuccess - InvalidParameters", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  isSuccessInvalidParameters.forEach((testCase) => {
    it(testCase.name, () => {
      const randomIntNumberInclusiveMockResult = 40;

      const spyRandomIntNumberInclusive = vi
        .spyOn(GeneralUtilsModule, "randomIntNumberInclusive")
        .mockImplementation(() => randomIntNumberInclusiveMockResult);
      const spyConsoleError = vi.spyOn(console, "error");

      const result = isSuccess(
        testCase.successMinNumber,
        testCase.useExtendingDrawingResult,
        testCase.extendingDrawingLimits
      );
      expect(spyRandomIntNumberInclusive).not.toHaveBeenCalled();
      expect(spyConsoleError).toHaveBeenCalled();
      expect(spyConsoleError).toHaveBeenCalledWith(
        "[isSuccess] Error : extendingDrawingLimits undefined"
      );

      expect(result).toBe(drawingResult.SUCCESS);
    });
  });
});

describe("Test of GeneralUtils - isSuccess - useExtendingDrawingResult=false", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  isSuccessNoAdditionnalsLimitsDrawingResult.forEach((testCase) => {
    it(testCase.name, () => {
      const randomIntNumberInclusiveMockResult =
        testCase.randomIntNumberInclusiveMockResult;
      const spyConsoleError = vi.spyOn(console, "error");

      const spy = vi
        .spyOn(GeneralUtilsModule, "randomIntNumberInclusive")
        .mockImplementation(() => randomIntNumberInclusiveMockResult);

      const result = isSuccess(isSuccessMockedDrawResult);
      expect(spyConsoleError).not.toHaveBeenCalled();
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveReturnedWith(randomIntNumberInclusiveMockResult);

      expect(result).toBe(testCase.expectedResult);
    });
  });
});

describe("Test of GeneralUtils - isSuccess - useExtendingDrawingResult=true", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  isSuccessWithAdditionnalsLimitsDrawingResult.forEach((testCase) => {
    it(testCase.name, () => {
      const randomIntNumberInclusiveMockResult =
        testCase.randomIntNumberInclusiveMockResult;

      const spy = vi
        .spyOn(GeneralUtilsModule, "randomIntNumberInclusive")
        .mockImplementation(() => randomIntNumberInclusiveMockResult);
      const spyConsoleError = vi.spyOn(console, "error");

      const result = isSuccess(
        isSuccessMockedDrawResult,
        true,
        drawingLimitsMock
      );
      expect(spyConsoleError).not.toHaveBeenCalled();
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveReturnedWith(randomIntNumberInclusiveMockResult);

      expect(result).toBe(testCase.expectedResult);
    });
  });
});
