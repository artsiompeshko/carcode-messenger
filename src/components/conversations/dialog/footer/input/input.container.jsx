import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from './input.presentation';

const InputContainer = ({ handleSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    handleSubmit(search);

    setSearch('');
  };

  return <Input search={search} handleSearch={handleSearch} handleSubmit={onSubmit} />;
};

InputContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default InputContainer;
