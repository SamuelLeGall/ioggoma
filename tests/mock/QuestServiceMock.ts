import { AppError, AppErrorCodes } from "@src/domain/models/BasicAndTempModels";
import { TestCase } from "tests/Models/testsModels";

const acceptQuestTestCases: TestCase[] = [
  {
    name: "quest id does not exist - return an error and no data",
    params: {
      questId: "TEST_NON_PRESENT",
    },
    expected: {
      result: null,
      error: new AppError(
        `No quest found for id TEST_NON_PRESENT`,
        AppErrorCodes.QUEST_NOT_FOUND
      ),
    },
  },
  {
    name: "quest id exist but is already ongoing - return an error and no data",
    params: {
      questId: "loc1_quest002",
    },
    expected: {
      result: null,
      error: new AppError(
        `Quest with id loc1_quest002 already ongoing`,
        AppErrorCodes.ACTION_NOT_ALLOWED_DATA_CONSISTENCY
      ),
    },
  },
  {
    name: "quest id exist - return the data and no error",
    params: {
      questId: "loc1_quest001",
    },
    expected: {
      result: true,
      error: null,
    },
  },
];

export { acceptQuestTestCases };
