describe("a frame", function() {

  beforeEach(function() {
    frame = new Frame();
  });

  it("should add a roll score to the frame score", function() {
    spyOn(frame, '_getRollScore').and.returnValue(4);
    frame._resetFrameScore();
    frame.updateFrameWithScore();
    expect(frame.frameScore.roll1).toEqual(4);    
  });


  it("should capture the score from two rolls if the total is less than 10", function() {
    spyOn(frame, '_getRollScore').and.returnValue(4);
    frame._resetFrameScore();
    frame.updateFrameWithScore();
    frame.advanceRoll();
    frame.updateFrameWithScore();
    frame.advanceRoll();
    expect(frame.frameScore.frameTotal).toEqual(8);
    expect(frame.frameScore.roll2).toEqual(4);
  });

  it("should capture the score from only one roll if the score on the first roll is 10", function() {
    spyOn(frame, '_getRollScore').and.returnValue(10);
    frame._resetFrameScore();
    frame.updateFrameWithScore();
    frame.advanceRoll();
    expect(frame.rollTracker.frameNumber).toEqual(2);
    expect(frame.frameScore.frameTotal).toEqual(10);
    expect(frame.frameScore.roll1).toEqual(10);
    expect(frame.frameScore.roll2).toEqual(0);
  });

  // it("should roll an extra ball in the 10th frame if a spare has been scored on the first two balls", function() {
  //   frame.frameNumber = 10;
  //   spyOn(frame.roll, 'pinsDownOnRoll').and.returnValue(5);
  //   frame._captureSingleFrameRollsScore();
  //   expect(frame.roll.pinsDownOnRoll.calls.count()).toEqual(3);
  //   expect(frame.frameScore.frameTotal).toEqual(15);
  //   expect(frame.frameScore.roll3).toEqual(5);
  // });

  // it("should roll two extra balls in the 10th frame if a strike has been scored on the first balls", function() {
  //   frame.frameNumber = 10;
  //   spyOn(frame.roll, 'pinsDownOnRoll').and.returnValue(10);
  //   frame._captureSingleFrameRollsScore();
  //   expect(frame.roll.pinsDownOnRoll.calls.count()).toEqual(3);
  //   expect(frame.frameScore.frameTotal).toEqual(30);  
  //   expect(frame.frameScore.roll3).toEqual(10);
  //   expect(frame.frameScore.roll4).toEqual(10);
  // });

});