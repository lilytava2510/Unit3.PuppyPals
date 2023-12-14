import { useState } from 'react'
import './App.css'
import { puppyList } from './data'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
console.log("featured Pup:", featuredPup);
  console.log("puppies:", puppies)
  return (
  <>


     <h4>Selected a puppy below to email!</h4>
      <div className='puppyList'>{puppies.map((puppy)=> {
        return <p onClick={() =>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
      })}
      { featPupId && <p> {featPupId }</p> }
      </div> 


      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}


  </>
     
  
  )
}

export default App
