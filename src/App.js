import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const vegetable = [
    {
      name: "Beetroot",
      benefit: "Improve digestive health.",
      rating: "9.5/10"
    },

    {
      name: "Spinach",
      benefit: "Vitamin A.",
      rating: "9/10"
    },

    {
      name: "Potato",
      benefit: "Improve blood sugar control.",
      rating: "9.5/10"
    }
  ];

  const fruits = [
    {
      name: "Apple",
      benefit: "Lower High Cholesterol.",
      rating: "9.5/10"
    },

    {
      name: "Banana",
      benefit: "Support Heart Health.",
      rating: "9.5/10"
    },

    {
      name: "Papaya",
      benefit: "Boosts Your Immune System.",
      rating: "10/10"
    }
  ];

  const fish = [
    {
      name: "Crab",
      benefit: "Crab is packed with protein.",
      rating: "9/10"
    },

    {
      name: "Lobster",
      benefit: "Beneficial for weight loss and mental health.",
      rating: "9/10"
    },

    {
      name: "Cod",
      benefit: "improve their heart health.",
      rating: "9/10"
    }
  ];

  const nuts = [
    {
      name: "Almonds",
      benefit: "Lower blood sugar levels.",
      rating: "10/10"
    },

    {
      name: "Walnuts",
      benefit: "Decrease Inflammation.",
      rating: "10/10"
    },

    {
      name: "Wheat",
      benefit: "Reduce your risk of obesity.",
      rating: "9/10"
    }
  ];

  const [output, setOutput] = useState(["Vegetable"]);

  function genreClickHandler(data) {
    setOutput(output);
  }

  return (
    <div className="App">
      <h1>🥗🥘 GoodFood</h1>
      <blockquote>
        Checkout my favorite food. Select a genre to get started
      </blockquote>
      <button
        className="genreBtn"
        style={{ cursor: "pointer" }}
        onClick={() => setOutput(vegetable)}
      >
        Vegetable
      </button>
      <button
        className="genreBtn"
        style={{ cursor: "pointer" }}
        onClick={() => setOutput(fruits)}
      >
        Fruits
      </button>
      <button
        className="genreBtn"
        style={{ cursor: "pointer" }}
        onClick={() => setOutput(fish)}
      >
        Fish
      </button>

      <button
        className="genreBtn"
        style={{ cursor: "pointer" }}
        onClick={() => setOutput(nuts)}
      >
        Nuts
      </button>

      <hr />

      {output.map((item, index) => (
        <div
          key={index}
          style={{
            border: "0.2px solid gray",
            borderRadius: "0.3rem",
            margin: "0.5rem"
          }}
        >
          <h3>{item.name} </h3>
          <p>Benefit: {item.benefit} </p>
          <p>Rating: {item.rating} </p>
        </div>
      ))}
    </div>
  );
}
