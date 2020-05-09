import React from "react";


function Form(props) {
  console.log('Props from Form.js: ', props);
 
  const handleChange = (event) => props.setTeamList({
      ...props.team,
      [event.target.name]: event.target.value
  });

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
          props.setTeamList({name: '', email: '', role: ''})
        }
        }
    >
      <label htmlFor='name'>
          Name:
      </label>
       <input 
        name='name' 
        type="text"
        value={props.team.name}
        onChange={handleChange}
        />
        
      <label htmlFor='email'>
          Email:
      
      </label>
      <input 
        name={props.team.email} 
        type="email" 
        value={props.team.email}
        onChange={handleChange}
      />
      <label htmlFor='role'>
          Role:
      </label>
      <input 
        name={props.team.role} 
        type="textarea" 
        value={props.team.role}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default Form;
