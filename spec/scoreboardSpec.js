describe("a scoreboard", function() {

  beforeEach(function() {
    scoreboard = new Scoreboard();
  });

  it("should create a new frame object if the frame is a new frame", function() {
    scoreboard.createFrameObjectIfNewFrame(5);
    expect(scoreboard.board[5]).toEqual({frameTotal: 0});
  });


  it("should add a new bowl score to the scoreboard", function() {
    scoreboard.addBowlToScoreBoard(7, 3, 2);
    expect(scoreboard.board[2].roll2).toEqual(7);
  });

  it("should add the bowl score to the frame total - roll1", function() {
    scoreboard.addBowlToScoreBoard(7, 3, 1);
    expect(scoreboard.board[2].frameTotal).toEqual(7);
  });

  it("should add the bowl score to the frame total - roll2", function() {
    scoreboard.board[2] = {frameTotal: 6};
    scoreboard.addBowlToScoreBoard(2, 3, 2);
    expect(scoreboard.board[2].frameTotal).toEqual(8);
  });


});