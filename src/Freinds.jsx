import { useEffect, useState } from 'react'
import './Freinds.css'
import Freind from './Freind';
export default function Freinds(){

  const [freinds,setFreinds]= useState([]);

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFreinds(data))
  },[])

  return(
    <div className='box'>
          <h3>Freinds:{freinds.length}</h3>
          {
            freinds.map(freind => <Freind freind={freind}></Freind>)
          }
    </div>
  )
}

/**
 * 1. state decalre top hold data 
 * 2. useEffect with dependency Array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 5. display data to the component
 */