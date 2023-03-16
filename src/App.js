import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
  
} from 'react-router-dom'
import { Navigate } from 'react-router';
import './App.css';
import Sidebar from './components/Sidebar';
import FriendsView from './components/FriendsView'
import UserView from './components/UserView'
import LoginView from './components/LoginView'
import RegisterView from './components/RegisterView'
import HomeView from './components/HomeView'
import RedirectView from './components/RedirectView';

function App() {

  const AuthRoute = function({children}) {
    if (localStorage.getItem("firebaseId") === "") {
      return <Navigate to="/favoriteplaces" />;
    }
    else {
      return children;
    }
  }

  return (
    <Router>
      <Sidebar>
      <Routes>
        <Route path = "" element= {<RedirectView />} />
        <Route path = "/favoriteplaces" element= {<RedirectView />} />
        <Route path = "/favoriteplaces/login" element = {<LoginView />} />
        <Route path= "/favoriteplaces/friends" element = {<AuthRoute><FriendsView /></AuthRoute>} />
        <Route path = "/favoriteplaces/friends/:id" element = {<AuthRoute><UserView /></AuthRoute>}/>
        <Route path = "/favoriteplaces/home" element = {<AuthRoute><HomeView /></AuthRoute>} />
        <Route path = "/favoriteplaces/register" element = {<RegisterView />} />
        <Route path = "/favoriteplaces/profile" element = {<AuthRoute><UserView /></AuthRoute>}/>
      </Routes>
      </Sidebar> 
    </Router>
  );
}

export default App;
