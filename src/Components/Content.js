import React, { useState } from 'react';
import ShopList from './ShopList';
import CartIcon from './CartIcon';
import CartList from './CartList';
import ShowAlert from './ShowAlert';

function Content() {
  const [cartItems, setCartItems] = useState([]);
  //модальное окно
  const [showCart, setShowCart] = useState(false);
  //сообщение после добавления в корзину
  const [showAlert, setShowAlert] = useState(null);

  const appendToCart = (item, quantity = 1) => {
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
    setShowAlert(item.name + 'добавлен в корзину');
  };

  const toggleShow = () => setShowCart(!showCart);

  const removeFromCart = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
  };

  const hideAlert = () => setShowAlert(null);

  return (
    <main className="container">
      <CartIcon length={cartItems.length} toggleShow={toggleShow} />
      {showAlert && <ShowAlert text={showAlert} hideAlert={hideAlert} />}
      <ShopList appendToCart={appendToCart} />
      {showCart ? (
        <CartList
          item={cartItems}
          toggleShow={toggleShow}
          removeFromCart={removeFromCart}
        />
      ) : null}
    </main>
  );
}

export default Content;
