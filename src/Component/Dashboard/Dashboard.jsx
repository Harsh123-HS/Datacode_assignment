import React, { useState } from "react";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [isActive, setIsActive] = useState("Dashboard");
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    setIsActive(item);
    if (item === "Login") navigate("/Login");
    else if (item === "Dashboard") navigate("/Dashboard");
  };

  return (
    <div className="bg-gray-800 min-h-screen text-white flex flex-col md:flex-row">
      <div className=" w-[25%] md:w-60  flex flex-col justify-between pb-36 pt-20 px-4 bg-gray-800 rounded-r-2xl">
        <div className="flex flex-col gap-4">
          {["Dashboard", "MyColl", "Favourites"].map((item) => (
            <div
              key={item}
              className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer ${
                isActive === item ? "bg-blue-500" : "bg-gray-800"
              }`}
              onClick={() => setIsActive(item)}
            >
              <img
                src={`./src/assets/${
                  item === "MyColl" ? "mycoll" : item.toLowerCase()
                }.png`}
                alt={item}
                className="w-6 h-6"
              />
              <span className="md:text-lg ">
                {item === "MyColl" ? "My Collection" : item}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {["Settings", "Login"].map((item) => (
            <div
              key={item}
              className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer ${
                isActive === item ? "bg-blue-500" : "bg-gray-800"
              }`}
              onClick={() => handleMenuClick(item)}
            >
              <img
                src={`./src/assets/${
                  item === "Login" ? "Logout" : "setting"
                }.png`}
                alt={item}
                className="w-6 h-6"
              />
              <span className="md:text-lg ">
                {item === "Login" ? "Login" : "Settings"}
              </span>
            </div>
          ))}
        </div>
      </div>

     <div className="flex-grow flex flex-col items-center px-4 md:px-8 md:py-8">
  <div className="relative w-full max-w-xs mb-4 md:max-w-[80vh] md:h-[48vh] md:mb-8 md:ml-20 right-0 left-0">
    <img
      src="src/assets/DashImg1.png"
      alt="Batman Dark Night"
      className="w-full h-auto rounded-lg md:h-full md:object-cover justify-start"
    />
          <div className="absolute left-12 top-44 font-semibold">
            Frank Miller
          </div>
          <div className="absolute left-12 top-52 font-extrabold text-3xl font-mono">
            BATMAN:
          </div>
          <div className="absolute left-12 top-64 font-extrabold text-3xl font-mono">
            The Dark Night
          </div>
          <button className="absolute left-[65vh] top-[73%] -translate-x-1/2 rounded-full bg-blue-600 px-4 py-2 font-semibold cursor-pointer hover:bg-blue-700 transition">
            Read Now
          </button>
        </div>
        <div className="w-full max-w-4xl mt-0 ml-0 md:ml-40">
          <div className="text-xl font-semibold mb-4 ml-1 md:ml-28">
            Top Rated Comics
          </div>
          <Cards />
        </div>
      </div>

      <div className="w-full md:w-[280px] flex flex-col items-center pt-10 px-4 md:px-0">
        <h2 className="text-lg font-semibold mb-2 -translate-x-0 md:-translate-x-14 text-center md:text-left">
          Continue Reading...
        </h2>
        <img
          src="src/assets/progress.png"
          alt="Reading Progress"
          className="w-40 md:w-56 mr-0 md:mr-28"
        />

        {/* Percenteage, progress add karna h  */}
        <p className="mb-2 mt-2 mr-0 md:mr-24 text-center md:text-left">
          Kobra Kai: Ultimate
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
