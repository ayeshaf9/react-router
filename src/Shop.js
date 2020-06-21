import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
  
  const shopStyle = {
    color: 'black',
    textDecoration: 'none',
  };

  useEffect(() =>{
    fetchItems();
  },[]);

  const [items, setItems] = useState([]); 

  const fetchItems = async() => {
   
   
    const data = await fetch(
       'https://fortniteapi.io/items/upcoming?lang=en',
       {
         "headers": {  "Authorization": " " }
       }
      );

    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  };

  return (
    <div>
      {items.map(item => (
        <h1 key={item.id}>
        <Link to={`/shop/${item.id}`} style={shopStyle} >{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;