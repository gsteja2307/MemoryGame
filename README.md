# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
****************************************************************************************************************************************************
How the Game Works
The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!

Each turn:

The player flips one card over to reveal its underlying symbol.
The player then turns over a second card, trying to find the corresponding card with the same symbol.
If the cards match, both cards stay flipped over.
If the cards do not match, both cards are flipped face down.
The game ends once all cards have been correctly matched.
****************************************************************************************************************************************************
Game Functionality
The real-life game, players flip over cards to locate the pairs that match The goal is to recreate this effect in your project. There are a couple of interactions that you'll need to handle:

Flipping cards
What happens when cards match
What happens when cards do not match
When the game finishes
Below are some examples of how we implemented these interactions.
****************************************************************************************************************************************************
Start by building a grid of cards. The rest of your game's functionality depends on this grid.

How many total pairs of cards would you have?
Take a quick look at all the HTML elements in index.html. Note the values for their class attributes. To manipulate the DOM, you'll be using many of the tools and methods you've learned on these elements (and on those that you will create)
Which data structure can you use to store these individual cards? This data structure can represent your entire list of cards, so it might be a good idea to save it to a variable
How you would iterate (i.e., loop) over this data structure?
Think about how you can create, say, an unordered list (i.e., bulleted list) in HTML from this structure
Are your cards randomly placed onto the grid? Note that the provided shuffle() function takes in an array parameter, and returns a shuffled version of that array
Figure out the HTML needed to represent a card. Remember, you have to represent two sides of the card, and the symbols are faced down
How can you use CSS properties like transform or opacity to represent the sides of a card?
Add the functionality to handle clicks. This should reveal the "hidden" side of each card. Clicking on the first card should turn it over, show the symbol, and remain turned over. Clicking on a different card must also turn it over and show the symbol.

Which event are you listening for (hint: you were just reading it)?
How can that event affect CSS? Hint: Look at the static page (index.html) provided in the starter code. Pay special attention to the class values on open/shown cards, matched cards, and the rest of the cards (i.e., those without their symbols shown). Which classList methods can you use to change the value of an element's class upon that event happening?
Recall what you know about event delegation. Rather than adding an event listener to each individual card (which can be a costly operation), is there a way to add just one to a common parent node? Take a closer look at index.html to see which node that could be
Toggling cards will happen pretty often in this game. To keep your code clean and DRY, consider refactoring this operation into its own function
Work on the matching logic. At this point, your users can flip over cards on the grid! Now the question is: how does your game "know" if a player guesses correctly or incorrectly?

Think about how you can temporarily store opened cards. After all, one card turned over needs to be compared to another card turned over. Which data structure would be great to temporarily hold these turned-over cards? Make sure this data structure doesn't hold too many cards! We're only looking for a match between two cards; it wouldn't make sense to store and compare, say, three cards at the same time
How can you prevent the user from selecting the same card twice?
When comparing two different cards for a match, what exactly can you compare? (hint: open up index.html and look at the child of each <li> element)
If the two cards match, they stay turned over
How does a match affect the class of these cards? (hint: check the class values of the two matched cards in the static index.html file from the starter code)
If the two cards do not match, they turn back
How does this affect the data structure that temporarily stored these cards?
All this logic to match cards seems like it'll be used quite often. Consider refactoring the code for checking for a match into its own function
Create the winning condition. How does your game “know” if a player has won?

Your user should see a modal when the game ends
What information can this modal show? See below!
Implement additional functionality:

Move counter. The game should display the number of moves the player has made
Declaring a variable with an initial value 0 is a good start
How can you use innerHTML to actually display that value?
Timer. This timer should start when the player starts a game, and end when the player wins the game
Hint: How can setTimeout() come into play here?
Star rating. The player should begin with a certain number of stars displayed on the screen. The number of moves made during the game should visually decrease this star rating
Hint: You'll probably want to build this only after you've build the move counter
Reset button. This should allow the player to reset the entire grid as well as all the above
We recommend saving most of the styling until the very end. Allow your game logic and functionality to dictate the styling.
