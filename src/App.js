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

  const addMember = (member) => setTeamList({...teamList, member})

  return (
    <div className='App'>
      <Form team={teamList}
        addMember={addMember}/>
    </div>
    );
}

export default App;
