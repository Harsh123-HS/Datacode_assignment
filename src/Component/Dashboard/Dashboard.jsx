import React, { useState } from "react";
import Cards from "./Cards";
import { Link, Links, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const [isActive, setIsActive] = useState("Dashboard");
  const navigate = useNavigate();

  const HandleLogin = () => {
      navigate("/Login");
    
  };

  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <div className="grid grid-cols-4 gap-1">
        <div className="col-span-1 pt-8">
          <div className="flex flex-col justify-between m-1 h-[80vh] w-56 rounded-lg">
            <div className="flex flex-col gap-5">
              {["Dashboard", "MyColl", "Favourites"].map((item) => (
                <div
                  key={item}
                  className={`flex items-center pl-12 gap-4 p-2 rounded-lg cursor-pointer ${
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
                  <span className="text-lg">
                    {item === "MyColl" ? "My Collection" : item}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {["Settings", "Login"].map((item) => (
                <div
                  key={item}
                  className={`flex items-center pl-12 gap-4 p-2 rounded-lg cursor-pointer ${
                    isActive === item ? "bg-blue-500" : "bg-gray-800"
                  }`}
                  onClick={() => {setIsActive(item)
                    if(item === "Login") HandleLogin();
                  }
                }
                >
                  <img
                    src={`./src/assets/${
                      item === "Login" ? "Logout" : "setting"
                    }.png`}
                    alt={item === "Login" ? "Login" : "Settings"}
                    className="w-6 h-6"
                  />
                  <span
                    className="text-lg"
                    onClick={(item) => HandleLogin(item)}
                  >
                    {item === "Login" ? "Login" : "Settings"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-3 p-4">
          <div className=" relative ml-24">
            <img
              src="src/assets/DashImg1.png"
              alt="Batman Dark Night"
              className="w-[80vh] h-[45vh] rounded-lg"
            />
            <div className="absolute top-[27vh] left-6 px-4 py-2 text-ellipsis font-semibold">
              Frank Miller
            </div>
            <div className="absolute top-[31vh] left-6 px-4 py-2 font-extrabold text-3xl font-mono">
              BATMAN:
            </div>
            <div className="absolute top-[36vh] left-6 px-4 py-2 font-extrabold text-3xl font-mono">
              The Dark Night
            </div>
            <button className="absolute top-[37vh] left-[45%] -translate-x-1/2 rounded-full bg-blue-600 px-8 py-2 font-semibold cursor-pointer hover:bg-blue-700 transition">
              Read Now
            </button>
          </div>

          <div className="relative px-1 mt-4">
            <div className="text-xl font-semibold ml-24 pt-2 mb-4">
              Top Rated Comics
            </div>
            <Cards />
          </div>
        </div>

        {/* <div className="col-span-1 p-4 h-72 pt-4 flex flex-col items-center">
          <h2 className="text-lg font-semibold ">Continue Reading</h2>
          <img src="src/assets/progress.png" alt="Reading Progress" 
          className="w-24"/>
          <p className="px-2 py-1 ">Kobra Kai: Ultimate</p>
               progress percentage add karna h */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
