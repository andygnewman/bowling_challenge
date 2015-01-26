describe("a roll", function() {

    var roll;

  it("asks the player how many pins were knocked down", function() {
    roll = new Roll();
    spyOn(roll, 'capturePinsDown')
    roll.pinsDownOnRoll(1);
    expect(roll.capturePinsDown).toHaveBeenCalled();
  });

});