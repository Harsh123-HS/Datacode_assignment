import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <div className="grid grid-cols-4 gap-1">
        <div className="col-span-1 p-4">
          <div className="flex flex-col justify-between m-2 h-[80vh] w-56 rounded-lg">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 p-2 bg-blue-500 rounded-lg">
                <img src="./src/assets/Dash.png" alt="Dashboard" className="w-6 h-6" />
                <span className="text-lg">Dashboard</span>
              </div>

              <div className="flex items-center gap-2 p-2 bg-blue-500 rounded-lg">
                <img src="./src/assets/mycoll.png" alt="My Collection" className="w-6 h-6" />
                <span className="text-lg">My Collection</span>
              </div>

              <div className="flex items-center gap-2 p-2 bg-blue-500 rounded-lg">
                <img src="./src/assets/fav.png" alt="Favourite" className="w-6 h-6" />
                <span className="text-lg">Favourites</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 p-2 bg-blue-500 rounded-lg">
                <img src="./src/assets/setting.png" alt="Settings" className="w-6 h-6" />
                <span className="text-lg">Settings</span>
              </div>

              <div className="flex items-center gap-2 p-2 bg-blue-500 rounded-lg">
                <img src="./src/assets/logout.png" alt="Log Out" className="w-6 h-6" />
                <span className="text-lg">Log Out</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 p-4">

          <div
          className="grid grid-cols-2 gap-4"
          >
            <div
            className="col-span-1 p-4">
              vfadkl

            </div>
            <div
            className="col-span-1 p-4 ">
              dlrkm

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
