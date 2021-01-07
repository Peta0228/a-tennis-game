# a-tennis-game
A web application with NodeJS,  Express, and Bootstrap3

This web application is made to keep track of tennis players scores.
When a game is played, the application can record the score and announce the winner.
The game starts right after the server is running, and it can be reset at any point by clicking the 'reset' button.

The following rules for the game are:

1. A game is won by the first player to have won at least four points in total and at least two points more than the opponent. 

2. The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as "0", "15", "30", and "40" respectively.

3. If at least three points have been scored by each player, and the scores are equal, the score is "Deuce".

4. If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is "Advantage" for the player in the lead.

## Techniques
### Front-end 
* Bootstrap3

### Back-end 
* NodeJS
* Express

## Prerequisites
    * NodeJS
    * nodemon (preferably) in global environment
    
## Get started
    * Open terminal in chosen directory
    * $ git clone https://github.com/Peta0228/a-tennis-game.git
    * $ cd a-tennis-game
    * Open two more terminals in the root directory
    * $ npm install
    * $ nodemon start
The project should start at https://localhost/3000

## Potential improvments
No database (such as MongoDB) was included in this application, however, further development may require adding a database at the backend.

The front-end technology was not up to date and may be upgraded in further development, using React should be a good choice.
