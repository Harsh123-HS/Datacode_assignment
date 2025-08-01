import React from "react";

function Login() {
  return (
    <>
      <div className="w-screen ">
        <div className="grid grid-cols-2 gap-0 bg-gray-800 h-screen">
          <div className="col-span-1  p-3 flex justify-center items-center h-[80vh] ">
            <form action="" className="grid place-items-center h-full  "> 
              <div
                className=""
              >
                <img src="src\assets\logo-text.png" alt="" 
                className="px-3 py-1 ml-24 mb-8"/>

                <p className="py-4 text-white text-3xl font-serif ml-16 ">Login in to Get Inside</p>
                <input type="text" placeholder="Email" 
                className="mb-5 px-3 py-1 m-2 w-96 h-12 text-white rounded-md border-2 outline-none bg-gray-800 border-white"/>
          <br/>
              
                <input type="password" placeholder="Password" 
                  className="mb-5 px-3 py-1 m-2 h-12 w-96 text-white rounded-md border-2 outline-none bg-gray-800 border-white"
                />
              </div>
            </form>
          </div>

          <div className="col-span-1 bg-green-200 w-[110vh] ">
            <img src="./src/assets/MaskGroup.png" alt="" className="w-[100%] h-[100vh] left-0 bg-gray-800  object-cover"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
