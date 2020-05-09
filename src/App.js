import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

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
