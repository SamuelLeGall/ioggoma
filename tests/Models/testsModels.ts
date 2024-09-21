// interface TestCaseMocks {}
export interface TestCase {
  name: string;
  mocks?: any;
  params: any;
  expected: {
    error: Error | null;
    result: any | null;
  };
}
