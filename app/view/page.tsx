"use client";
import { useState, useEffect, useMemo } from "react";
import SideBar from "@/components/sideBar";
import {
  Container,
  Typography,
  Button,
  CardMedia,
  CardActions,
  CardContent,
  Card,
} from "@mui/material";
import { ratingAmount, ratingIt, rating } from "@/utils/storage";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import WelcomeComponent from "@/components/welcomeComponent";
import Category from "@/components/category";
import Upcoming from "@/components/upcoming";
import Footer from "@/components/footer";
// Define types for your data
interface BookData {
  id: number;
  title: string;
  author: string;
  publication_year: number | string;
  genre: string[];
  description?: string;
  cover_image: string;
}

export default function ViewBook2() {
  const [dataStore, setDataStore] = useState<BookData | null>(null);
  const [ratingNumbers, setRatingNumbers] = useState<number>(0);
  const [ratingAmounts, setRatingAmounts] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // Fetch data from localStorage
  useEffect(() => {
    try {
      const storedDataStore = localStorage.getItem("bookData");
      const parsedDataStore: BookData | null = storedDataStore
        ? JSON.parse(storedDataStore)
        : null;

      if (parsedDataStore) {
        setDataStore(parsedDataStore);
        const ratingNum = rating[parsedDataStore.id] || 0;
        const amount = Number(ratingAmount[parsedDataStore.id]) || 0;

        setRatingNumbers(ratingNum);
        setRatingAmounts(amount);
      }

    } catch (error) {
      console.error("Error parsing localStorage data:", error);
    }
  }, []);

  // Update total cost and store count and total in localStorage
  useEffect(() => {
    const total = ratingAmounts * count;
    localStorage.setItem("count", JSON.stringify(count));
    localStorage.setItem("total", JSON.stringify(total));
  }, [count, ratingAmounts]);

  // Decrement count
  const handleSub = () => setCount((prev) => Math.max(prev - 1, 0));

  // Increment count
  const handleAddtoCart = () => setCount((prev) => prev + 1);

  // Memoize the total for optimization
  const totalPrice = useMemo(() => count * ratingAmounts, [count, ratingAmounts]);


  return (
    <>
      <SideBar number={count} />
      <section className="viewPage">
        <Container>
          <section className="viewSection">
            {dataStore ? (
              <Card className="styleCard">
                <CardMedia
                  component="img"
                  height="380"
                  image={dataStore.cover_image}
                  alt={dataStore.title || "Book Cover"}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent className="cardCenter">
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    {dataStore.title}
                  </Typography>
                  <Typography sx={{ fontStyle: "italic" }} className="author">
                    {dataStore.author} - {dataStore.publication_year}
                  </Typography>
                  <div className="rating">
                    <div className="rating1">
                      {ratingIt[dataStore.id] || "No Rating"}
                    </div>
                    <Typography>
                      {ratingNumbers ? ratingNumbers : "No ratings yet"}
                    </Typography>
                  </div>
                  <Typography>
                    {dataStore.description || "No description available."}
                  </Typography>
                  {dataStore.genre?.length ? (
                    <Typography>Genres: {dataStore.genre.join(", ")}</Typography>
                  ) : (
                    <Typography>No genres available</Typography>
                  )}
                  <CardActions className="w-full">
                    <Button
                      className="text-center bg-[#e4c282] text-[#3e2723] w-full hover:bg-[gray]"
                    >
                      ${ratingAmounts}
                    </Button>
                  </CardActions>
                  <CardActions className="flexBox">
                    <div className="smallBtn">
                      <Button
                        onClick={handleSub}
                        disabled={count === 0}
                        aria-label="Decrease count"
                      >
                        <FiMinus className="btnValue" />
                      </Button>
                      <Typography className="btnValue">{count}</Typography>
                      <Button
                        onClick={handleAddtoCart}
                        aria-label="Increase count"
                      >
                        <FaPlus className="btnValue" />
                      </Button>
                    </div>
                  </CardActions>
                  <Typography>Total Price: ${totalPrice.toFixed(2)}</Typography>
                </CardContent>
              </Card>
            ) : (
              <Typography>Loading book data...</Typography>
            )}
          </section>
        </Container>
        <WelcomeComponent/>
        <Category/>
        <Upcoming/>
      </section>
      <Footer/>
    </>
  );
}
