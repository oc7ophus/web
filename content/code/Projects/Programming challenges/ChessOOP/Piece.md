
Piece object
- Stores piece information
	- Color, Type, Value



Pawn object

```java
class Pawn {
    private PawnState state = new InitialPawnState();
    
    public void getMoves(Board board) {
        state.getPossibleMoves(this, board);
    }
	
    public void promote() {
        this.state = new PromotionState();
    }
}

doThis():
	move(pawn)
	pawn.changeState(state)

```

PieceState

```java
interface PieceState {
	List<Move> getPossibleMoves(pawn, board)
}

class InitialPawnState {
    List<Move> getPossibleMoves(pawn, board) {
        // ...
    }
}

/**
 * Pawn
 * 
 */


```

MoveStrategy

```java
// Parent

	interface MoveStrategy {
	    List<Move> getPossibleMoves(position, board);
	}

// Children

	class DiagonalStrategy {
	    List<Move> getPossibleMoves(position, board) {
	        // ..
	    }
	}
	
	class CardinalStrategy {
	    List<Move> getPossibleMoves(position, board) {
	        // ..
	    }
	}

```


PieceBuilder

```
strategyMoveDiagonal()
strategyMoveCardinal()

strategyMoveKing()
strategyMoveKnight()
strategyMovePawn()

stateIsRoyal() // checks

strategyCastleRook()
strategyCastleKing()

strategyPawnDoubleStart()
strategyPawnPromote()
strategyPawnEnPassant()
strategyPawnCapture()


---

getPiece(): Pawn

	movePawn()
	pawnDoubleStart()
	pawnCapture()
	pawnPromote()
	pawnEnPassant()

getPiece(): Queen

	moveDiagonal()
	moveCardinal()

getPiece(): Knight

	moveKnight()

```

PieceDirector

```
layoutStandard()
	
	board[2][2] = getPiece(Pawn)
	// ...


```



