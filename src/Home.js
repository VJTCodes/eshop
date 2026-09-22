import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from './Product';
import { db } from './firebase';

const getProductImage = (product) => {
  const imageUrl = product.imageUrl || product.image;
  if (typeof imageUrl === 'string' && !imageUrl.includes('unsplash.com')) {
    return imageUrl;
  }

  const base = process.env.PUBLIC_URL || '';
  const name = (product.name || product.title || '').toLowerCase();

  if (name.includes('backpack')) return `${base}/Images/bag.avif`;
  if (name.includes('keyboard')) return `${base}/Images/Kette.jpg`;
  if (name.includes('water bottle')) return `${base}/Images/cetaphil.jpg`;
  if (name.includes('desk mat')) return `${base}/Images/Tshirt.jpeg`;

  return `${base}/Images/bag.avif`;
};

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('products')
      .onSnapshot((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(items);
      });

    return () => unsubscribe();
  }, []);

  return (
    <div className='home'>
      <div className='home__container'>
        <img src='/Images/ecommerceImage.jpeg' alt='Ecommerce banner' className='home__image' />

        <div className='home__row'>
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.name || product.title}
              price={Number(product.price) || 0}
              rating={Number(product.rating) || 4}
              image={getProductImage(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home