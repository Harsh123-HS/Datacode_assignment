import React from "react";

function Signin() {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="grid bg-gray-800 grid-cols-[50%_50%] h-screen">
          <div className="col-span-1 p-3 flex justify-center items-center w-[100%]  ">
            <form action="" className="grid place-items-center  "> 
              <div
                className="ml-10 "
              >
                <img src="src\assets\logo-text.png" alt="" 
                className="px-3 py-1 ml-24 mb-8"/>

                <p className="py-4 text-white text-3xl font-serif ml-16 ">Signin in to Get Inside</p>
                <input type="text" placeholder="Email" 
                className="mb-5 px-3 py-1 m-2 w-96 h-12 text-white rounded-md border-2 outline-none bg-gray-800 border-white"/>
          <br/>
              
                <input type="password" placeholder="Password" 
                  className="mb-5 px-3 py-1 m-2 h-12 w-96 text-white rounded-md border-2 outline-none bg-gray-800 border-white"
                />
                <br/>
                <input type="button" value="Signin" 
                className="mb-5 px-2 py-1 m-2 h-12 w-36 ml-32 rounded-3xl text-white border-2 outline-none border-white bg-blue-600 hover:bg-blue-400 hover:cursor-pointer hover:text-black"
                />
              </div>
            </form>
          </div>

          <div className="col-span-1 bg-green-200 w-[100%] ">
            <img src="src\assets\DashImg1.png" alt="" className="w-[90vw] h-[100vh] left-0 bg-gray-800  object-cover"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
