import React from 'react'

function Header() {
  return (
    <>
      <nav className='bg-gray-800 flex flex-row p-3 pt-4 rounded-sm'>
          <div className='bg-gray-800 w-28 p-2 m-0 md:ml-12 '>
            <img src="src\assets\logo-text.png" alt="" />
          </div>

          <div className='md:ml-80 ml-4 flex flex-row '>
            <div  className='relative justify-center'>
            <input type="text" 
            placeholder='Search...'
            className='md:w-[80vh] w-[20vh] mr-2 bg-gray-800 border border-x-white p-3 text-lg pr-14 rounded-lg text-white h-12'/>
            <img src="src\assets\Vector.png" alt="" 
            className='w-7 h-7 right-0 m-2 absolute top-2 -translate-y-2'
            />
            </div>
          </div>
            <div>
              <img src="src\assets\notificatipn.png" alt="" 
                className='w-6 h-6 md:right-40 right-16 m-3 absolute '
              />
            </div>

            <div>
              <img src="src\assets\Ellipse.png" alt="" 
                className='w-10 top-4 md:right-16 right-4 m-1 absolute '
              />
            </div>
          <div>

          </div>
      </nav>
    </>
  )
}

export default Header