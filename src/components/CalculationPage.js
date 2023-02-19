import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './CalculationPage.css'

const CalculationPage = () => {
  const [value, setValue] = useState('')
 
  const getInputValue = (event) => {
    setValue(event.target.value)
  }
  const getNumValue = () => {
    let numList = []

    function mat(numList) {
      let num1 = numList[0]
      let operatorMath = numList[1]
      let num2 = numList[2]
      if (operatorMath === '/') {
        return Math.floor(num2 / num1)
      } else if (operatorMath === '-') {
        return num2 - num1
      } else if (operatorMath === '*') {
        return num2 * num1
      } else {
        return num2 + num1
      }
    }

    function zero(x = 0) {
      numList.push(0)
      if (x.length < 3) {
        return
      } else {
        return mat(numList)
      }
    }

    function one(x = 1) {
      numList.push(1)
      if (x.length < 3) {
        return
      } else {
        return mat(numList)
      }
    }

    function two(x = 2) {
      numList.push(2)
      if (x.length < 3) {
        return
      } else {
        return mat(numList)
      }
    }

    function three(x = 3) {
      numList.push(3)
      if (x.length < 3) {
        return
      } else {
        return mat(numList)
      }
    }

    function four(x = 4) {
      numList.push(4)
      if (x.length < 3) {
        return
      } else {
        return mat(numList)
      }
    }

    function five(x = 5) {
      numList.push(5)
      if (x.length < 3) {
        return
      } else {
        return mat(numList)
      }
    }

    function six(x = 6) {
      numList.push(6)
      if (x.length < 3) {
        return
      } else {
        return mat(numList)
      }
    }

    function seven(x = 7) {
      numList.push(7)
      if (x.length < 3) {
        return
      } else {
        return mat(numList)
      }
    }

    function eight(x = 8) {
      numList.push(8)
      if (x.length < 3) {
        return
      } else {
        return mat(numList)
      }
    }

    function nine(x = 9) {
      numList.push(9)
      if (x.length < 3) {
        return
      } else {
        return mat(numList)
      }
    }

    function divided_by(x = '/') {
      numList.push('/')
    }

    function plus(x = '+') {
      numList.push('+')
    }

    function minus(x = '-') {
      numList.push('-')
    }

    function times(x = '*') {
      numList.push('*')
    }

    let a = eval(value)
    if (value === '') {
      let paraEl = document.getElementById('result')
      paraEl.classList.add('d-block', 'error')
      paraEl.classList.remove('d-none')
      paraEl.textContent = '*Please give the Valid Input Value'
    } else {
      let paraEl = document.getElementById('result')
      paraEl.classList.add('d-block', 'result-design')
      paraEl.classList.remove('d-none')
      paraEl.textContent = `Result:  ${a}`
    }
    console.log(a)
  }

  const history = useNavigate()

  const gotoSignInPage = () => {
    localStorage.removeItem('user_login')
    history('/')
  }
  
  return (
    <div className="main-page-container">
      <p className="calculation-heading">Get the Calculations</p>

      <input
        type="text"
        className="input-design"
        onChange={getInputValue}
        placeholder="Eg: eight(plus(two()))"
      />
      <p id="result" className="d-none resultVal"></p>
      <div className='button-container'>
        <div className='singlebutton-container'>
          <button onClick={getNumValue} className="button-edit bg-info">
            Get Result
          </button>
        </div>
        <div className="logout-button singlebutton-container">
          <button className="button-edit logout" onClick={gotoSignInPage}>
            {' '}
            Logout{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CalculationPage
