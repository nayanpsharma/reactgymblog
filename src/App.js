import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactUS from './containers/ContactUS';
import Post from './containers/Post';

function App() {
  return (


    <Router>
      <div className="App">
      <Header /> 
      <Hero />
      <Route path="/" exact component={Home} />
      <Route path="/contact-us" exact component={ContactUS }/>
      <Route path="/fitness-post/:postId" exact component={Post} />
      
    </div>
    </Router>
    
  );
}

export default App;
