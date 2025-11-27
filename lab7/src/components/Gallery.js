import React from 'react';
import GoodsCard from '../components/GoodsCard';

function Gallery() {
  const goods = [
    { id: 1, name: 'Marshall Major IV Bluetooth Black', price: 3599, image: 'https://content2.rozetka.com.ua/goods/images/big/551415700.webp' },
    { id: 2, name: 'Apple iPhone 16 256GB White', price: 48099, image: 'https://content1.rozetka.com.ua/goods/images/big/468886645.jpg' },
    { id: 3, name: 'Sony PlayStation 5', price: 24999, image: 'https://content2.rozetka.com.ua/goods/images/big/392132677.jpg' },
    { id: 4, name: 'Kinder Joy Funko Pop Stranger Things', price: 6900, image: 'https://content1.rozetka.com.ua/goods/images/big/596650706.jpg' },
    { id: 5, name: 'LEGO Technic Ford GT 2022', price: 6099, image: 'https://bi.ua/uploaded-images/products/size_650/578494_1.jpg' },
    { id: 6, name: 'Funko Pop Megumi Fushiguro ', price: 1050, image: 'https://content.rozetka.com.ua/goods/images/big/441198595.jpg' }
  ];

return (
    <div className="gallery-container">
      <h2 className="gallery-title">Галерея товарів</h2>
      <div className="goods-gallery">
        {goods.map((item) => (
          <GoodsCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;