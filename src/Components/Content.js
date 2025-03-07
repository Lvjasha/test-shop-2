import React, { useState } from 'react';
import ShopList from './Shop/ShopList';
import CartIcon from './Cart/CartIcon';
import CartList from './Cart/CartList';
import ShowAlert from './Shop/ShowAlert';

function Content() {
  const [cartItems, setCartItems] = useState([]);
  //модальное окно
  const [cartShow, setCartShow] = useState(false);
  //сообщение после добавления в корзину
  const [showAlert, setShowAlert] = useState(null);

  const appendToCart = (item, quantity = 1) => {
    //проверка, есть ли в корзине еще товары
    const itemIndex = cartItems.findIndex((value) => value.id === item.id);
    if (itemIndex < 0) {
      //если товара еще нет
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
      const newCart = cartItems.slice(); // копия массива cartItems
      newCart.splice(itemIndex, 1, newItem);
      setCartItems(newCart);
    }
    setShowAlert(item.name + ' добавлен в корзину');
  };

  const removeFromCart = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
  };

  const toggleShow = () => setCartShow(!cartShow);
  const hideAlert = () => setShowAlert(null);

  return (
    <main className="container">
      <CartIcon length={cartItems.length} toggleShow={toggleShow} />
      {showAlert && <ShowAlert text={showAlert} hideAlert={hideAlert} />}
      <ShopList appendToCart={appendToCart} />
      {cartShow ? (
        <CartList
          items={cartItems}
          toggleShow={toggleShow}
          removeFromCart={removeFromCart}
        />
      ) : null}
    </main>
  );
}

export default Content;
