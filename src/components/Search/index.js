import React, { useState } from 'react';
import booksData from '../../booksData/booksData';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = booksData.books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search for a Book</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Enter book title"
      />
      <div>
        {filteredBooks.map((book) => (
          <div key={parseInt(book.isbn)}>
            <h3>{book.title}</h3>
            <p>{book.shortDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;