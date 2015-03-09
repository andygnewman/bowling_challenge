# Bowling Scorecard Challenge

## Makers Academy Week 5 Weekend Challenge

Solo weekend challenge after first week of learning JavaScript, to create a single player ten pin bowling scorecard, operating client side.

### Technology used

- JavaScript
- Jasmine
- HTML
- CSS

![Bowling Scorecard Screenshot](https://github.com/andygnewman/bowling_challenge/blob/master/images/BowlingChallengeScreenshot.png)


### How to run the game

From the command line in the root of the project directory `$ open bowlingScorecard.html`

### How to run the tests

From the command line in the root of the project directory `$ open SpecRunner.html`

### Key Learnings
- Determining the "class" responsibilities, which we hadn't encountered in our JavaScript classroom learning.
- My model has
 - scoreBoard => manages the array of frames and adds new bowl scores to the board
 - manageScores => iterates over the scoreBoard updating frame scores for spares and strikes and cumulative totals
 - rollTracker => manages where in the game it is (frame number / roll number and max score permissible on next roll) 
 - scoreBoardTable => creates the html required to display the table in the interface
 - interface => captures the current roll score and marshalls the other objects
- Use of var in defining local variables - without var, JavaScript treats them as global (whereas Ruby treats them as local)
- Moustache / Handlebars would be a good library for generating templates (I had handcrafted the code to do this myself in scoreBoardTable)

It works to specified requirements*, with a front end.
* except for management of game over at the end of the tenth frame and display of possible bonus (roll 3) score on final frame.

### Further Development Opportunities

- implement 'game over' display
- improve display through using templating library such as handlebars
- revisit domain model to improve accountabilities of classes

## Makers Academy Week 5 Challenge Requirements

__Test time__: Friday, the entire day + the weekend if you need it
Feel free to use google, your notes, books, etc but work on your own
Task:

### Count and sum the scores of a bowling game of one player (in Javascript).

A bowling game consists of 10 frames in which the player tries to knock down 10 pins. In every frame the player can throw one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

#### Strikes

The player has a strike if she knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the _next two rolls._ That is the next frame, except if the player rolls a strike again.

#### Spares

The player has a spare if she knocks down all 10 pins with the two roles of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first role of next frame).

#### 10th frame

If the player rolls a strike or spare in the 10th frame she can roll the additional balls for the bonus. But she can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus- not for the regular frame count.

10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus)
1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus)
Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

#### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores to 300 points.
