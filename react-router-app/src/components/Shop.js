import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Shop() {
  useEffect(() => {
      fetchItems()
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
      const data = await fetch('https://fakestoreapi.com/products');
    

      const items = await data.json();
      console.log(items);
      setItems(items);
  };


  return (
        <div>
          <h1>Browse Items</h1>
            <div className="item-list">
              {items.map(item => (
                <h1 key={item.id}>
                  <Link to={`/shop/${item.id}`}>{item.title}</Link></h1>
              ))}
            </div> 
        </div>
      );
}

export default Shop;
