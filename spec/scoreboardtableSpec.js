describe("Score Board HTL", function() {

  it("should return html for a board", function() {
  scoreboardtable = new ScoreBoardTable();
  board = [{cumulativeTotal: 7, frameTotal: 7, roll1: 3, roll2: 4}, {cumulativeTotal: 16, frameTotal: 9, roll1: 9}];
  expectedOutput = "<tr><td>Frame</td><td>cumulativeTotal</td><td>frameTotal</td><td>roll1</td><td>roll2</td></tr>";
  expectedOutput += "<tr><td>1</td><td>7</td><td>7</td><td>3</td><td>4</td></tr>";
  expectedOutput += "<tr><td>2</td><td>16</td><td>9</td><td>9</td></tr>";
    expect(scoreboardtable.returnScoreBoardHTML(board)).toEqual(expectedOutput);
  });

});

'<tr><td>Frame</td><td>cumulativeTotal</td><td>frameTotal</td><td>roll1</td><td>roll2</td></tr>
<tr><td>1</td><td>7</td><td>7</td><td>3</td><td>4</td>
<tr><td>2</td><td>16</td><td>9</td><td>9</td>'