import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n\n").map((a) => a.split("\n").map((a) => +a));

const part1 = (rawInput: string): number => {
  const input: number[][] = parseInput(rawInput);
  return input.reduce((mostCalories: number, elf) => {
    const calories: number = elf.reduce((count, calories) => count + calories, 0);
    return calories > mostCalories ? calories : mostCalories;
  }, 0);
};

const part2 = (rawInput: string): number => {
  const input: number[][] = parseInput(rawInput);
  const topMostCalories: number[] = input.reduce((runningMostCalories, elf) => {
    const calories = elf.reduce((count, calories) => count + calories, 0);
    if (runningMostCalories.length < 3 || runningMostCalories.some((thisCalories) => calories > thisCalories)) {
      runningMostCalories.push(+calories);
    }
    return runningMostCalories;
  }, []);
  return topMostCalories
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((a, b) => a + b, 0);
};

const testInput = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 24000,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: 45000,
      },
    ],
    solution: part2,
  },
  onlyTests: false,
});
