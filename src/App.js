import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Login from './componets/Login';
import Login2 from './componets/Login2';
import auth from './componets/firebase';
import  Home from  './componets/Home'
import Contact from './componets/Contact'
import Product from './componets/Product'
import Profile from './componets/Profile';
import About from './componets/About';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Ac from './componets/Ac';
import En from './componets/En';
import Lw from './componets/Lw';
import register from './componets/register';
import Qa from './componets/Qa';
import { Route } from 'react-router-dom';
import database from './componets/database';
import './App.css';

function App() {
  const [session, setSession] = useState({
    isLoggedIn: true,
    currentUser: null,
    errorMessage: null
  });

  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null
        });
      }
    });

    return () => {
      handleAuth();
    };
  }, []);

  const handleLogout = () => {
    auth.signOut().then(response => {
      setSession({
        isLoggedIn: false,
        currentUser: null
      });
    });
  };

  return (
    
    <div class="bg-secondary text-white">   
    
     <Header/>
       <Route path="/" exact={true} component={Home}/>
       <Route path="/Contact" component={Contact}/>
       <Route path="/Product" component={Product}/>
       <Route path="/About" component={About}/>
       <Route path="/Profile" component={Profile}/>
       <Route path="/Ac" component={Ac}/>
       <Route path="/En" component={En}/>
       <Route path="/Lw" component={Lw}/>
       <Route path="/register" component={register}/>
       <Route path="/Qa" component={Qa}/>
       <Route path="/Login2" component={Login2}/>
      <Footer/>
    }
    </div>
  );
}

export default App;
