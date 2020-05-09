import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [members, setMembers] = useState({
    name: '',
    email: '',
    role: '',
  })

  return (
    <Form members={members}/>
    );
}

export default App;
