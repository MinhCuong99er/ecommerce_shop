import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/user/Header";
import Footer from "./components/user/Footer";
import Home from "./components/user/Home";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
        <Route path="/" exact component={Home}/>
      <Footer />
  </Router>
  );
}

export default App;
