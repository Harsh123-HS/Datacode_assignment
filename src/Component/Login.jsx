import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
const navigate = useNavigate()
const HandleClick =()=>{
  navigate('/signin');
}

  return (
    <>
      <div className="w-screen h-screen">
        <div className="grid bg-gray-800 md:grid-cols-[46%_54%] md:h-screen h-full">
          <div className="col-span-1 p-3 flex justify-center items-center md:w-[100%] w-full ">
            <form action="" className="grid place-items-center  "> 
              <div
                className="ml-10 "
              >
                <img src="src\assets\logo-text.png" alt="" 
                className="px-3 py-1 md:ml-24 ml-8 mb-8"/>

                <p className="md:py-4 py-4  text-white md:text-3xl text-2xl font-serif md:ml-16 ml-4">Login in to Get Inside</p>
                <input type="text" placeholder="Email" 
                className="mb-5 px-3 py-1 m-2 md:w-96 w-64 h-12 text-white rounded-md border-2 outline-none bg-gray-800 border-white"/>
          <br/>
              
                <input ty90pe="password" placeholder="Password" 
                  className="mb-5 px-3 py-1 m-2 h-12 md:w-96 w-64 text-white rounded-md border-2 outline-none bg-gray-800 border-white"
                />
                <p className="text-white md:ml-20 ml-2">Don't have account? <span className="text-blue-600 cursor-pointer"
                onClick={()=>HandleClick()}
                >Register</span> Here</p>
                <br/>
                <input type="button" value="Login" 
                className="md:mb-5 md:px-2 px-16 py-1 m-2 h-12 md:w-36 md:ml-32 rounded-3xl text-white border-2 outline-none border-white bg-blue-600 hover:bg-blue-400 hover:cursor-pointer hover:text-black"
                />
              </div>
            </form>
          </div>

          <div className="col-span-1 bg-green-200 md:w-[100%] hidden wifull ">
            <img src="./src/assets/MaskGroup.png" alt="" className="md:w-[90vw] h-[100vh] left-0 bg-gray-800  object-cover"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
