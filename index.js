import { describe, it } from "node:test";
import assert from "node:assert";

import bubbleSort from "./algorithms/sort/bubble_sort.js";

describe("sorting algorithm test", (t) => {
  it("bubble sort algorithm: numbers", () => {
    const reference = [1, 2, 3, 4, 5];
    const sorted = bubbleSort([5, 3, 4, 2, 1]);
    assert.deepEqual(sorted, reference);
  });
  it("bubble sort algorithm: char", () => {
    const reference = ["b", "c", "d", "e", "p", "z"];
    const sorted = bubbleSort(["c", "p", "z", "b", "e", "d"]);
    assert.deepEqual(sorted, reference);
  });
});
