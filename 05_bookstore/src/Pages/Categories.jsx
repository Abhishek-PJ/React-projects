import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Categories = () => {
  const books = [
    { id: 1, category: "Fiction" },
    { id: 2, category: "Non-Fiction" },
    { id: 3, category: "Mystery" },
    { id: 4, category: "Novel" },
    { id: 5, category: "Comedy" },
    { id: 6, category: "Religious" },
    { id: 7, category: "Romance" },
    { id: 8, category: "Biography" },
    { id: 9, category: "Auto-Biography" },
    // Add more books as needed
  ];

  return (
    <>
      <div className=" Header-div mb-4">
        <Header />
      </div>
      <div className="book-category-page p-0 ">
        <h1 className=" text-3xl text-center font-bold text-blue-600">
          Book Categories
        </h1>
        <br />
        <div className="book-list  mb-32">
          {books.map((book) => (
            <div
              key={book.id}
              className="book-card"
              style={{
                backgroundColor: "#007FFF",
                color: "white",
                fontSize: "20px",
              }}
            >
              <h2>{book.category}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className=" Footer-div mb-4">
        <Footer />
      </div>
    </>
  );
};

export default Categories;
