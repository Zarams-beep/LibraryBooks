"use client";
import { useState, useEffect} from "react";
import SideBar from "@/components/sideBar";
import {
  Container,
  Typography,
} from "@mui/material";
import { ratingIt, rating } from "@/utils/storage";
import library from "@/utils/library.json";
import Link from "next/link";
import Footer from "@/components/footer";
import Image from "next/image";

interface Book {
    id: number;
    title: string;
    author: string;
    publication_year: number | string;
    genre: string[];
    cover_image: string;
  }

export default function AsideCategory () {
    const count = localStorage.getItem("count");
    const parsedCount = count ? JSON.parse(count) : 0;
      const books = library;
  const ratings = rating;
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

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

  const groupByGenre = (data: Book[]) => {
    return data.reduce((acc, book) => {
      book.genre.forEach((genre) => {
        if (!acc[genre]) acc[genre] = [];
        acc[genre].push(book);
      });
      return acc;
    }, {} as Record<string, Book[]>);
  };
  
  const booksByGenre = groupByGenre(books);
  


  return (
    <>
      <SideBar number={parsedCount} />
      <section className="viewPage">
        <Container>
          {Object.keys(booksByGenre).map((genre) => (
            <section key={genre} className="genreSection">
              <Typography variant="h4" className="genreHeader">
                {genre}
              </Typography>
              <ul className="divCategoryPart3">
                {booksByGenre[genre].map((book) => (
                  <li key={book.id}>
                    <Link
                      href={"/view"} 
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
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </Container>
      </section>
      <Footer/>
    </>
  );
};
