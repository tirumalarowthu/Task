import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./Login.css"

const Login = () => {
  const history = useNavigate()

  const [inpval, setInpval] = useState({
    email: '',
    password: '',
  })

  const [data, setData] = useState([])
  console.log(inpval)

  const getdata = (event) => {
    const { value, name } = event.target
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      }
    })
  }

  const gotoSignUpPage = () => {
    history('/')
  }

  const addData = (event) => {
    event.preventDefault()

    const getuserArr = localStorage.getItem('useryoutube')
    console.log(getuserArr)

    const { email, password } = inpval
    if (email === '') {
      toast.error('email field is requred', {
        position: 'top-center',
      })
    } else if (!email.includes('@')) {
      toast.error('plz enter valid email addres', {
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
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr)
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password
        })

        if (userlogin.length === 0) {
          alert('invalid details')
        } else {
          console.log('user login succesfulyy')

          localStorage.setItem('user_login', JSON.stringify(userlogin))

          history('/details')
        }
      }
    }
  }

  return (
    <>
      <div className="container">
        <section className="section-container">
          <div className="left_data">
            <h2 className="heading">Sign In</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
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
              <div className='btn-container'>
              <Button
                variant="primary"
                className="submitButton"
                onClick={addData}
                type="submit"
              >
                Submit
              </Button>
              <div>
                <Button
                  variant="primary"
                  className="signupButton"
                  onClick={gotoSignUpPage}
                  type="submit"
                >
                  Back To SignUp Page
                </Button>
              </div>
              </div>
            </Form>
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  )
}

export default Login
