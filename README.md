# katas-ts

Algorithm katas in TypeScript, written by hand without AI. Times, complexity and notes are in the table below:

| #   | Problem                                 | Time   | Help used                                 | Complexity (time / space)         | Notes                                                                                                                               |
| --- | --------------------------------------- | ------ | ----------------------------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [Two Sum](problems/two-sum.ts)          | 31m49s | Google: TS for-loop syntax, Map vs object | O(n) time / O(n) space            | A plain object coerced number keys to strings, so I switched to Map. An early-exit check broke on negative numbers, so I removed it |
| 242 | [Valid Anagram](problems/is-anagram.ts) | 22m17s | Google: Map syntax                        | O(n) time / O(1) space (a–z only) | Started with two maps, then reduced to one by counting up on s and down on t                                                        |
