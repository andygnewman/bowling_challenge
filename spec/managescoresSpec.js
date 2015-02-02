describe("a scoreboard refresh of cumulative scores", function() {

  beforeEach(function() {
    managescores = new ManageScores();
  });

  var rollPerfectGame = function() {
    var board = [{frameTotal:10, roll1: 10}];
    managescores.refreshScores(board);
    for (var i = 0; i < 9; i++) {
      board.push({frameTotal:10, roll1: 10});
      managescores.refreshScores(board);
    }
    board[9].roll2 = 10;
    board[9].frameTotal += 10;
    managescores.refreshScores(board);
    board[9].roll3 = 10;
    board[9].frameTotal += 10;
    managescores.refreshScores(board);
    return board;
  }

    var rollFiveEachBall = function() {
    var board = [{frameTotal:5, roll1: 5}];
    managescores.refreshScores(board);
    board[0].roll2 = 5;
    board[0].frameTotal += 5;
    managescores.refreshScores(board);
    for (var i = 0; i < 9; i++) {
      board.push({frameTotal:5, roll1: 5, roll2: 0});
      managescores.refreshScores(board);
      board[board.length -1] = {frameTotal:10, roll1: 5, roll2: 5};
      managescores.refreshScores(board);
    }
    board[9] = {frameTotal:15, roll1: 5, roll2: 5, roll3: 5};
    managescores.refreshScores(board);
    return board;
  }

  describe("cumulative scores for frames without spares or strikes", function() {

    it("should add a cumulative score to the frame in the scoreboard - one ball bowled in frame", function() {
      var board = [{frameTotal: 7, roll1: 7, roll2: 0}];
      managescores.refreshScores(board);
      expect(board[0].cumulativeTotal).toEqual(7);    
    });

    it("should add a cumulative score to the frame in the scoreboard - second ball bowled in frame", function() {
      var board = [{frameTotal: 9, roll1: 7, roll2: 2}];
      managescores.refreshScores(board);
      expect(board[0].cumulativeTotal).toEqual(9);    
    });

    it("should add a cumulative score to the frame in the scoreboard - first ball bowled in second frame", function() {
      var board = [{frameTotal: 9, roll1: 7, roll2: 2, cumulativeTotal: 9} ]
      board.push({frameTotal: 6, roll1: 6});
      managescores.refreshScores(board);
      expect(board[1].cumulativeTotal).toEqual(15);    
    });

    it("should add a cumulative score to the frame in the scoreboard - second ball bowled in second frame", function() {
      var board = [{frameTotal: 9, roll1: 7, roll2: 2, cumulativeTotal: 9}];
      board.push({frameTotal: 8, roll1: 6, roll2: 2, cumulativeTotal: 15});
      managescores.refreshScores(board);
      expect(board[1].cumulativeTotal).toEqual(17);    
    });

    it("should add a cumulative score to the frame in the scoreboard - first ball bowled in third frame", function() {
      var board = [{frameTotal: 9, roll1: 7, roll2: 2, cumulativeTotal: 9}];
      board.push({frameTotal: 8, roll1: 6, roll2: 2, cumulativeTotal: 17});    
      board.push({frameTotal: 5, roll1: 5});
      managescores.refreshScores(board);
      expect(board[2].cumulativeTotal).toEqual(22);    
    });

    it("should add a cumulative score to the frame in the scoreboard - second ball bowled in third frame", function() {
      var board = [{frameTotal: 9, roll1: 7, roll2: 2, cumulativeTotal: 9}];
      board.push({frameTotal: 8, roll1: 6, roll2: 2, cumulativeTotal: 17});
      board.push({frameTotal: 6, roll1: 5, roll2: 1, cumulativeTotal: 22});
      managescores.refreshScores(board);
      expect(board[2].cumulativeTotal).toEqual(23);    
    });

  });

  describe("cumulative scores where spares have been scored in previous frames", function() {

    it("should add the score of the next bowl if a spare has been scored in the first frame", function() {
      var board = [{cumulativeTotal: 10, frameTotal: 10, roll1: 8, roll2: 2}];
      board.push({frameTotal: 5, roll1: 5});
      managescores.refreshScores(board);
      expect(board[0].frameTotal).toEqual(15);
      expect(board[0].cumulativeTotal).toEqual(15);
      expect(board[1].cumulativeTotal).toEqual(20);
    });

    it("should not add the score of the next bowl if a spare scored in first frame when doing the second ball of next frame", function() {
      var board = [{cumulativeTotal: 15, frameTotal: 15, roll1: 8, roll2: 2}];
      board.push({frameTotal: 7, roll1: 5, roll2: 2, cumulativeTotal: 20});
      managescores.refreshScores(board);
      expect(board[0].frameTotal).toEqual(15);
      expect(board[0].cumulativeTotal).toEqual(15);
      expect(board[1].cumulativeTotal).toEqual(22);
    });

    it("should add the score of the next bowl if a spare has been scored in the second frame", function() {
      var board = [{cumulativeTotal: 7, frameTotal: 7, roll1: 3, roll2: 4}];
      board.push({cumulativeTotal: 17, frameTotal: 10, roll1: 8, roll2: 2});
      board.push({frameTotal: 5, roll1: 5});
      managescores.refreshScores(board);
      expect(board[1].frameTotal).toEqual(15);
      expect(board[1].cumulativeTotal).toEqual(22);
      expect(board[2].cumulativeTotal).toEqual(27);
    });

    it("should not add the score of the next bowl if a spare scored in second frame when doing the second ball of next frame", function() {
      var board = [{cumulativeTotal: 7, frameTotal: 7, roll1: 3, roll2: 4}];
      board.push({cumulativeTotal: 22, frameTotal: 15, roll1: 8, roll2: 2});
      board.push({frameTotal: 6, roll1: 5, roll2: 1, cumulativeTotal: 27});
      managescores.refreshScores(board);
      expect(board[1].frameTotal).toEqual(15);
      expect(board[1].cumulativeTotal).toEqual(22);
      expect(board[2].cumulativeTotal).toEqual(28);
    });

  });

  describe("cumulative scores where stikes have been scored in previous frames", function() {

    it("should add the score of the next two rolls to the frame with the strike (assume not strike on next frame) - first ball", function() {
      var board = [{cumulativeTotal: 10, frameTotal: 10, roll1: 10}];
      board.push({frameTotal: 3, roll1: 3});
      managescores.refreshScores(board);
      expect(board[0].frameTotal).toEqual(13);
      expect(board[0].cumulativeTotal).toEqual(13);
      expect(board[1].cumulativeTotal).toEqual(16);
    });

    it("should add the score of the next two rolls to the frame with the strike (assume not strike on next frame) - second ball", function() {
      var board = [{cumulativeTotal: 13, frameTotal: 13, roll1: 10}];
      board.push({frameTotal: 7, roll1: 3, roll2: 4, cumulativeTotal: 16});
      managescores.refreshScores(board);
      expect(board[0].frameTotal).toEqual(17);
      expect(board[0].cumulativeTotal).toEqual(17);
      expect(board[1].cumulativeTotal).toEqual(24);
    });

    it("should add the scores of the next two rolls, third consecutive strike", function() {
      var board = [{cumulativeTotal: 20, frameTotal: 20, roll1: 10}];
      board.push({cumulativeTotal: 30, frameTotal: 10, roll1: 10});    
      board.push({frameTotal: 10, roll1: 10});
      managescores.refreshScores(board);
      expect(board[0].frameTotal).toEqual(30);
      expect(board[0].cumulativeTotal).toEqual(30);
      expect(board[1].frameTotal).toEqual(20);
      expect(board[1].cumulativeTotal).toEqual(50);
      expect(board[2].cumulativeTotal).toEqual(60);    
    });

    it("should add the score of the next two rolls to the frame with the strike (assume strike on next frame) - first ball", function() {
      var board = [{cumulativeTotal: 20, frameTotal: 20, roll1: 10}];
      board.push({cumulativeTotal: 30, frameTotal: 10, roll1: 10});
      board.push({frameTotal: 3, roll1: 3});
      managescores.refreshScores(board);
      expect(board[0].frameTotal).toEqual(23);
      expect(board[1].frameTotal).toEqual(13);
      expect(board[2].cumulativeTotal).toEqual(39);
    });

    it("should add the score of the next two rolls to the frame with the strike (assume strike on next frame) - second ball", function() {
      var board = [{cumulativeTotal: 23, frameTotal: 23, roll1: 10}];
      board.push({cumulativeTotal: 36, frameTotal: 13, roll1: 10});
      board.push({frameTotal: 7, roll1: 3, roll2: 4});
      managescores.refreshScores(board);
      expect(board[0].frameTotal).toEqual(23);
      expect(board[1].frameTotal).toEqual(17);
      expect(board[2].cumulativeTotal).toEqual(47);
    });

  });

  describe("high scoring games", function() {
  
    it("should score a perfect game of 300", function() {
      var board = rollPerfectGame();
      expect(board[9].cumulativeTotal).toEqual(300);
    });

    it("should not add the score of roll3 of frame 10 to the frame total of frame 9 if frame 9 is a strike", function() {
      var board = [{cumulativeTotal: 30, frameTotal: 20, roll1: 10}];
      board.push({cumulativeTotal: 50, frameTotal: 30, roll1: 10, roll2: 10, roll3: 10});
      managescores.refreshScores(board);
      expect(board[0].cumulativeTotal).toEqual(30);
      expect(board[1].cumulativeTotal).toEqual(60);      
    }); 

    it("should score a game where 5 pins are knocked down with each bowl as 150", function() {
      var board = rollFiveEachBall();
      expect(board[9].cumulativeTotal).toEqual(150);
    });
  
  });

});
