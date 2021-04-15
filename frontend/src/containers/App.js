import Header from '../containers/Header'
import NoteContainer from '../components/NoteContainer'
import Login from '../components/auth/Login'
import SignUp from '../components/auth/SignUp'


import '../styling/App.css';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='App'>
          <Switch>
            {/* <Route path='/'>
            <NoteContainer />
          </Route> */}
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;