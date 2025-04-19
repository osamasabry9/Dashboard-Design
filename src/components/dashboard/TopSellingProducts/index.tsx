import React from 'react';
import { MoreVertical } from 'lucide-react';
import { productsData } from '../../../data/mockData';
import './TopSellingProducts.css';

export const TopSellingProducts: React.FC = () => {
  return (
    <div className="products-card">
      <div className="products-header">
        <h2 className="products-title">Top Selling Products</h2>
      </div>
      <div className="products-list">
        {productsData.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-info">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
            <div className="product-stats">
              <p className="product-sold">{product.sold} sold</p>
              <p className="product-price">{product.price}</p>
            </div>
            <button className="product-action-button">
              <MoreVertical className="more-icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingProducts;
