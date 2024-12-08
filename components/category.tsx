"use client";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { GiBlackBook } from "react-icons/gi";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { ratingIt, rating } from "@/utils/storage";
import library from "@/utils/library.json";
import Image from "next/image";

interface BookData {
  id: number;
  title: string;
  author: string;
  publication_year: number | string;
  genre: string[];
  description?: string;
  cover_image: string;
}

export default function Category() {
  const [filtered, setFilter] = useState<BookData[]>([]);
  const [btn, setBtnText] = useState('');
  const [active, setActive] = useState('');
  const [selectedBook, setSelectedBook] = useState<BookData | null>(null); // Define selectedBook state
  const listGenre = ['Fiction', 'Classic', 'Dystopian', 'Science Fiction', 'Adventure', 'Fantasy'];
  const [, setCurrentIndex] = useState(0);

  const handleGenre = (genre: string) => {
    setBtnText(genre);
    const filteredResults = library.filter((book) => book.genre.includes(genre));
    setFilter(filteredResults);
    setActive(genre);
    console.log(active);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? listGenre.length - 1 : prevIndex - 1;
      handleGenre(listGenre[newIndex]);
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === listGenre.length - 1 ? 0 : prevIndex + 1;
      handleGenre(listGenre[newIndex]);
      return newIndex;
    });
  };

  // Store book data to localStorage when selectedBook changes
  useEffect(() => {
    if (selectedBook) {
      if (typeof window !== "undefined") {
        localStorage.setItem("img", JSON.stringify(selectedBook.cover_image));
        localStorage.setItem("bookData", JSON.stringify(selectedBook));
        localStorage.setItem("rating", JSON.stringify(ratingIt[selectedBook.id]));
        localStorage.setItem("ratingNumber", JSON.stringify(rating[selectedBook.id]));
      }
    }
  }, [selectedBook]);

  const handleStorage = (book: BookData) => {
    setSelectedBook(book); // This triggers the useEffect above
  };

  return (
    <Container className="welcomeComponent">
      <section className="welcomePart1">
        <Typography variant="h4">Our Top Categories</Typography>
        <Typography>Welcome to the biggest library</Typography>
        <div className="divLine">
          <p className="line lin"></p>
          <GiBlackBook className="icon" />
          <p className="line lin2"></p>
        </div>
      </section>

      <section className="categoryPart2">
        <button className="SideBtn" onClick={handlePrevious}>
          <FaLongArrowAltLeft className="btnLeft" />
        </button>
        <section className="btnGenre">
          {listGenre.map((genre) => (
            <button
              key={genre}
              onClick={() => handleGenre(genre)}
              className={`${active === genre ? 'styleIt' : ''}`}
            >
              {genre}
            </button>
          ))}
        </section>
        <button className="SideBtn1" onClick={handleNext}>
          <FaLongArrowAltRight className="btnRight" />
        </button>
      </section>

      <section className="categoryPart3">
        <Typography variant="h4">{btn}</Typography>
        <ul className="divCategoryPart3">
          {filtered.map((fi) => (
            <li key={fi.id}>
              <a
                href="/viewbook2"
                className="linkStyle"
                onClick={() => handleStorage(fi)} 
              >
                <div className="imgP">
                  <Image
                    src={fi.cover_image}
                    alt={fi.title}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="image"
                  />
                </div>
                <div className="box">
                  <div>{fi.title}</div>
                  <div>{fi.author}</div>
                  <div>{fi.publication_year}</div>
                  <div>{fi.genre[0]}, {fi.genre[1]}</div>
                  <div className="ratin2">
                    <div className="rating2">{ratingIt[fi.id] ?? 'No rating'}</div>
                    <p>{rating[fi.id] ?? 'No rating'}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
