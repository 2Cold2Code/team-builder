import React from "react";


function Form(props) {
  console.log('Props from Form.js: ', props);
 
  const handleChange = (event) => props.setTeamList([{
      ...props.teamList,
      [event.target.name]: event.target.value
  }]);
  return (
    <form
    style={{
      backgroundColor: "#2489df",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "#0de987",
      }}
      onSubmit={event=>{
        event.preventDefault()
        // props.setTeamList({name: '', email: '', role: ''})
      }
    }
    >
      <label htmlFor='name'>
          Name:
      </label>
       <input 
        name='name' 
        type="text"
        value={props.teamList.name}
        onChange={handleChange}
        />
        
      <label htmlFor='email'>
          Email:
      
      </label>
      <input 
        name='email' 
        type="email" 
        value={props.teamList.email}
        onChange={handleChange}
      
        />
      <label htmlFor='role'>
          Role:
      </label>
      <input 
        name='role'
        type="textarea" 
        value={props.teamList.role}
        onChange={handleChange}
        />
      <button type='submit' >Submit</button>
    </form>
  );
}

export default Form;
