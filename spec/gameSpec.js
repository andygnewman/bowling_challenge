describe("a game", function() {

  var game, frame, score;

  beforeEach(function() {
    game = new Game();

    spyOn(game.frame, 'passFrameScore').and.returnValue({frameTotal: 9, roll1: 2, roll2: 7});
  });

  it("should add each frame's score to the scoreboard", function() {
    game.populateScore();
    expect(game.score.board[0].frameTotal).toEqual(9);
    expect(game.score.board[0].roll1).toEqual(2);
    expect(game.score.board[0].roll2).toEqual(7);
    expect(game.score.board[0].cumulativeTotal).toEqual(9);
  });

  it("should add a cumulative score to the scoreboard", function() {
    game.populateScore();
    game.populateScore();
    expect(game.score.board[1].cumulativeTotal).toEqual(18);    
  });

  it("should add the scores for 10 frames", function() {
    game.runFrames();
    expect(game.score.board.length).toEqual(10);
    expect(game.score.board[2].cumulativeTotal).toEqual(27);
    expect(game.score.board[8].cumulativeTotal).toEqual(81);
    expect(game.score.board[9].cumulativeTotal).toEqual(90);    
  });

});

describe("a game in which the player scores a strike or spare in the final frame", function() {

  it("should score 300 if a player scores a strike on every bowl", function() {
    game = new Game();
    spyOn(game.frame.roll, 'pinsDownOnRoll').and.returnValue(10);
    game.runFrames();
    expect(game.score.board.length).toEqual(10);
    expect(game.score.board[9].cumulativeTotal).toEqual(300);
  });

  it("should score 150 if a player scores 5 on every bowl ie a spare in each frame and a 5 on single bonus ball in the 10th", function() {
    game = new Game();
    spyOn(game.frame.roll, 'pinsDownOnRoll').and.returnValue(5);
    game.runFrames();
    expect(game.score.board.length).toEqual(10);
    expect(game.score.board[9].cumulativeTotal).toEqual(150);
  });

});











