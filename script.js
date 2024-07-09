export const products = [
    {
      id: 1,
      title: 'iPhone 15 Pro Max 1TB',
      price: 2799000,
      thumbnail: 'https://example.com/iphone-15-pro-max-1tb-thumbnail.jpg',
      image: 'https://example.com/iphone-15-pro-max-1tb-image.jpg',
      quantity: 1,
    },
    {
      id: 2,
      title: 'MacBook Pro 16-inch | Apple M3 Max | 1TB',
      price: 7099000,
      thumbnail: 'https://example.com/macbook-pro-16-inch-thumbnail.jpg',
      image: 'https://example.com/macbook-pro-16-inch-image.jpg',
      quantity: 1,
    },
    {
      id: 3,
      title: 'Samsung Galaxy S22 Ultra 5G',
      price: 5499000,
      thumbnail: 'https://example.com/samsung-galaxy-s22-ultra-5g-thumbnail.jpg',
      image: 'https://example.com/samsung-galaxy-s22-ultra-5g-image.jpg',
      quantity: 1,
    },
    {
      id: 4,
      title: 'PlayStation 5 Console',
      price: 4499000,
      thumbnail: 'https://example.com/playstation-5-console-thumbnail.jpg',
      image: 'https://example.com/playstation-5-console-image.jpg',
      quantity: 1,
    },
    {
      id: 5,
      title: 'Xbox Series X Console',
      price: 3999000,
      thumbnail: 'https://example.com/xbox-series-x-console-thumbnail.jpg',
      image: 'https://example.com/xbox-series-x-console-image.jpg',
      quantity: 1,
    },
    {
      id: 6,
      title: 'Nintendo Switch OLED Model',
      price: 2999000,
      thumbnail: 'https://example.com/nintendo-switch-oled-model-thumbnail.jpg',
      image: 'https://example.com/nintendo-switch-oled-model-image.jpg',
      quantity: 1,
    },
    {
      id: 7,
      title: 'Apple Watch Series 8',
      price: 1999000,
      thumbnail: 'https://example.com/apple-watch-series-8-thumbnail.jpg',
      image: 'https://example.com/apple-watch-series-8-image.jpg',
      quantity: 1,
    },
    {
      id: 8,
      title: 'Samsung Galaxy Watch4 Classic',
      price: 1499000,
      thumbnail: 'https://example.com/samsung-galaxy-watch4-classic-thumbnail.jpg',
      image: 'https://example.com/samsung-galaxy-watch4-classic-image.jpg',
      quantity: 1,
    },
    {
      id: 9,
      title: 'Sony WH-1000XM5 Wireless Headphones',
      price: 99900,
      thumbnail: 'https://example.com/sony-wh-1000xm5-wireless-headphones-thumbnail.jpg',
      image: 'https://example.com/sony-wh-1000xm5-wireless-headphones-image.jpg',
      quantity: 1,
    },
    {
      id: 10,
      title: 'Bose QuietComfort 45 Wireless Headphones',
      price: 89900,
      thumbnail: 'https://example.com/bose-quietcomfort-45-wireless-headphones-thumbnail.jpg',
      image: 'https://example.com/bose-quietcomfort-45-wireless-headphones-image.jpg',
      quantity: 1,
    },
  ];
  import { products } from './products';

let cart = {};

export function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  if (product) {
    cart[productId] = product;
  }
}

export function removeFromCart(productId) {
  delete cart[productId];
}

export function updateQuantity(productId, quantity) {
  if (cart[productId]) {
    cart[productId].quantity = quantity;
  }
}
import React from 'react';
import { products } from './products';
import { addToCart, removeFromCart, updateQuantity } from './cart';

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </li>
        ))}
