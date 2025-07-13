// frontend/src/components/BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading]=useState(false);

  useEffect(() => {
    const API_BASE_URL = "https://automatic-spoon-4jrqq5xqpj6937v65-5555.app.github.dev"; // Use Codespace Backend URL dynamically

    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/books`);
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false)
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto py-8">
     <div className='mx-auto px-50'>
       <h1 className="text-2xl font-bold mb-4 ">Book List</h1>
      <Link to="/add" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">
        Add New Book
      </Link>
     </div>
     { loading ? 
     <>
     <Loading />
     </> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <div key={book._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={book.imageUrl || "https://via.placeholder.com/300"} alt={book.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
              <Link to={`/book/${book._id}`} className="text-blue-500 hover:text-blue-700 mt-2 block">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default BookList;