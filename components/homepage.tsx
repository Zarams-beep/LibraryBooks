"use client";
import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { objectImage, shuffleArray } from "@/utils/pictures";
import { ratingIt, rating, } from "@/utils/storage";
import Link from "next/link";
import Image from "next/image";
import library from "@/utils/library.json";
// import { stringify } from "flatted";
interface Book {
  id: number;
  title: string;
  author: string;
  publication_year: number | string;
  genre: string[];
  cover_image: string;
}

export default function HomePage() {
  const books = library;
  const ratings = rating;

  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchCategory, setSearchCategory] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // Initialize shuffled images and set filtered books on first render
  useEffect(() => {
    if (books.length > 0) {
      setFilteredBooks(books);
      setShuffledImages(shuffleArray(Object.values(objectImage)));
    }
  }, [books]);

  // Navigation for shuffled images
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shuffledImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === shuffledImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle search based on the selected category
  const handleSearch = () => {
    const query = searchInput.trim().toLowerCase();
    if (query) {
      setFilteredBooks(
        books.filter((book) => {
          if (searchCategory === "author")
            return book.author.toLowerCase().includes(query);
          if (searchCategory === "title")
            return book.title.toLowerCase().includes(query);
          if (searchCategory === "publication_year")
            return book.publication_year.toString().includes(query);
          return false;
        })
      );
    } else {
      setFilteredBooks(books);
    }
    setSearchInput("");
  };

  // Reset filters
  const handleReset = () => {
    setSearchCategory("");
    setSearchInput("");
    setFilteredBooks(books);
  };

  // Store book data to localStorage when selectedBook changes
  useEffect(() => {
    if (selectedBook) {
      if (typeof window !== "undefined") {
        localStorage.setItem("img", selectedBook.cover_image);
        localStorage.setItem("bookData", JSON.stringify(selectedBook));
        localStorage.setItem("rating", ratingIt[selectedBook.id].toString());
        localStorage.setItem("ratingNumber", rating[selectedBook.id].toString());
      }
    }
  }, [selectedBook]);

  const handleStorage = (book: Book) => {
    setSelectedBook(book); // This triggers the useEffect above
  };

  return (
    <>
      {/* Main banner */}
      <main style={{ backgroundImage: `url(${shuffledImages[currentIndex]})` }}>
        <div className="notes">
          <h4>ARE YOU SEARCHING FOR A BOOK?</h4>
          <h1>BIGGEST LIBRARY</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis numquam nobis iste.
          </p>
        </div>
      </main>
      <div className="divArrows">
        <IoIosArrowBack onClick={handlePrevious} className="iconsArrow" />
        <IoIosArrowForward onClick={handleNext} className="iconsArrow" />
      </div>

      {/* Search filters */}
      <section className="section2">
        {["TITLE", "AUTHOR", "PUBLICATION_YEAR"].map((category) => (
          <button
            key={category}
            className="btnSection"
            onClick={() => {
              setSearchCategory(category.toLowerCase());
              setSearchInput(""); // Clear search input when changing category
            }}
          >
            {category}
          </button>
        ))}
        <button className="btnSection" onClick={handleReset}>
          RESTART
        </button>
      </section>

      {/* Search input */}
      <section className="secondPart">
        {searchCategory && (
          <>
            <input
              type="text"
              value={searchInput}
              placeholder={`Search by ${searchCategory}`}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button onClick={handleSearch}>SEARCH</button>
          </>
        )}
      </section>

      {/* Filtered books */}
      <section className="thirdPart">
        <div className="imgContainer">
          {filteredBooks.length === 0 ? (
            <p>No books found matching your search criteria.</p>
          ) : (
            filteredBooks.map((book) => (
              <div key={book.id} className="library-book">
                <Link
                  href="/sign-up"
                  className="linkStyle"
                  onClick={() => handleStorage(book)}
                >
                  <div className="imgP">
                    <Image
                      src={book.cover_image}
                      alt={book.title}
                      width={1000}
                      height={1000}
                      loading="lazy"
                      className="image"
                    />
                  </div>
                  <div className="box">
                    <div>{book.title}</div>
                    <div>{book.author}</div>
                    <div>{book.publication_year}</div>
                    <div>
                      {book.genre.map((g, index) => (
                        <span key={index} className="genreItem">
                          {g}
                        </span>
                      ))}
                    </div>
                    <div className="rating">
                      <div className="rating1">{ratingIt[book.id]}</div>
                      <div>{ratings[book.id]}</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
