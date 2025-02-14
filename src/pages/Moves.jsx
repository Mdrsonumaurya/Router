import React from "react";
import { useLoaderData } from "react-router-dom"; // Hook import
import Cart from "../UI/Cart";

const Moves = () => {
  const moviesData = useLoaderData(); // Hook Call

  return (
    <div>
      {/* <ul>
        {moviesData.map((item, index) => (
          <li key={index}>{item.status}</li>
        ))}
      </ul> */}
      <Cart />
    </div>
  );
};

export default Moves;
