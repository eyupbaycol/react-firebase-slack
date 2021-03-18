
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import Chat from './components/Chat';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Spinner from 'react-spinkit';
function App() {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <Apploading>
        <ApploadingContents>
          <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" />
          <Spinner 
            name="ball-scale-ripple-multiple"
            color="blue"
            fadeIn="none"
          />
        </ApploadingContents>
      </Apploading>
    )
  }
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div`
    display: flex;
    height: 100vh;
`

const Apploading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
const ApploadingContents = styled.div`
   text-align: center;
   padding-bottom: 100px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   >img {
     height: 100px;
     padding: 20px;
     margin-bottom :40px;
   }

`;