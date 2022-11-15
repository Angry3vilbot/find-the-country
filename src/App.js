import './style.css'
import map from './map.jpg'
import React, { useEffect, useState } from 'react'
import {checkAnswer, countries} from './modules/Countries'
import Header from './modules/Header'
import Authentication from './Authentication'
import { doc, setDoc } from 'firebase/firestore/lite'
import { db } from './firebase'
import { Link } from 'react-router-dom'

function App({ totalTime, setTotalTime, }) {
  const [countryDisplay, setCountryDisplay] = useState(0)
  //adding the event listener after everything is rendered
  useEffect(() => {
    let img = document.querySelector('img')
    img.addEventListener('click', click)
  }, [])
  //check for loading
  if(Authentication.loading){
    return "authentication"
  }
  //question number and an array for keeping the questions
  let question = 0
  let doneQuestions = []
  //ticking timer handler
  function totalTimeTick(){
    setTotalTime(totalTime+1)
  }
  //timer for timeout
  let timer = setTimeout(totalTimeTick, 1000)
  //function for handling the clicks on the image
  function click(ev){
    ev.preventDefault()
    var result = checkAnswer(question, ev.offsetX, ev.offsetY) //function for checking the answer
    if(result === true){
      doneQuestions.push(question)
      if(doneQuestions.length === 40){
        clearTimeout(timer)
        let name = JSON.parse(localStorage.getItem('user'))
        let time = document.querySelector('[class="game-time"]').querySelector('p').innerText
        //log data to the database
        setDoc(doc(db, "userscores", `${name}`), {
          name: `${name}`,
          time: time
        });
        //display the overlay and congratulations
        let overlay = document.querySelector('[class="overlay hidden"]')
        let result = document.querySelector('[class="result hidden"]')
        let timeSpan = result.querySelector('span')
        timeSpan.innerText = time
        overlay.classList.remove('hidden')
        result.classList.remove('hidden')
      }
      //set the next question
      question++
      //display the question
      setCountryDisplay(question)
    }
  }
  //Here is what I came up with. I did not find a better way of doing it after about 6 hours of trying and failing
  //then to log the name to the storage,
  //and using the storage to display the name. However it does work well, so I roll with it
  return (
    <div className="App">
      <Header countryDisplay={countryDisplay} totalTime={totalTime} setTotalTime={setTotalTime}></Header>
      <section>
        <h1>{JSON.parse(localStorage.getItem('user'))}</h1>
        <div><h1>{countries[countryDisplay]}</h1></div>
      </section>
      <section className='game-map-section'>
        <img src={map} alt=''></img>
      </section>
      <div className='overlay hidden'></div>
      <div className='result hidden'>
        <h2>Congratulations!</h2>
        <p>You have located all of the countries in <span></span> seconds.</p>
        <Link to='/leaderboard'><button type='button'>Leaderboard</button></Link>
      </div>
    </div>
  );
}

export default App;
