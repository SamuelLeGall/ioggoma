import { QuestService } from "@src/domain/services/quests/QuestsService";
import { acceptQuestTestCases } from "tests/mock/QuestServiceMock";
import { TestCase } from "tests/Models/testsModels";
import { setActivePinia, createPinia } from "pinia";

describe("Test of QuestService - getQuestByIdTestCases", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  acceptQuestTestCases.forEach((testCase: TestCase) => {
    it(testCase.name, () => {
      // given
      const questId = testCase.params.questId;

      // when
      const questInstance = new QuestService();
      const [result, error] = questInstance.acceptQuest(questId);

      // then
      if (testCase.expected.error) {
        expect(error?.message).toStrictEqual(testCase.expected.error.message);
      } else {
        expect(error).toStrictEqual(testCase.expected.error);
      }
      expect(result).toStrictEqual(testCase.expected.result);
    });
  });
});
