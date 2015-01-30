describe("a game", function() {

  var game, frame, score;

  beforeEach(function() {
    game = new Game();
    spyOn(game.frame, 'passFrameScore').and.returnValue({frameTotal: 9, roll1: 2, roll2: 7});
  });

  it("should add each balls's score to the scoreboard", function() {
    game.populateScore();
    expect(game.score.board[0].frameTotal).toEqual(9);
    expect(game.score.board[0].roll1).toEqual(2);
    expect(game.score.board[0].roll2).toEqual(7);
    expect(game.score.board[0].cumulativeTotal).toEqual(9);
  });

  it("should add the second ball score to the same frame", function() {
    game.populateScore();
    game.frame.frameNew = false;
    game.populateScore();
    expect(game.score.board[0].frameTotal).toEqual(9);
    expect(game.score.board[0].roll1).toEqual(2);
    expect(game.score.board[0].roll2).toEqual(7);
    expect(game.score.board[0].cumulativeTotal).toEqual(9);
    expect(game.score.board[1]).not.toBeDefined();
  });


});











