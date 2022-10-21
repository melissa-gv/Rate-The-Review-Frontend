import React from "react";
import { useState } from 'react'

const Login = () => {
  // const [count, setCount] = useState(0)

  return (
    <div className='col-lg-6 offset-lg-3'>
      <h2>Login</h2>

      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  );
};

export default Login;
