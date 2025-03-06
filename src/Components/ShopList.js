import React from 'react';
import { useState, useEffect } from 'react';
import { API_KEY, API_URL_LIST } from '../config/config';
import ShopCart from './ShopCart';
import Preloader from './Preloader';

function ShopList(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL_LIST, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.items && setItems(data.items.slice(0, 24));
        setLoading(false);
      });
  }, []);

  return (
    <div className="items">
      {loading ? (
        <Preloader />
      ) : items.length ? (
        items.map((item) => <ShopCart key={item.id} {...item} />)
      ) : (
        <p>Не загрузилось</p>
      )}
    </div>
  );
}

export default ShopList;
