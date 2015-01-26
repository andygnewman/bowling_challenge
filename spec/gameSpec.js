describe("a game", function() {

  var game, frame, score;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
    score = new Score();
    roll = new Roll();
    spyOn(frame, '_captureSingleFrameRollsScore').and.returnValue({frameTotal: 9, roll1: 2, roll2: 7});
  });

  it("should add each frame's score to the scoreboard", function() {
    game.populateScore(frame, score, roll);
    expect(score.board[0].frameTotal).toEqual(9);
    expect(score.board[0].roll1).toEqual(2);
    expect(score.board[0].roll2).toEqual(7);
    expect(score.board[0].cumulativeTotal).toEqual(9);
  });

  it("should add a cumulative score to the scoreboard", function() {
    game.populateScore(frame, score, roll);
    game.populateScore(frame, score, roll);
    expect(score.board[1].cumulativeTotal).toEqual(18);    
  });

  it("should add the scores for 10 frames", function() {
    game.runFrames(frame, score, roll);
    expect(score.board.length).toEqual(10);
    expect(score.board[2].cumulativeTotal).toEqual(27);
    expect(score.board[8].cumulativeTotal).toEqual(81);
    expect(score.board[9].cumulativeTotal).toEqual(90);    
  });

});

describe("a game in which the player scores a strike or spare in the final frame", function() {

  it("should allow another 2 bowls if the 10th frame has a strike", function() {
    roll = new Roll();
    game = new Game();
    frame = new Frame();
    score = new Score();
    spyOn(frame, '_captureSingleFrameRollsScore').and.returnValue({frameTotal: 10, roll1: 10, roll2: 0});
    spyOn(roll, 'pinsDownOnRoll').and.returnValue(10);
    game.runFrames(frame, score, roll);
    expect(score.board.length).toEqual(10);
    expect(score.board[9].cumulativeTotal).toEqual(300);
  });

  it("should allow another 1 bowl if the 10th frame has a spare", function() {
    roll = new Roll();
    game = new Game();
    frame = new Frame();
    score = new Score();
    spyOn(frame, '_captureSingleFrameRollsScore').and.returnValue({frameTotal: 10, roll1: 5, roll2: 5});
    spyOn(roll, 'pinsDownOnRoll').and.returnValue(4);
    game.runFrames(frame, score, roll);
    expect(score.board.length).toEqual(10);
    expect(score.board[9].cumulativeTotal).toEqual(149);
  });

});











