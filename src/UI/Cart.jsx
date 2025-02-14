import React, { useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { GetAPIData } from "../api/GetAPIData";

function Cart() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const newImages = [];
    for (let i = 0; i < 8; i++) {
      const data = await GetAPIData();
      newImages.push(data?.message);
    }
    setImages(newImages);
  };
  0;
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-6xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          Card Examples
        </h1>

        {/* API Call on Button Click */}
        <button
          onClick={fetchImages}
          className="mb-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Fetch 8 Dog Images
        </button>

        {/* Image Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={image}
                alt="Random Dog"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="mt-4 flex justify-around items-center">
                <Heart className="text-red-500 cursor-pointer hover:scale-110 transition duration-300" />
                <MessageCircle className="text-blue-500 cursor-pointer hover:scale-110 transition duration-300" />
                <Share2 className="text-green-500 cursor-pointer hover:scale-110 transition duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
