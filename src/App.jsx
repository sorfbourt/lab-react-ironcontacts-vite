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
}

const sortByName = () =>{

const sortedList = contactList.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }

    return 0;
  });

  setcontactList([...sortedList])
  

}
const sortByPopularity = () =>{
  const sortedList = contactList.sort((a, b) => b.popularity - a.popularity);
  setcontactList([...sortedList])
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
  <button onClick={sortByName}>Sort by name</button>
  <button onClick={sortByPopularity}>Sort by popularity</button>

  </div>
}
export default App