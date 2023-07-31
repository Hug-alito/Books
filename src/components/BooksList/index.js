import React from 'react';
import booksData from '../../booksData/booksData';

const BooksList = () => {
  return (
    <div>
      <h1>List of Books</h1>
      {booksData.books.map((book) => (
        <div key={parseInt(book.isbn)}>
          <h2>{book.title}</h2>
          <p>{book.shortDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default BooksList;
