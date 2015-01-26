describe("a scoreboard", function() {

  beforeEach(function() {
    score = new Score();
  });

  it("should add a cumulative score to the frame in the scoreboard", function() {
    score.board = [{frameTotal: 10, roll1: 8, roll2: 2}]
    score.refreshCumulativeScores();
    expect(score.board[0].cumulativeTotal).toEqual(10);    
  });

  it("should add the score of the next bowl if a spare has been scored", function() {
    score.board = [{cumulativeTotal: 10, frameTotal: 10, roll1: 8, roll2: 2}, {frameTotal: 10, roll1: 8, roll2: 2}]
    score.refreshCumulativeScores();
    expect(score.board[0].frameTotal).toEqual(18);
    expect(score.board[0].cumulativeTotal).toEqual(18);
    expect(score.board[1].cumulativeTotal).toEqual(28);
  });

  it("should add the score of the next two rolls to the frame with the strike (assume not strike on next frame)", function() {
    score.board = [{cumulativeTotal: 10, frameTotal: 10, roll1: 10, roll2: 0}, {frameTotal: 7, roll1: 3, roll2: 4}];
    score.refreshCumulativeScores();
    expect(score.board[0].frameTotal).toEqual(17);
    expect(score.board[1].cumulativeTotal).toEqual(24);
  });

  it("should add the score of the next two rolls to the frame with the strike (assume strike on next frame)", function() {
    score.board = [{cumulativeTotal: 20, frameTotal: 20, roll1: 10, roll2: 0}, {cumulativeTotal: 30, frameTotal: 10, roll1: 10, roll2: 0}, {frameTotal: 7, roll1: 3, roll2: 4}];
    score.refreshCumulativeScores();
    expect(score.board[0].frameTotal).toEqual(23);
    expect(score.board[1].frameTotal).toEqual(17);
    expect(score.board[2].cumulativeTotal).toEqual(47);
  });

});