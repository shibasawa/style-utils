import { ComplexStyleRule } from '@vanilla-extract/css';

/**
 * Build variant styles
 * @param customizeStyle
 * @param lists
 * @returns Record<string, ComplexStyleRule>
 */
export function buildVariant<T extends (string | number)[]>(
  customizeStyle: (...args: T) => ComplexStyleRule,
  ...lists: { [K in keyof T]: T[K][] }
): Record<string, ComplexStyleRule> {
  const generateCombinations = (
    prefix: (string | number)[],
    remainingLists: (string | number)[][]
  ): (string | number)[][] => {
    if (remainingLists.length === 0) return [prefix];

    const [currentList, ...restLists] = remainingLists;
    return currentList.flatMap((value: string | number) => generateCombinations([...prefix, value], restLists));
  };

  const combinations = generateCombinations([], lists);

  return combinations.reduce((acc: Record<string, ComplexStyleRule>, combination) => {
    const key = combination.join('-');
    const value = customizeStyle(...(combination as T));
    return { ...acc, [key]: value };
  }, {});
}
