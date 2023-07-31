import React from 'react';
import './App.css';
import BooksList from './components/BooksList';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <BooksList />
    </div>
  );
}

export default App;
