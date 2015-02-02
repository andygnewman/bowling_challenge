var ScoreBoardTable = function() {

  ScoreBoardTable.prototype.returnScoreBoardHTML = function(board) {
    scoreBoardHTML = "<tr><td>Frame</td>";
    properties = Object.keys(board[0]).sort();
    for (var z = 0; z < properties.length; z++) {
      scoreBoardHTML += "<td>" + properties[z] +"</td>"; 
    }
    scoreBoardHTML += "</tr>";
    for (var i = 0; i < board.length; i++) {
      scoreBoardHTML += "<tr><td>" + (i + 1) + "</td>";
      frame = board[i];
      properties = Object.keys(frame).sort();
      for (var x = 0; x < properties.length; x++) {
        scoreBoardHTML += "<td>" + frame[properties[x]] + "</td>";
      } 
      scoreBoardHTML += "</tr>";
    }
    return scoreBoardHTML;
  }

};