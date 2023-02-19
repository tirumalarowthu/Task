import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./Home.css"

const Home = () => {
  const history = useNavigate()

  const [inpval, setInpval] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [data, setData] = useState([])
  console.log(inpval)

  const getdata = (event) => {
    const { value, name } = event.target

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      }
    })
  }

  const addData = (event) => {
    event.preventDefault()

    const { name, email, password } = inpval

    if (name === '') {
      toast.error(' name field is requred!', {
        position: 'top-center',
      })
    } else if (email === '') {
      toast.error('email field is requred', {
        position: 'top-center',
      })
    } else if (!email.includes('@')) {
      toast.error('plz enter valid email address', {
        position: 'top-center',
      })
    } else if (password === '') {
      toast.error('password field is requred', {
        position: 'top-center',
      })
    } else if (password.length < 5) {
      toast.error('password length greater five', {
        position: 'top-center',
      })
    } else {
      console.log('data added succesfully')
      history('/login')
      localStorage.setItem('useryoutube', JSON.stringify([...data, inpval]))
    }
  }

  return (
    <>
      <div className="container">
        <section className="section-container">
          <div className="left_data">
            <h2 className="heading">Sign Up</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter Your email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="submitButton"
                onClick={addData}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="account">
              Already Have an Account{' '}
              <span>
                <NavLink className="signLink" to="/login">SignIn</NavLink>
              </span>{' '}
            </p>
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  )
}

export default Home
