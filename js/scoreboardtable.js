var ScoreBoardTable = function() {



  ScoreBoardTable.prototype.returnScoreBoardHTML = function(board) {
    scoreBoardHTML = "<tr><td>Frame</td>";
    for (var property in board[0]) {
      scoreBoardHTML += "<td>" + property +"</td>"; 
    }
    scoreBoardHTML += "</tr>";
    for (var i = 0; i < board.length; i++) {
      scoreBoardHTML += "<tr><td>" + (i + 1) + "</td>";
      frame = board[i];
      for (var property in frame) {
        scoreBoardHTML += "<td>" + frame[property] + "</td>";
      } 
      scoreBoardHTML += "</tr>";
    }
    return scoreBoardHTML;
  }

};