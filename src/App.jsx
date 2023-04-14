import { useState } from 'react'
import './index.css'


const turnos = {
  X:"X",
  O:"O"
}



const Square =  ({children,isSelected, updateBoard,index})=>{
  const className = `square ${isSelected ? 'is-selected' : ''}` 
   
  const hangClick =()=>{
    updateBoard(index)
  }
    return (
      <div onClick={hangClick} className={className}>
        {children}
      </div>
    )
}
const combo_Winner =[
  [0 , 1, 2],
  [3, 4, 5],
  [6, 7 ,8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]


function App() {

  const [turn, setTurn] = useState(turnos.X)
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null)

  const resetGame =()=>{
    setBoard(Array(9).fill(null));
    setTurn(turnos.X)
    setWinner(null)

  }

const checkWinner = (boardCheck)=>{
  for(const combo of combo_Winner){
    const[a,b,c] = combo
    if(boardCheck[a] && boardCheck[a] === boardCheck[b]&& boardCheck[a]=== boardCheck[c])
    {
      return boardCheck[a]
    }
  }
}

const checkGame= (newBoard)=>{
  return newBoard.every((square)=> square !== null)
}

  const updateBoard = (index)=>{
    if(board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === turnos.X ? turnos.O : turnos.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard);
    if(newWinner)
    {
      setWinner(newWinner)
    }
    else if(checkGame(newBoard)){
      setWinner(false)

    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
         {
          board.map((cell, index)=>{ 
            return(
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}>
               {board[index]}
              </Square>
            )

          })
         }
      </section> 

      <section className='turn'>
        <Square isSelected = {turn === turnos.X}>{turnos.X}</Square>
        <Square isSelected = {turn === turnos.O}>{turnos.O}</Square>

      </section>

      <button onClick={resetGame}>Empezar de nuevo</button>

      {
        winner !== null &&
        ( 
          <section className='winner'>
            <div className="text">
              <h2>
                {
                  winner === false 
                  ? 'Empate':
                  'Gano'
                }
              </h2>
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>

        )
      }
    </main>
  )
}

export default App
