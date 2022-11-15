import React, { useEffect, useRef } from 'react'
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore/lite";
import { db } from '../firebase';
import '../leaderboard.css'
//get data from the database
const q = query(collection(db, "userscores"), orderBy("time", "asc"), limit(10));
const querySnapshot = await getDocs(q);

export default function Leaderboard() {
    //wait until the data is aquired
    const dataHasBeenRendered = useRef(false)
    useEffect(() => {
        if(dataHasBeenRendered.current){
            return
        }
        //display each of the logged results
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let leaderboard = document.querySelector('[class="leaderboard"]')
            let time = document.createElement('p')
            let name = document.createElement('h5')
            name.innerHTML = doc.data().name
            time.innerHTML = `${doc.data().time} seconds`
            let leader = document.createElement('div')
            leader.append(name, time)
            leaderboard.appendChild(leader)
            console.log(doc.id, " => ", doc.data());
            dataHasBeenRendered.current = true
        });
    }, [])
  return (
    <div className='leaderboard-container'>
        <h1>Leaderboard</h1>
        <div className='leaderboard'>

        </div>
    </div>
  )
}
