import { resourcesProblem } from "./resources.problem";

describe("Resources", () => {
  it("short simple test", () => {
    const resources = [100, 300, 200];
    const capacity = 120;
    const expected = [20, 60, 40];

    const result = resourcesProblem(resources, capacity);

    expect(result).toStrictEqual(expected);
  });

  it("simple test", () => {
    const resources = [100, 300, 200, 300, 400, 700];
    const capacity = 1000;
    const expected = [50, 150, 100, 150, 200, 350];

    const result = resourcesProblem(resources, capacity);

    expect(result).toStrictEqual(expected);
  });

  it("capacity greater than resources test", () => {
    const resources = [100, 300, 200];
    const capacity = 10000000;
    const expected = [100, 300, 200];

    const result = resourcesProblem(resources, capacity);

    expect(result).toStrictEqual(expected);
  });

  it("resources are empty", () => {
    const resources: number[] = [];
    const capacity = 120;
    const expected: number[] = [];

    const result = resourcesProblem(resources, capacity);

    expect(result).toStrictEqual(expected);
  });

  it("not strict distribution", () => {
    const resources = [100, 300, 200];
    const capacity = 121;
    const expected = [21, 60, 40];

    const result = resourcesProblem(resources, capacity);

    expect(result).toStrictEqual(expected);
  });

  it("not strict distribution", () => {
    const resources = [1, 1, 1];
    const capacity = 1;
    const expected = [1, 0, 0];

    const result = resourcesProblem(resources, capacity);

    expect(result).toStrictEqual(expected);
  });

  it("not strict distribution", () => {
    const resources = [1, 10, 10];
    const capacity = 5;
    const expected = [1, 2, 2];

    const result = resourcesProblem(resources, capacity);

    expect(result).toStrictEqual(expected);
  });

  it("not strict distribution", () => {
    const resources = [0, 100, 100, 10];
    const capacity = 20;
    const expected = [0, 10, 10, 0];

    const result = resourcesProblem(resources, capacity);

    expect(result).toStrictEqual(expected);
  });

  it("zero resources", () => {
    const resources = [0, 0, 0];
    const capacity = 100;
    const expected = [0, 0, 0];

    const result = resourcesProblem(resources, capacity);

    expect(result).toStrictEqual(expected);
  });

  it("zero capacity", () => {
    const resources = [100, 300, 200];
    const capacity = 0;
    const expected = [0, 0, 0];

    const result = resourcesProblem(resources, capacity);

    expect(result).toStrictEqual(expected);
  });

  it("negative input value", () => {
    const resources = [1000, -1000, 1000];
    const capacity = 100;

    expect.assertions(1);
    try {
      resourcesProblem(resources, capacity);
    } catch (err) {
      expect((err as Error).message).toEqual("value -1000 should be positive");
    }
  });

  it("string input value", () => {
    const resources = [1000, 1000, 1000];
    const capacity = "capacity";

    expect.assertions(1);
    try {
      resourcesProblem(resources, capacity as never as number);
    } catch (err) {
      expect((err as Error).message).toEqual("value capacity should be number");
    }
  });
});
