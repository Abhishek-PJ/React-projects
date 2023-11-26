import React from 'react';

const BookCategoryPage = () => {
  const books = [
    { id: 1, title: 'Book 1', category: 'Fiction' },
    { id: 2, title: 'Book 2', category: 'Non-Fiction' },
    { id: 4, title: 'Book 3', category: 'Mystery' },
    { id: 5, title: 'Book 3', category: 'Mystery' },
    { id: 6, title: 'Book 3', category: 'Mystery' },
    { id: 7, title: 'Book 3', category: 'Mystery' },
    // Add more books as needed
  ];

  return (
    <div className="book-category-page ">
      <h1 className=' text-3xl text-center font-bold text-blue-600'>Book Categories</h1>
      <br />
      <div className="book-list ">
        {books.map((book) => (
          <div key={book.id} className="book-card" style={{backgroundColor:"#007FFF",color:"white",fontSize:"20px"}}>
            <h2>{book.title}</h2>
            <p>{book.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCategoryPage;
