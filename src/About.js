import React from 'react';
import './App.css';

function About() {
  return (
    <div>
      <h1>About</h1>
      <h2 style={{color: 'sienna'}}>React router is a library for react that allows client side routing</h2>
      <img src={'https://cdn.templatepocket.com/wp-content/uploads/2020/01/21195723/fortnite-2-800x500.png'} alt="fortnite image" width='500'/>
      <h3 style={{color: 'grey'}}>The shop page displays upcoming items on Fortnite by fetching api calls and using the dynamic routes property of react router </h3>
    </div>
  );
}

export default About;
