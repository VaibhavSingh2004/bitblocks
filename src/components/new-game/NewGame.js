import './NewGame.css'

const NewGame = ({reset}) =>
    <div className='button-wrapper'>
        <button onClick={reset} className='newgamebtn'>New Game</button>
    </div>

export default NewGame

