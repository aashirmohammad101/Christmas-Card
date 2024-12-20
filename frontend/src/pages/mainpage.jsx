import React, { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/animation_santa.json";
import '../index.css'; // Import styles for background

function MainPage() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="body-background">
      <div
        className="card"
        style={{
          width: "500px",
          perspective: "1000px", // Adds a 3D perspective
        }}
      >
        <div
          className="card-inner"
          style={{
            width: "100%",
            height: "400px",
            transformStyle: "preserve-3d",
            transition: "transform 0.6s",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)", // Flip based on state
          }}
        >
          {/* Front of the card */}
          <div
            className="card-front"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "20px",
            }}
          >
            <div style={{ maxWidth: "200px" }}>
              <Lottie animationData={animationData} loop={true} />
            </div>
            <h5 className="mt-3 cursive-text">A gift for you, turn the card over to see!</h5>
            <button
              onClick={handleFlip}
              className="btn btn-primary black-button mt-3"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Flip Card
            </button>
          </div>

          {/* Back of the card */}
          <div
            className="card-back"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transform: "rotateY(180deg)", // Rotates the back of the card
              padding: "20px",
            }}
          >
            <h4 className="text-danger cursive-text">🎄Merry Christmas!🎅</h4>
            <p className="mt-2 cursive-text">May your holidays be filled with joy, love, and laughter!</p>
            <button
              onClick={handleFlip}
              className="btn btn-secondary black-button mt-3"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Flip Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
