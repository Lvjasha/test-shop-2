import React from 'react';

function CartIcon(props) {
  return (
    <div className="cart-icon">
      <i className="material">shopping_cart</i>
      {props.length ? <span>{props.length}</span> : null}
    </div>
  );
}

export default CartIcon;
