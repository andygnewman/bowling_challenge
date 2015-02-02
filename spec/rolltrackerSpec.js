describe("a roll tracker", function() {

    beforeEach(function() {
    rolltracker = new RollTracker();
  });

  describe("frames 1 to 9", function() {

    it("should be initially set to frame 1, roll 1 with a maximum score of 10", function() {
      expect(rolltracker.tracker.frameNumber).toEqual(1);
      expect(rolltracker.tracker.rollNumber).toEqual(1);
      expect(rolltracker.tracker.maxRollScore).toEqual(10);
    });

    it("should advance to roll 2 in the same frame, with max roll score 4 if 6 scored on the first roll", function() {
      rolltracker.advanceRoll(6);
      expect(rolltracker.tracker.frameNumber).toEqual(1);
      expect(rolltracker.tracker.rollNumber).toEqual(2);
      expect(rolltracker.tracker.maxRollScore).toEqual(4);
    });

    it("should advance to frame 2 with max roll score 10 if 10 (strike) scored on the first roll", function() {
      rolltracker.advanceRoll(10);
      expect(rolltracker.tracker.frameNumber).toEqual(2);
      expect(rolltracker.tracker.rollNumber).toEqual(1);
      expect(rolltracker.tracker.maxRollScore).toEqual(10);
    });

    it("should advance to frame 2 with max roll score 10 after 2 (non-strike) rolls in a frame", function() {
      rolltracker.advanceRoll(3);
      rolltracker.advanceRoll(4);
      expect(rolltracker.tracker.frameNumber).toEqual(2);
      expect(rolltracker.tracker.rollNumber).toEqual(1);
      expect(rolltracker.tracker.maxRollScore).toEqual(10);
    });

  });  

  describe("frame 10", function() {

    it("should advance to roll 2 with max score 10 if a strike is scored with the first roll", function() {
      rolltracker.tracker = {frameNumber: 10, rollNumber: 1, maxRollScore: 10};
      rolltracker.advanceRoll(10);
      expect(rolltracker.tracker.frameNumber).toEqual(10);
      expect(rolltracker.tracker.rollNumber).toEqual(2);
      expect(rolltracker.tracker.maxRollScore).toEqual(10);
    });

    it("should advance to roll 3 with max score 10 if a strike is scored with the second roll", function() {
      rolltracker.tracker = {frameNumber: 10, rollNumber: 2, maxRollScore: 10};
      rolltracker.advanceRoll(10);
      expect(rolltracker.tracker.frameNumber).toEqual(10);
      expect(rolltracker.tracker.rollNumber).toEqual(3);
      expect(rolltracker.tracker.maxRollScore).toEqual(10);
    });

    it("should advance to roll 3 with max score 10 if the score of the first 2 rolls equals 10", function() {
      rolltracker.tracker = {frameNumber: 10, rollNumber: 2, maxRollScore: 3};
      rolltracker.advanceRoll(3);
      expect(rolltracker.tracker.frameNumber).toEqual(10);
      expect(rolltracker.tracker.rollNumber).toEqual(3);
      expect(rolltracker.tracker.maxRollScore).toEqual(10);
    });

    it("should know the game is over after 2 balls scoring less than 10 are rolled", function() {
      rolltracker.tracker = {frameNumber: 10, rollNumber: 2, maxRollScore: 5};
      expect(rolltracker.gameOver).toBe(false);      
      rolltracker.advanceRoll(3);
      expect(rolltracker.gameOver).toBe(true);      
    });   

    it("should know the game is over after the third ball is bowled", function() {
      rolltracker.tracker = {frameNumber: 10, rollNumber: 2, maxRollScore: 10};
      rolltracker.advanceRoll(3);
      expect(rolltracker.gameOver).toBe(true);
    });

  });

});