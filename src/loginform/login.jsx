import React from 'react'
import { useState} from 'react'
import './login.css'
import { Link } from "react-router-dom";



export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


return(
  <div className='content'>
  <div className='inputform'>
    <h2 className='textojt'>OJT FullStack Developer</h2>
  <input className='inputname' type="text" placeholder="First Name" onChange={e => setUsername(e.target.value)} />
  <br />
  <br />
  <input className='inputpass' type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
  <br />
  <br />
  <button className='masuk'>
    <Link to="/home/10115075" state={{data : {user: username, fullname: username, password:password}}}>Masuk</Link>
  </button>
  </div>
  </div>
  )
}



