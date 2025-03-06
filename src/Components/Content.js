import React, { useState } from 'react';
import ShopList from './ShopList';
import CartIcon from './CartIcon';

function Content() {
  const [cartItems, setCartItems] = useState([]);

  const appendToCart = (item, quantity) => {
    const itemIndex = cartItems.findIndex((value) => value.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: quantity,
      };
      setCartItems([...cartItems, newItem]);
    } else {
      const newItem = {
        ...cartItems[itemIndex],
        quantity: cartItems[itemIndex].quantity + quantity,
      };
      const newCart = cartItems.slice();
      newCart.splice(itemIndex, 1, newItem);
      setCartItems(newCart);
    }
  };

  return (
    <main className="container">
      <CartIcon length={cartItems.length} />
      <ShopList appendToCart={appendToCart} />
    </main>
  );
}

export default Content;
