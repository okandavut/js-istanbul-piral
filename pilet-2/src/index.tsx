import * as React from 'react';
import { PiletApi } from 'app-shell';
import { Link } from 'react-router-dom';
import BuyButton from './BuyButton.vue';
import Cart from './Cart.vue';

interface BuyButtonExtension {
  item: Object
}

export function setup(app: PiletApi) {

  app.setData('cart', []);

  const addToCart = (item) => {
    var cart = app.getData('cart');
    cart.push(item)
    app.setData('cart', cart);
  }

  app.registerExtension<BuyButtonExtension>(
    'buy-button', 
    app.fromVue(BuyButton, { addToCart: addToCart})
  )

  app.registerMenu('cart-menu', () => <Link to="/cart">Cart - {app.getData('cart').length} </Link>);
  app.registerPage("/cart", app.fromVue(Cart, { cart: app.getData('cart') }) );

  app.on('store-data', ({name}) => {
    if(name === 'cart') {
      app.registerMenu('cart-menu', () => <Link to="/cart">Cart - {app.getData('cart').length} </Link>);
      app.registerMenu('cart-menu', () => <Link to="/cart">Cart - {app.getData('cart').length} </Link>);
    }
  })
}
