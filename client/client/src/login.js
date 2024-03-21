import React from 'react'

function Login() {



  return (
    <div>
      <div className="he">
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
            Login
          </button>
          <h6>Already have an account?</h6>
          <h6>login</h6>
        </form>
      </div>
    </div>
  )
}

export default Login
