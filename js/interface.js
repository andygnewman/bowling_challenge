console.log("hello world");

  var scoreboard = new Scoreboard();
  var refreshscores = new RefreshScores();
  var rollTracker = new RollTracker();
  var scoreBoardTable = new ScoreBoardTable();

  var populateMaxScoreDropDown = function() {
    maxScoreDropDown = "";
    for (var i = 0; i <= this.rollTracker.tracker.maxRollScore; i++) {
    maxScoreDropDown += "<option value=" + i + ">" + i + "</option>";
    }
    return maxScoreDropDown; 
  }

  $(document).ready(function() {
  $('#score-dropdown').html($(populateMaxScoreDropDown()));
  $('#frame-number').text(rollTracker.tracker.frameNumber);
  $('#ball-number').text(rollTracker.tracker.rollNumber);

  
  $('#score-entry').on('submit', function(event) {
  event.preventDefault();
  var bowlScore = parseInt($("#score-dropdown option:selected").val());
  scoreboard.addBowlToScoreBoard(bowlScore, rollTracker.tracker.frameNumber, rollTracker.tracker.rollNumber);
  rollTracker.advanceRoll(bowlScore);
  refreshscores.refreshCumulativeScores(scoreboard.board);
  $('#score-board').html($(scoreBoardTable.returnScoreBoardHTML(scoreboard.board))); 
  $('#score-dropdown').html($(populateMaxScoreDropDown()));
  $('#frame-number').text(rollTracker.tracker.frameNumber);
  $('#ball-number').text(rollTracker.tracker.rollNumber); 
  });

});