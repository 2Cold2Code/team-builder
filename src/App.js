import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
 
  const [teamList, setTeamList] = useState([
    {
      name: '',
      email: '',
      role: '',
    }
  ]);
console.log('This is before addMember() ', teamList)
const addMember = (member) => {
  setTeamList({...teamList, member})
  console.log('This is teamList in addMember(): ', teamList)
} 

  return (
    <div className='App'>
      <Form teamList={teamList}
        addMember={addMember}
        setTeamList={setTeamList}/>
    </div>
    );
}

export default App;
