"use client";
import {
    Container,
    Typography,
    CardMedia,
    CardContent,
    Card,
  } from "@mui/material";
  import { useState, useEffect, useRef } from "react";
import Footer from "@/components/footer";
  import WelcomeComponent from "@/components/welcomeComponent";
  import SideBar from "@/components/sideBar";
  import Link from "next/link";
  
  export default function Games () {
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const lastUpdateRef = useRef(0);
    const interval = 40000;
  
    // Define the game cards
    const gameCards = [
      {
        key: 1,
        to: "https://chizaram-trivia-game.vercel.app/",
        image: "/andrey-metelev-DEuansgqjns-unsplash.jpg",
        alt: "Quiz Game",
        title: "Trivia Game",
        description: "A simple yet fully functional trivia game website built with React."
      },
      {
        key: 2,
        to: "https://rock-paper-scissor-jade-tau.vercel.app/",
        image: "/fadilah-im-2HkXcDPnGh4-unsplash.jpg",
        alt: "Hand Scissor",
        title: "Rock Paper Scissor Game",
        description: "A simple yet fully functional Rock-Paper-Scissors website game built with React."
      },
      {
        key: 3,
        to: "https://my-quiz-pal.vercel.app/",
        image: "/olav-ahrens-rotne-jvBXiynINGE-unsplash.jpg",
        alt: "Trivia Game",
        title: "Group Quiz App",
        description: "A group quiz app project by SheCode in which I actively participated."
      }
    ];
  
    useEffect(() => {
      const updateCarousel = (timestamp: DOMHighResTimeStamp) => {
        
        if (timestamp - lastUpdateRef.current >= interval) {
          setCurrentIndex((prevIndex) =>
            prevIndex === gameCards.length - 1 ? 0 : prevIndex + 1
          );
          lastUpdateRef.current = timestamp; 
        }
        requestAnimationFrame(updateCarousel); 
      };
  
      requestAnimationFrame(updateCarousel); 
  
      return () => {
        
      };
    }, [gameCards.length, interval]);
    const [count, setCount] = useState<number>(0);
    // Ensure this is only run on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCount = localStorage.getItem("count");
      const parsedCount = savedCount ? JSON.parse(savedCount) : 0;
      setCount(parsedCount);  
    }
  }, []);
    return (
      <>
        <SideBar number={count} />
        <section className="viewPage">
          <Container>
            {/* <div className="divArrows divArrows2">
              <IoIosArrowBack onClick={handlePrevious} className="iconsArrow"/>
              <IoIosArrowForward onClick={handleNext} className="iconsArrow"/>
            </div> */}
            <section className="game1">
              {gameCards.length > 0 && (
                <Card key={gameCards[currentIndex].key} className="cardGame">
                  <Link href={gameCards[currentIndex].to} className="div1" >
                    <CardMedia
                      component="img"
                      height="380"
                      image={gameCards[currentIndex].image}
                      alt={gameCards[currentIndex].alt}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent className="smallDiv">
                      <Typography variant="h4">{gameCards[currentIndex].title}</Typography>
                      <Typography>
                        {gameCards[currentIndex].description}
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              )}
            </section>
          </Container>
          <WelcomeComponent />
        </section>

        <Footer />
      </>
    );
  };
  