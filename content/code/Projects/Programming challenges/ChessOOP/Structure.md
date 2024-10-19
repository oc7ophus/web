
## Design patterns

Chain of responsibility

Engine chain

Move
- Can the piece legally move to the target square without any special considerations?
Check
- Will moving the piece out of the way put the king in check?

---

Input handling chain

Command
- Did the player use a command?
Input
- Did the player input something that could be a possible move?
Parser
- Translate chess notation to move data
Basic Validation
- Is the target square free?
- Does the move defend check?
Piece Validation
- Is there a piece that can legally move to the target square?



`Board`
- Stores & Displays:
	- piece positions
	- gamestate
	- history
	- errors
	- turnColor (move in progress' color)
- Moves pieces


- `Engine`
	- Determines:
		- legal moves
		- check & checkmate
		- pins
- `Parser`
	- Handles user i/o
- `Notation`
	- Converts to and from strings
	- Stores and handles chess notations

\> nf6
Parser (Prompt) -> Notation (Interpret) -> Engine (Validate) -> Board (Display)



