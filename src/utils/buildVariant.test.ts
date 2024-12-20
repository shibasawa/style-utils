import { describe, it, expect } from "vitest";
import { buildVariant } from './buildVariant';

describe('buildVariant', () => {
  it('should return a record of style rules', () => {
    expect(buildVariant((fontSize, color) => {
      return { color, fontSize, };
    }, [16, 18], ['red', 'blue'])).toEqual({
      "16-blue": {
        "color": "blue",
          "fontSize": 16,
      },
      "16-red": {
        "color": "red",
          "fontSize": 16,
      },
      "18-blue": {
        "color": "blue",
          "fontSize": 18,
      },
      "18-red": {
        "color": "red",
          "fontSize": 18,
      },
    });
  });
});
