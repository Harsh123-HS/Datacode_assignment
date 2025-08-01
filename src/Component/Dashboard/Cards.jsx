import React from "react";

const cardsData = [
  {
    img: "src/assets/MaskGroup.png",
    title: "The Flash, Vol. 1",
    author: "Joshua WilliamSon",
  },
  {
    img: "src/assets/Titan_vol.png",
    title: "Titans, Vol. 2",
    author: "Andrew Robinson",
  },
  {
    img: "src/assets/Harley.png",
    title: "Harley Quinn, Vol 1",
    author: "Jimmy Palmiotti",
  },
  {
    img: "src/assets/Rectangle4.png",
    title: "Suicide Squad #8",
    author: "Tom Taylor",
  },
];

function Cards() {
  return (
    <>
      <div className="flex flex-row gap-1">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 p-1 ml-20 rounded-3xl flex flex-col items-center"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-56 rounded-3xl  transition duration-200 hover:scale-105 hover:shadow-lg"
            />
            <div className="p-1 ml-1 w-full">
              <p className="text-blue-700 font-thin font-serif">{card.title}</p>
              <p className="text-white font-thin">{card.author}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
