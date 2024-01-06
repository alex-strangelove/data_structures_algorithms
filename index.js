import { describe, it } from "node:test";
import assert from "node:assert";

import bubbleSort from "./algorithms/sort/bubble_sort.js";
import selectionSort from "./algorithms/sort/selection_sort.js";

describe("bubble sort algorithm test", (t) => {
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

describe("selection sort algorithm test", () => {
  it("selection sort algorithm: numbers", () => {
    const reference = [1, 2, 3, 4, 5];
    const sorted = selectionSort([2, 1, 4, 5, 3]);
    console.log(sorted);
    assert.deepEqual(sorted, reference);
  });
  it("selection sort algorithm: char", () => {
    const reference = ["b", "c", "d", "e", "p", "z"];
    const sorted = selectionSort(["c", "p", "z", "b", "e", "d"]);
    assert.deepEqual(sorted, reference);
  });
});
