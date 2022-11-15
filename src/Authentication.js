import React, { useState } from 'react'
import { logIn, registerAccount, auth } from './firebase'
import { onAuthStateChanged } from "firebase/auth";
import './style.css'
import { Navigate } from 'react-router-dom';

function Authentication() {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    //show login form and hide the register one
    function revealLogin(ev){
        ev.preventDefault()
        document.querySelector('[class="register"]').classList.add('hidden')
        document.querySelector('[class="login hidden"]').classList.remove('hidden')
    }
    //show register form and hide the login one
    function revealRegister(ev){
        ev.preventDefault()
        document.querySelector('[class="register hidden"]').classList.remove('hidden')
        document.querySelector('[class="login"]').classList.add('hidden')
    }
    function handleLogin(ev){
        ev.preventDefault()
        const email = ev.target.email.value
        const password = ev.target.password.value
        logIn(email, password)
    }
    function handleRegister(ev){
        ev.preventDefault()
        const email = ev.target.email.value
        const password = ev.target.password.value
        const passwordConfirm = ev.target.passwordConfirm.value
        registerAccount(email, password, passwordConfirm)
    }
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
          setLoading(false)
          localStorage.setItem('user', JSON.stringify(user.email.split('@')[0]))
        }
      });
  return (
    <div className='authContainer'>
        {user && (
          <Navigate to="/game" currentUser={user} replace={true} />
        )}
        <div className='register'>
            <form onSubmit={handleRegister}>
                <label htmlFor='email'>Email</label>
                <input name='email' type={'email'} required></input>
                <label htmlFor='password'>Password</label>
                <input name='password' type={'password'} required></input>
                <label htmlFor='passwordConfirm'>Confirm Password</label>
                <input name='passwordConfirm' type={'password'} required></input>
                <input type={'submit'} value='Register'></input>
            </form>
            <div>Already have an account? <a onClick={revealLogin}>Log in</a></div>
        </div>
        <div className='login hidden'>
            <form onSubmit={handleLogin}>
                <label htmlFor='email'>Email</label>
                <input name='email' type={'email'} required></input>
                <label htmlFor='password'>Password</label>
                <input name='password' type={'password'} required></input>
                <input type={'submit'} value='Log In'></input>
            </form>
            <div><a onClick={revealRegister}>Register</a> instead</div>
        </div>
    </div>
  )
}
export default Authentication