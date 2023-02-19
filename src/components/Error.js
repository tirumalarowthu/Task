import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Error.css"

const Error = () => {
    const history = useNavigate();

  return (
    <>
      <div className='container'>
          <div className="error-container">
              <h2 className='error-heading'>404 Error ! Page Not Found 😭</h2>
              <button className='redirect-button btn btn-primary' onClick={()=>history("/")}>Redirect Login Page</button>
          </div>
      </div>
    </>
  )
}

export default Error