// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route exact path="/book/:id" element={<BookDetails />} />
        <Route path="/book/:slug" element={<NotFound/>} />
        <Route path="/add" element={<AddBook />} />
        <Route exact path="/edit/:id" element={<EditBook />} />
      </Routes>
    </Router>
  );
};

export default App;