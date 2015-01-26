describe("a roll", function() {

    var roll;

  it("asks the player how many pins were knocked down", function() {
    roll = new Roll();
    spyOn(roll, 'capturePinsDown')
    roll.pinsDownOnRoll(1);
    expect(roll.capturePinsDown).toHaveBeenCalled();
  });

});

describe("a frame", function() {

  beforeEach(function() {
    frame = new Frame();
    roll = new Roll();
  });

  it("should capture the score from two rolls if the total is less than 10", function() {
    spyOn(roll, 'pinsDownOnRoll').and.returnValue(4);
    frame._captureSingleFrameRollsScore(roll);
    expect(roll.pinsDownOnRoll.calls.count()).toEqual(2);
    expect(frame.frameScore.frameTotal).toEqual(8);
    expect(frame.frameScore.roll1).toEqual(4);
    expect(frame.frameScore.roll2).toEqual(4);
  });

  it("should capture the score from only one roll if the score on the first roll is 10", function() {
    spyOn(roll, 'pinsDownOnRoll').and.returnValue(10);
    frame._captureSingleFrameRollsScore(roll);
    expect(roll.pinsDownOnRoll.calls.count()).toEqual(1);
    expect(frame.frameScore.frameTotal).toEqual(10);
    expect(frame.frameScore.roll1).toEqual(10);
    expect(frame.frameScore.roll2).toEqual(0);
  });

});

describe("a game", function() {

  var game, frame, score;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
    score = new Score();
    spyOn(frame, '_captureSingleFrameRollsScore').and.returnValue({frameTotal: 9, roll1: 2, roll2: 7});
  });

  it("should add each frame's score to the scoreboard", function() {
    game.populateScore(score, frame);
    expect(score.board[0].frameTotal).toEqual(9);
    expect(score.board[0].roll1).toEqual(2);
    expect(score.board[0].roll2).toEqual(7);
    expect(score.board[0].cumulativeTotal).toEqual(9);
  });

  it("should add a cumulative score to the scoreboard", function() {
    game.populateScore(score, frame);
    game.populateScore(score, frame);
    expect(score.board[1].cumulativeTotal).toEqual(18);    
  });

  it("should add the scores for 10 frames", function() {
    game.runFrames(score, frame);
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
    game.runFrames(score, frame, roll);
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
    game.runFrames(score, frame, roll);
    expect(score.board.length).toEqual(10);
    expect(score.board[9].cumulativeTotal).toEqual(149);
  });

});

describe("a scoreboard", function() {

  beforeEach(function() {
    roll = new Roll();
    game = new Game();
    frame = new Frame();
    score = new Score();
  });

  it("should add the score of the next bowl if a spare has been scored", function() {
    spyOn(frame, '_captureSingleFrameRollsScore').and.returnValue({frameTotal: 10, roll1: 8, roll2: 2});
    game.populateScore(score, frame, roll);
    game.populateScore(score, frame, roll);
    expect(score.board[0].frameTotal).toEqual(18);
    expect(score.board[0].cumulativeTotal).toEqual(18);
    expect(score.board[1].cumulativeTotal).toEqual(28);
  });

  it("should add the score of the next two rolls to the frame with the strike (assume not strike on next frame)", function() {
    score.board = [{cumulativeTotal: 10, frameTotal: 10, roll1: 10, roll2: 0}];
    spyOn(frame, '_captureSingleFrameRollsScore').and.returnValue({frameTotal: 7, roll1: 3, roll2: 4});
    game.populateScore(score, frame, roll);
    expect(score.board[0].frameTotal).toEqual(17);
    expect(score.board[1].cumulativeTotal).toEqual(24);
  });

  it("should add the score of the next two rolls to the frame with the strike (assume strike on next frame)", function() {
    score.board = [{cumulativeTotal: 20, frameTotal: 20, roll1: 10, roll2: 0}, {cumulativeTotal: 30, frameTotal: 10, roll1: 10, roll2: 0}];
    spyOn(frame, '_captureSingleFrameRollsScore').and.returnValue({frameTotal: 7, roll1: 3, roll2: 4});
    game.populateScore(score, frame, roll);
    expect(score.board[0].frameTotal).toEqual(23);
    expect(score.board[1].frameTotal).toEqual(17);
    expect(score.board[2].cumulativeTotal).toEqual(47);
  });

});









