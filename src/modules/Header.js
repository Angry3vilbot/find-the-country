import { BiTimer } from 'react-icons/bi'
import '../style.css'
function Header({score, totalTime, setTotalTime, roundTime, setRoundTime}){
    //header code
    return(
        <header>
            <div className="game-time">
              <BiTimer></BiTimer>
              <p>{totalTime}</p>
           </div>
        </header>
    )
}
export default Header