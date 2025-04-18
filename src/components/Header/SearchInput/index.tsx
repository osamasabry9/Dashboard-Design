import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SearchInputProps } from '../../../types';
import './SearchInput.css';

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search...',
  onChange
}) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onChange?.(value);
  };

  return (
    <div className="search-input">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="search-input__field"
        aria-label="Search"
      />
      <Search size={16} className="search-input__icon" />
    </div>
  );
};

export default SearchInput;
