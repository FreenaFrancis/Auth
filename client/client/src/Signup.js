import React, { useState } from 'react'

function Signup() {
const[name,setName] = useState();
const[email,setEmail]=useState();
const[password,setPassword]=useState()

const handleSubmit = (e) =>{
e.preventDefault();
}
const handleName =(e) => setName(e.target.value);
const handleEmail= (e) => setEmail(e.target.value);
const handlePassword =(e) => setPassword(e.target.value);
  return (
    <div>
       <div className="hi">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="txt_field">
            <label>Name:</label>
            <input type="text" placeholder="Name" onChange={handleName} value={name} />
          </div>
          <div className="txt_field">
            <label>Email:</label>
            <input type="text" placeholder="Email" onChange={handleEmail} value={email} />
          </div>
          <div className="txt_field">
            <label>Password:</label>
            <input type="password" placeholder="Password" onChange={handlePassword} value={password} />
          </div>
          <button className="but" type="submit">
            Register
          </button>
          <h6>Already have an account?</h6>
          <h6>login</h6>
        </form>
      </div>
    </div>
  )
}

export default Signup
