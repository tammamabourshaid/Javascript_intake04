const { solveSudoku } = require("./solveSudoku");

/**
 * In this exercise you should come up with an
 * algorithm that solves a sudoku puzzle.
 *
 * It is a very advanced exercise that you won't
 * get for any job interview (takes too much time).
 *
 * Except a recursion, no advanced programming
 * techniques are required.
 *
 * The solution will span over 100 lines of code.
 * So be sure to structure your code well, e.g.
 * write functions.
 */

describe("sudoku", () => {
  it("should solve puzzle 1", () => {
    // © https://www.krone.at/sudoku

    const puzzle1 = [
      [0, 0, 0, 0, 0, 0, 0, 5, 0],//1
      [0, 1, 9, 0, 3, 6, 0, 8, 2],//6
      [0, 5, 4, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 6, 0, 1, 0, 9, 0],
      [0, 3, 6, 0, 8, 0, 1, 2, 0],
      [0, 9, 0, 7, 0, 3, 0, 0, 0],
      [0, 0, 0, 0, 6, 0, 9, 4, 0],
      [2, 6, 0, 9, 4, 0, 5, 7, 0],
      [0, 4, 0, 0, 0, 0, 0, 0, 0]
    ];
    expect(solveSudoku(puzzle1)).toEqual([
      [6, 2, 3, 8, 9, 4, 7, 5, 1],
      [7, 1, 9, 5, 3, 6, 4, 8, 2],
      [8, 5, 4, 2, 1, 7, 6, 3, 9],
      [4, 8, 7, 6, 2, 1, 3, 9, 5],
      [5, 3, 6, 4, 8, 9, 1, 2, 7],
      [1, 9, 2, 7, 5, 3, 8, 6, 4],
      [3, 7, 5, 1, 6, 2, 9, 4, 8],
      [2, 6, 1, 9, 4, 8, 5, 7, 3],
      [9, 4, 8, 3, 7, 5, 2, 1, 6]
    ]);
  });

  it("should solve puzzle 2", () => {
    // © https://www.krone.at/sudoku

    const puzzle2 = [
      [0, 0, 1, 0, 0, 8, 0, 0, 5],
      [0, 2, 4, 0, 0, 0, 0, 9, 0],
      [6, 5, 9, 0, 3, 2, 0, 0, 0],
      [0, 0, 0, 2, 0, 0, 1, 0, 8],
      [0, 0, 6, 0, 1, 0, 9, 0, 0],
      [4, 0, 7, 0, 0, 6, 0, 0, 0],
      [0, 0, 0, 3, 6, 0, 2, 8, 1],
      [0, 6, 0, 0, 0, 0, 3, 4, 0],
      [1, 0, 0, 8, 0, 0, 7, 0, 0]
    ];

    expect(solveSudoku(puzzle2)).toEqual([
      [3, 7, 1, 6, 9, 8, 4, 2, 5],
      [8, 2, 4, 7, 5, 1, 6, 9, 3],
      [6, 5, 9, 4, 3, 2, 8, 1, 7],
      [5, 9, 3, 2, 7, 4, 1, 6, 8],
      [2, 8, 6, 5, 1, 3, 9, 7, 4],
      [4, 1, 7, 9, 8, 6, 5, 3, 2],
      [9, 4, 5, 3, 6, 7, 2, 8, 1],
      [7, 6, 8, 1, 2, 5, 3, 4, 9],
      [1, 3, 2, 8, 4, 9, 7, 5, 6]
    ]);
  });

  it("should solve puzzle 3", () => {
    // © https://sudoku.tagesspiegel.de/

    const puzzle3 = [
      [0, 0, 0, 0, 0, 0, 3, 4, 6],
      [7, 3, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 8, 5, 0, 0, 0, 0],
      [2, 0, 9, 0, 3, 0, 4, 0, 0],
      [0, 0, 0, 0, 0, 5, 2, 0, 3],
      [0, 0, 4, 6, 0, 1, 0, 0, 5],
      [0, 0, 0, 0, 0, 0, 5, 9, 0],
      [5, 9, 7, 3, 8, 0, 0, 2, 0],
      [0, 8, 0, 0, 9, 0, 6, 0, 0]
    ];

    expect(solveSudoku(puzzle3)).toEqual([
      [8, 1, 5, 2, 7, 9, 3, 4, 6],
      [7, 3, 2, 1, 6, 4, 8, 5, 9],
      [9, 4, 6, 8, 5, 3, 7, 1, 2],
      [2, 5, 9, 7, 3, 8, 4, 6, 1],
      [1, 6, 8, 9, 4, 5, 2, 7, 3],
      [3, 7, 4, 6, 2, 1, 9, 8, 5],
      [6, 2, 3, 4, 1, 7, 5, 9, 8],
      [5, 9, 7, 3, 8, 6, 1, 2, 4],
      [4, 8, 1, 5, 9, 2, 6, 3, 7]
    ]);
  });
});
