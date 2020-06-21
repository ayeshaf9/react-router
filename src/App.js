import React from 'react';
import './App.css';
import Navigation from './Navigation';
import About from './About';
import Shop from './Shop';
import ItemDetail from './ItemDetail';
import './Fonts/Lobster-Regular.ttf';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
     <Navigation />
     <Switch>
     <Route path="/" exact component={HomePage}/>
     <Route path="/about" component={About}/>
     <Route path="/shop" exact component={Shop}/>
     <Route path="/shop/:id" component={ItemDetail}/>
     </Switch>
    </div>
    </Router>
  );
}

const HomePage = () => (
 <div>
   <h1>Hello!</h1>
   <h2 style={{color: 'sienna'}}>This react project demonstrates client side routing</h2>
 </div>

);

export default App;
