function generateSolutions(board) {
    // copy board as it is modified inside this function
    var board = JSON.parse(JSON.stringify(board));

    for (var suggestion of generateBoards(board)) {
        board[suggestion.row][suggestion.column] = suggestion.value;

        if (isPartialSolutionCorrect(board)) {
            yield board;
            yield generateSolutions(board);
        }
    }
}

function generateBoards(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) {
                for (var k = 1; k <= 9; k++) {
                    yield { row: i, column: j, value: k };
                }
            }
        }
    }
}

function isPartialSolutionCorrect(board) {
    return checkRows(board) && checkRows(zip(board)) &&
        checkGroups(board);
}

function isCompleteSolution(board) {
    return board.every(function(row) {
        return row.every(isTruthy);
    });
}

function checkRows(row) {
  return row.every(noDuplicates);
}

function checkGroups(board) {
    function checkGroup(group) {
        return group.map(flatten).every(noDuplicates);
    }
    var partitionByThree = partition.bind(null, 3);
    return zip(board.map(partitionByThree)).map(partitionByThree)
        .map(checkGroup).every(isTruthy);
}

function noDuplicates(array) {
    var filtered = array.filter(isTruthy);
    // new Set([1,2,3]) does not work in Chrome but works in Firefox
    var set = new Set();
    filtered.forEach(function(element) {
        set.add(element);
    });
    return filtered.length === set.size;
}

function zip(arrays) {
    return arrays[0].map(function(element, index) {
        return arrays.map(function(array) {
            return array[index];
        });
    });
}

function partition(chunkSize, array) {
    return flatten(array.map(function(element, index) {
        if (index % chunkSize) {
            return [];
        } else {
            return [ array.slice(index, index + chunkSize) ];
        }
    }));
}

function flatten(array) {
    return Array.prototype.concat.apply([], array);
}

function isTruthy(value) {
    return !!value;
}