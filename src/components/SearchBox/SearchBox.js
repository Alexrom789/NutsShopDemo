import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <input type='search' placeholder='search items'
    onChange={searchChange}
    />
  );
}

export default SearchBox