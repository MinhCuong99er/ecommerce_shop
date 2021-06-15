import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/user/Header";
import Footer from "./components/user/Footer";
import Home from "./views/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Cart from "./views/Cart";
import axios from 'axios'; 
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [productName, setProductName] = useState('');
  const role = localStorage.getItem('role');
  useEffect(() => {
    axios.get('/api/auth/user')
    .then(
      res => {
        setUserLogin(res.data.data)
      }
    )
    .catch(
      err => {
        console.log(err);
      }
    );
  }, []);

  const setUserLogin = (user_login) => {
    setUser(user_login)
  };

  return (
    <Router>
      <Header user={user} setUserLogin={setUserLogin} />
        <Route path="/" exact component={Home}/>
        <Route path="/user/login" component={() => <Login setUserLogin={setUserLogin} />}/>
        <Route path="/user/register" component={Register}/>
        <Route path="/cart" component={Cart}/>
      <Footer />
  </Router>
  );
}

export default App;
