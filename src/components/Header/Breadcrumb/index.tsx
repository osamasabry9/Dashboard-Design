import React from 'react';
import { BreadcrumbProps } from '../../../types';
import './Breadcrumb.css';

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb__list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb__item">
            {index > 0 && <span className="breadcrumb__separator">/</span>}
            <a
              href={item.href}
              className={`breadcrumb__link ${item.active ? 'breadcrumb__link--active' : ''}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
