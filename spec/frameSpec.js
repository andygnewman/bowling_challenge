describe("a frame", function() {

  beforeEach(function() {
    frame = new Frame();
  });

  var rollMultipleBalls = function(numBalls) {
    for (var i = 0; i < numBalls; i++) {
    frame.updateFrameWithScoreAndAdvanceRoll();      
    }
  }



  it("should add a roll score to the frame score", function() {
    spyOn(frame, '_getRollScore').and.returnValue(4);
    frame._resetFrameScore();
    frame._updateFrameWithScore();
    expect(frame.frameScore.roll1).toEqual(4);    
  });


  it("should capture the score from two rolls if the total is less than 10", function() {
    spyOn(frame, '_getRollScore').and.returnValue(4);
    frame._resetFrameScore();
    rollMultipleBalls(2);
    expect(frame.frameScore.frameTotal).toEqual(8);
    expect(frame.frameScore.roll2).toEqual(4);
  });

  it("should capture the score from only one roll if the score on the first roll is 10", function() {
    spyOn(frame, '_getRollScore').and.returnValue(10);
    frame._resetFrameScore();
    frame.updateFrameWithScoreAndAdvanceRoll();
    expect(frame.rollTracker.frameNumber).toEqual(2);
    expect(frame.frameScore.frameTotal).toEqual(10);
    expect(frame.frameScore.roll1).toEqual(10);
    expect(frame.frameScore.roll2).toEqual(0);
  });

  it("should roll an extra ball in the 10th frame if a spare has been scored on the first two balls", function() {
    frame.rollTracker = {frameNumber: 10, rollNumber: 1, maxRollScore: 10};
    spyOn(frame, '_getRollScore').and.returnValue(5);
    frame._resetFrameScore();
    rollMultipleBalls(3);
    expect(frame.frameScore.frameTotal).toEqual(15);
    expect(frame.frameScore.roll3).toEqual(5);
    expect(frame.gameOver).toBe(true);
  });

  it("should roll two extra balls in the 10th frame if a strike has been scored on the first balls", function() {
    frame.rollTracker = {frameNumber: 10, rollNumber: 1, maxRollScore: 10};
    spyOn(frame, '_getRollScore').and.returnValue(10);
    frame._resetFrameScore();
    rollMultipleBalls(3);
    expect(frame.frameScore.frameTotal).toEqual(30);  
    expect(frame.frameScore.roll2).toEqual(10);
    expect(frame.frameScore.roll3).toEqual(10);
    expect(frame.gameOver).toBe(true);
  });

  it("should know that the game is over after 2 balls rolled in the final frame not spare or strike", function() {
    frame.rollTracker = {frameNumber: 10, rollNumber: 1, maxRollScore: 10};
    spyOn(frame, '_getRollScore').and.returnValue(3);
    frame._resetFrameScore();
    rollMultipleBalls(2);
    expect(frame.gameOver).toBe(true);        
  });

});