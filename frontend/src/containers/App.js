import { useState, useEffect } from 'react'

import Header from '../containers/Header'
import MainContainer from './MainContainer'
import Home from '../components/Home'
import Login from '../components/auth/Login'
import SignUp from '../components/auth/SignUp'



import '../styling/App.css';

import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('auth_key')) {
      setIsLoggedIn(true)
    }}, [])

  const handleLogin = () => {
    if (localStorage.getItem('auth_key')) {
      setIsLoggedIn(true)
    }
  }

  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} />
        <div className='App'>
          <Switch>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/login' component={() => {
              return <Login handleLogin={handleLogin} />
            }} />
            <Route path='/logout' component={() => {
              localStorage.clear()
              setIsLoggedIn(false)
              return <Redirect to='/login' />
            }} />
            <Route exact path='/mynotes' component={() => {
              if (localStorage.getItem('auth_key')) {
                return <MainContainer />
              } else {
                return <Redirect to='/login' />
              }
            }}>
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;