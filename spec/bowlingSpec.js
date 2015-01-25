describe("a roll", function() {

    var roll;

  it("asks the player how many pins were knocked down", function() {
    roll = new Roll();
    spyOn(roll, 'capturePinsDown').and.returnValue('7');
    expect(roll.pinsDownOnRoll(1)).toEqual(7);
  });

});

describe("a frame", function() {

  var frame;
  var roll;

  it("should capture the score from two rolls if the total is less than 10", function() {
    frame = new Frame();
    roll = new Roll();
    spyOn(roll, 'pinsDownOnRoll').and.returnValue(4);
    frame.captureRollsScore(roll);
    expect(frame.frameScore.total).toEqual(8);
    expect(frame.frameScore.roll1).toEqual(4);
    expect(frame.frameScore.roll2).toEqual(4);
  });

  it("should capture the score from only one roll if the score on the first roll is 10", function() {
    frame = new Frame();
    roll = new Roll();
    spyOn(roll, 'pinsDownOnRoll').and.returnValue(10);
    frame.captureRollsScore(roll);
    expect(frame.frameScore.total).toEqual(10);
    expect(frame.frameScore.roll1).toEqual(10);
    expect(frame.frameScore.roll2).toEqual(0);    
  });

});

describe("a game", function() {

  it("should add each frame's score to the scoreboard", function() {
    game = new Game();
    frame = new Frame();
    score = new Score();
    spyOn(frame, 'captureRollsScore').and.returnValue({total: 9, roll1: 2, roll2: 7});
    game.populateScore(score, frame);
    expect(score.board[0].total).toEqual(9);
    expect(score.board[0].roll1).toEqual(2);
    expect(score.board[0].roll2).toEqual(7);
  });

  it("should add the scores for 10 frames", function() {
    game = new Game();
    frame = new Frame();
    score = new Score();
    spyOn(frame, 'captureRollsScore').and.returnValue({total: 9, roll1: 2, roll2: 7});
    game.runFrames(score, frame);
    expect(score.board.length).toEqual(10);    
  });


});
