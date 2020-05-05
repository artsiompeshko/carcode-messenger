import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Search from './search.presentation';

const SearchContainer = ({ handleSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    handleSubmit(search);
  };

  return <Search search={search} handleSubmit={onSubmit} handleSearch={handleSearch} />;
};

SearchContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchContainer;
