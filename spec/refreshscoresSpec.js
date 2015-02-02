describe("a scoreboard refresh of cumulative scores", function() {

  beforeEach(function() {
    refreshscores = new RefreshScores();
  });

  // var rollPerfectGame = function() {
  //   score.board = [{frameTotal:10, roll1: 10, roll2: 0}];
  //   score.refreshCumulativeScores();
  //   for (var i = 0; i < 8; i++) {
  //     score.board.push({frameTotal:10, roll1: 10, roll2: 0});
  //     score.refreshCumulativeScores();
  //   }
  //   score.board[9] = {frameTotal:10, roll1: 10, roll2: 10};
  //   score.refreshCumulativeScores();
  //   score.board[9] = {frameTotal:10, roll1: 10, roll2: 10, roll3: 10};
  //   score.refreshCumulativeScores();
  // }

  //   var rollFiveEachBall = function() {
  //   score.board = [{frameTotal:5, roll1: 5, roll2: 0}];
  //   score.refreshCumulativeScores();
  //   score.board[0] = {frameTotal:10, roll1: 5, roll2: 5};
  //   score.refreshCumulativeScores();
  //   for (var i = 0; i < 9; i++) {
  //     score.board.push({frameTotal:5, roll1: 5, roll2: 0});
  //     score.refreshCumulativeScores();
  //     score.board[score.board.length -1] = {frameTotal:10, roll1: 5, roll2: 5};
  //     score.refreshCumulativeScores();
  //   }
  //   score.board[9] = {frameTotal:15, roll1: 5, roll2: 5, roll3: 5};
  //   score.refreshCumulativeScores();
  // }

  it("should add a cumulative score to the frame in the scoreboard - one ball bowled in frame", function() {
    board = [{frameTotal: 7, roll1: 7, roll2: 0}];
    refreshscores.refreshCumulativeScores(board);
    expect(board[0].cumulativeTotal).toEqual(7);    
  });

  // it("should add a cumulative score to the frame in the scoreboard - second ball bowled in frame", function() {
  //   score.board = [{frameTotal: 9, roll1: 7, roll2: 2}];
  //   score.refreshCumulativeScores();
  //   expect(score.board[0].cumulativeTotal).toEqual(9);    
  // });

  // it("should add a cumulative score to the frame in the scoreboard - first ball bowled in second frame", function() {
  //   score.board = [{frameTotal: 9, roll1: 7, roll2: 2, cumulativeTotal: 9} ]
  //   score.board.push({frameTotal: 6, roll1: 6, roll2: 0});
  //   score.refreshCumulativeScores();
  //   expect(score.board[1].cumulativeTotal).toEqual(15);    
  // });

  // it("should add a cumulative score to the frame in the scoreboard - second ball bowled in second frame", function() {
  //   score.board = [{frameTotal: 9, roll1: 7, roll2: 2, cumulativeTotal: 9}];
  //   score.board.push({frameTotal: 8, roll1: 6, roll2: 2});
  //   score.refreshCumulativeScores();
  //   expect(score.board[1].cumulativeTotal).toEqual(17);    
  // });

  // it("should add a cumulative score to the frame in the scoreboard - first ball bowled in third frame", function() {
  //   score.board = [{frameTotal: 9, roll1: 7, roll2: 2, cumulativeTotal: 9}];
  //   score.board.push({frameTotal: 8, roll1: 6, roll2: 2, cumulativeTotal: 17});    
  //   score.board.push({frameTotal: 5, roll1: 5, roll2: 0});
  //   score.refreshCumulativeScores();
  //   expect(score.board[2].cumulativeTotal).toEqual(22);    
  // });

  // it("should add a cumulative score to the frame in the scoreboard - second ball bowled in third frame", function() {
  //   score.board = [{frameTotal: 9, roll1: 7, roll2: 2, cumulativeTotal: 9}];
  //   score.board.push({frameTotal: 8, roll1: 6, roll2: 2, cumulativeTotal: 17});
  //   score.board.push({frameTotal: 6, roll1: 5, roll2: 1});
  //   score.refreshCumulativeScores();
  //   expect(score.board[2].cumulativeTotal).toEqual(23);    
  // });


  // it("should add the score of the next bowl if a spare has been scored in the first frame", function() {
  //   score.board = [{cumulativeTotal: 10, frameTotal: 10, roll1: 8, roll2: 2}];
  //   score.board.push({frameTotal: 5, roll1: 5, roll2: 0});
  //   score.refreshCumulativeScores();
  //   expect(score.board[0].frameTotal).toEqual(15);
  //   expect(score.board[0].cumulativeTotal).toEqual(15);
  //   expect(score.board[1].cumulativeTotal).toEqual(20);
  // });

  // it("should not add the score of the next bowl if a spare scored in first frame when doing the second ball of next frame", function() {
  //   score.board = [{cumulativeTotal: 15, frameTotal: 15, roll1: 8, roll2: 2}];
  //   score.board.push({frameTotal: 7, roll1: 5, roll2: 2});
  //   score.refreshCumulativeScores();
  //   expect(score.board[0].frameTotal).toEqual(15);
  //   expect(score.board[0].cumulativeTotal).toEqual(15);
  //   expect(score.board[1].cumulativeTotal).toEqual(22);
  // });

  // it("should add the score of the next bowl if a spare has been scored in the second frame", function() {
  //   score.board = [{cumulativeTotal: 7, frameTotal: 7, roll1: 3, roll2: 4}];
  //   score.board.push({cumulativeTotal: 17, frameTotal: 10, roll1: 8, roll2: 2});
  //   score.board.push({frameTotal: 5, roll1: 5, roll2: 0});
  //   score.refreshCumulativeScores();
  //   expect(score.board[1].frameTotal).toEqual(15);
  //   expect(score.board[1].cumulativeTotal).toEqual(22);
  //   expect(score.board[2].cumulativeTotal).toEqual(27);
  // });

  // it("should not add the score of the next bowl if a spare scored in second frame when doing the second ball of next frame", function() {
  //   score.board = [{cumulativeTotal: 7, frameTotal: 7, roll1: 3, roll2: 4}];
  //   score.board.push({cumulativeTotal: 22, frameTotal: 15, roll1: 8, roll2: 2});
  //   score.board.push({frameTotal: 6, roll1: 5, roll2: 1});
  //   score.refreshCumulativeScores();
  //   expect(score.board[1].frameTotal).toEqual(15);
  //   expect(score.board[1].cumulativeTotal).toEqual(22);
  //   expect(score.board[2].cumulativeTotal).toEqual(28);
  // });

  // it("should add the score of the next two rolls to the frame with the strike (assume not strike on next frame) - first ball", function() {
  //   score.board = [{cumulativeTotal: 10, frameTotal: 10, roll1: 10, roll2: 0}];
  //   score.board.push({frameTotal: 3, roll1: 3, roll2: 0});
  //   score.refreshCumulativeScores();
  //   expect(score.board[0].frameTotal).toEqual(13);
  //   expect(score.board[0].cumulativeTotal).toEqual(13);
  //   expect(score.board[1].cumulativeTotal).toEqual(16);
  // });

  // it("should add the score of the next two rolls to the frame with the strike (assume not strike on next frame) - second ball", function() {
  //   score.board = [{cumulativeTotal: 13, frameTotal: 13, roll1: 10, roll2: 0}];
  //   score.board.push({frameTotal: 7, roll1: 3, roll2: 4});
  //   score.refreshCumulativeScores();
  //   expect(score.board[0].frameTotal).toEqual(17);
  //   expect(score.board[0].cumulativeTotal).toEqual(17);
  //   expect(score.board[1].cumulativeTotal).toEqual(24);
  // });

  // it("should add the scores of the next two rolls, third consecutive strike", function() {
  //   score.board = [{cumulativeTotal: 20, frameTotal: 20, roll1: 10, roll2: 0}];
  //   score.board.push({cumulativeTotal: 30, frameTotal: 10, roll1: 10, roll2: 0});    
  //   score.board.push({frameTotal: 10, roll1: 10, roll2: 0});
  //   score.refreshCumulativeScores();
  //   expect(score.board[0].frameTotal).toEqual(30);
  //   expect(score.board[0].cumulativeTotal).toEqual(30);
  //   expect(score.board[1].frameTotal).toEqual(20);
  //   expect(score.board[1].cumulativeTotal).toEqual(50);
  //   expect(score.board[2].cumulativeTotal).toEqual(60);    
  // });

  // it("should add the score of the next two rolls to the frame with the strike (assume strike on next frame) - first ball", function() {
  //   score.board = [{cumulativeTotal: 20, frameTotal: 20, roll1: 10, roll2: 0}];
  //   score.board.push({cumulativeTotal: 30, frameTotal: 10, roll1: 10, roll2: 0});
  //   score.board.push({frameTotal: 3, roll1: 3, roll2: 0});
  //   score.refreshCumulativeScores();
  //   expect(score.board[0].frameTotal).toEqual(23);
  //   expect(score.board[1].frameTotal).toEqual(13);
  //   expect(score.board[2].cumulativeTotal).toEqual(39);
  // });

  // it("should add the score of the next two rolls to the frame with the strike (assume strike on next frame) - second ball", function() {
  //   score.board = [{cumulativeTotal: 23, frameTotal: 23, roll1: 10, roll2: 0}];
  //   score.board.push({cumulativeTotal: 36, frameTotal: 13, roll1: 10, roll2: 0});
  //   score.board.push({frameTotal: 7, roll1: 3, roll2: 4});
  //   score.refreshCumulativeScores();
  //   expect(score.board[0].frameTotal).toEqual(23);
  //   expect(score.board[1].frameTotal).toEqual(17);
  //   expect(score.board[2].cumulativeTotal).toEqual(47);
  // });

  // it("should score a perfect game of 300", function() {
  //   rollPerfectGame();
  //   expect(score.board[9].cumulativeTotal).toEqual(300);
  // });

  // it("should score a game where 5 pins are knocked down with each bowl as 150", function() {
  //   rollFiveEachBall();
  //   console.log(score.board);
  //   expect(score.board[9].cumulativeTotal).toEqual(150);
  // });

});
