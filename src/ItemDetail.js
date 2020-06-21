import React, {useState, useEffect} from 'react';
import './App.css';

function ItemDetail({match}) {
  
  useEffect(() => {
     fetchItem();
    // console.log(match);
  },[]);

  const [itemDisplay, setItem] = useState({ 
      images: {}
  }); 

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortniteapi.io/items/get?id=${match.params.id}`,
        {
        "headers": { "Authorization": " "}
        });
    const itemDisplay = await fetchItem.json();
    setItem(itemDisplay.item);
    console.log(itemDisplay.item);
};

  return (
    <div>
        <h1>{itemDisplay.name}</h1>
        <h2 style={{color: 'sienna'}}>{itemDisplay.description}</h2>
        <img src={itemDisplay.images.icon} alt="" />
    </div>
  );
}

export default ItemDetail;