// src/App.js
import './App.css'
import contacts from "./contacts.json"
import { useState } from 'react'

function App() {

const [contactList, setcontactList] = useState(contacts.slice(0,5))
const [remainingContacts, setRemainingContacts] = useState(contacts.slice(6))


const addRandom = () =>{

  const randomIndex = Math.floor(Math.random() * (remainingContacts.length))
  const randomContact = remainingContacts[randomIndex]
  setcontactList([...contactList, randomContact])
  let filteredArr = remainingContacts.filter((el, index) =>{
    return el.name !== randomContact.name
  })
  setRemainingContacts(filteredArr)
  console.log("contactList:", contactList)
  console.log("remainingContacts:", remainingContacts)
}

  return <div className='App'>

<table>
  <thead>
   <tr>
   <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Won an Oscar</th>
    <th>Won an Emmy</th>
   </tr>
  </thead>
  <tbody>
{contactList.map(celebrity => (
  <tr key={celebrity.name}>
    <td><img width="50" alt={celebrity.name} src={celebrity.pictureUrl}></img></td>
    <td>{celebrity.name}</td>
    <td>{celebrity.popularity.toFixed(2)}</td>
    <td>{celebrity.wonOscar ? "🏆" : ""}</td>
    <td>{celebrity.wonEmmy ? "🏆" : ""}</td>
  </tr>
))}

  </tbody>
  </table>

  <button onClick={addRandom}>Add Random Contact</button>

  </div>
}
export default App