"use client";
import Typography from "@mui/material/Typography";
import { TbBooks } from "react-icons/tb";
import { useState, ChangeEvent } from "react";

export default function Footer() {
    const [inputValue, setInputValue] = useState<string>("");
    const [validationMessage, setValidationMessage] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.target.value);
        setValidationMessage(""); 
    };

    // Email validation function
    const isValidEmail = (email: string): boolean => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    // Handle button click
    const handleClick = (): void => {
        if (inputValue.trim() === "") {
            setValidationMessage("Please enter your email address.");
            return;
        }
        if (isValidEmail(inputValue)) {
            setValidationMessage("Submitted! Thank You!");
            setInputValue(""); // Clear input after submission
        } else {
            setValidationMessage("Please enter a valid email address.");
        }
    };

    return (
        <>
            {/* First Footer Section */}
            <footer
                className="footer1"
                style={{
                    backgroundImage: `url('/henry-be--Pg63JThyCg-unsplash.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                }}
            >
                <section className="newsLetter">
                    <Typography variant="h3" textAlign="center">
                        Newsletter
                    </Typography>
                    <Typography textAlign="center">
                        Subscribe to our mailing list and get interesting news to
                        your email inbox.
                    </Typography>

                    <div className="subs">
                        {/* Validation message */}
                        <Typography color="error">{validationMessage}</Typography>
                        <input
                            type="email"
                            placeholder="Enter E-mail"
                            value={inputValue}
                            onChange={handleInputChange}
                            required
                        />
                        <button onClick={handleClick}>SUBSCRIBE</button>
                    </div>
                </section>
            </footer>

            {/* Second Footer Section */}
            <footer className="footer2">
                <section className="footer">
                    <div className="logoFooter">
                        <TbBooks />
                        <Typography>BOOKVAULT HUB</Typography>
                    </div>
                    <Typography>
                        A new book exchange service has been launched, aimed at
                        enhancing community engagement and broadening access to diverse
                        reading materials.
                    </Typography>
                </section>
            </footer>
        </>
    );
}
