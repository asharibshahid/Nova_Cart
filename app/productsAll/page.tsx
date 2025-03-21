"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

const Hero = () => {
    const router = useRouter();
    const handleaddToCart = (slug: string) => {
        router.push(`/product/${slug}`);
      };

  return (
    <section className="text-white body-font bg-black ">
    <div className="container px-5 py-24 mx-auto  ">
      <div className="flex flex-col text-center w-full mb-20 ">
        <h1 className="text-2xl font-medium title-font mb-4  hover:text-white">
          OUR PRODUCTS
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Explore our range of amazing products crafted with care and quality!
        </p>
      </div>
      <div className="flex flex-wrap -m-4 hover:text-white   text-center justify-center items-center">
        {/* Product Card 1 */}
        <div className= " hover:text-white p-4 lg:w-1/4 md:w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg hover:ring-2 ring-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg ">
          <div className="h-96 flex flex-col items-center text-center p-6 bg-slate-900 border border-gray-200 rounded-lg shadow-lg hover:transform scale-105 transition duration-300 hover:bg-white hover:text-black">
            <img
              alt="product"
              className="flex-shrink-0 rounded-lg w-full h-48 object-cover object-center mb-4"
              src="https://tse2.mm.bing.net/th?id=OIP.89SQBycatTd8nYCh5xYuAAHaHa&pid=Api&P=0&h=220"
            />
            <div className="w-full hover:text-white">
              <h2 className="title-font font-medium text-lg  hover:text-white">
                Stylish T-Shirt
              </h2>
              <p className=" hover:text-white font-semibold mb-4">Not Available</p>
              <button 
            onClick={() => handleaddToCart( " Stylish T-Shirt")}
              className=" px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-md hover:scale-105 transition duration-300 w-full shadow-md shadow-indigo-500">
                    Add to Cart
                  </button>     
                 
             
            </div>
          </div>
        </div>
        {/* Product Card 2 */}
        <div className="p-4 lg:w-1/4 md:w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg hover:ring-2 ring-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
          <div className="h-96 flex flex-col items-center text-center p-6 bg-slate-900 border border-gray-200 rounded-lg shadow-lg hover:transform scale-105 transition duration-300 hover:bg-white hover:text-black">
            <img
              alt="product"
              className="flex-shrink-0 rounded-lg w-full h-48 object-cover object-center mb-4"
              src="https://tse2.mm.bing.net/th?id=OIP.bkpu1_C9FhjcmdJJQGbIpwHaH2&pid=Api&P=0&h=220"
            />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg  hover:text-white">
                Leather Wallet
              </h2>
                      
<p className=" hover:text-white font-semibold mb-4">Not Available</p>
              <button 
             onClick={() => handleaddToCart("     Leather Wallet")} className=" px-4  py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-md hover:scale-105 transition duration-300 w-full shadow-md shadow-indigo-500">
                    Add to Cart
                  </button>  
          
            </div>
          </div>
        </div>
        {/* Product Card 3 */}
        <div className="p-4 lg:w-1/4 md:w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg hover:ring-2 ring-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
          <div className="h-96 flex flex-col items-center text-center p-6 bg-slate-900  border border-gray-200 rounded-lg shadow-lg hover:transform scale-105 transition duration-300 hover:bg-white hover:text-black">
            <img
              alt="product"
              className="flex-shrink-0 rounded-lg w-full h-48 object-cover object-center mb-4"
              src="https://tse4.mm.bing.net/th?id=OIP.GMMXAXWq9E7PupEnTbYfHQHaHa&pid=Api&P=0&h=220"
            />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg  hover:text-white">
                Modern Watch
              </h2>
            
              <p className=" hover:text-white font-semibold mb-4">Not Available</p>
              <button
       onClick={() => handleaddToCart(" RedRagon m810")} className=" px-4  py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-md hover:scale-105 transition duration-300 w-full shadow-md shadow-indigo-500">
                    Add to Cart
                  </button>  
            </div>
          </div>
        </div>
        {/* Product Card 4 */}
        <div className="p-4 lg:w-1/4 md:w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg hover:ring-2 ring-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">

        <div className="h-96 flex flex-col items-center text-center p-6 bg-slate-900  border border-gray-200 rounded-lg shadow-lg hover:transform scale-105 transition duration-300 hover:bg-white hover:text-black">
            <img
              alt="product"
              className="flex-shrink-0 rounded-lg w-full h-48 object-cover object-center mb-4"
              src="https://tse4.mm.bing.net/th?id=OIP.qNGswysCT9dtyDF2RDz5ngHaHa&pid=Api&P=0&h=220"
            />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg  hover:text-white">
              Headphones
              </h2>
          
              <p className=" hover:text-white font-semibold mb-4">Not Available</p>
              <button
             onClick={() => handleaddToCart("Headphones")} className=" px-4  py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-md hover:scale-105 transition duration-300 w-full shadow-md shadow-indigo-500">
                    Add to Cart
                  </button>  
                 
            </div>
           
    
            
             </div>
        </div>
      {/* // Product Card 5 */}
   
      <div className="p-4 lg:w-1/4 md:w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg hover:ring-2 ring-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
      <div className="h-96 flex flex-col items-center text-center p-6 bg-slate-900  border border-gray-200 rounded-lg shadow-lg hover:transform scale-105 transition duration-300 hover:bg-white hover:text-black">
      <img
        alt="product"
        className="flex-shrink-0 rounded-lg w-full h-48 object-cover object-center mb-4"
        src="https://tse4.mm.bing.net/th?id=OIP.ghcoSgxA2zwZb1Il67RRDwHaHy&pid=Api&P=0&h=220"
      />
      <div className="w-full">
        <h2 className="title-font font-medium text-lg  hover:text-white">
        RedRagon m810
        </h2>
      
        <p className=" hover:text-white font-semibold mb-4">Not Available</p>
        <button
       onClick={() => handleaddToCart(" RedRagon m810")} className=" px-4  py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-md hover:scale-105 transition duration-300 w-full shadow-md shadow-indigo-500">
                    Add to Cart
                  </button>  
                
      </div>
     

      
       </div>
  </div>



{/* product card 6 */}
<div className="p-4 lg:w-1/4 md:w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg hover:ring-2 ring-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
    
    <div className="h-96 flex flex-col items-center text-center p-6 bg-slate-900  border border-gray-200 rounded-lg shadow-lg hover:transform scale-105 transition duration-300 hover:bg-white hover:text-black">
      <img
        alt="product"
        className="flex-shrink-0 rounded-lg w-full h-48 object-cover object-center mb-4"
        src="https://m.media-amazon.com/images/I/71DYlRN51tL._AC_SL1500_.jpg"
      />
      <div className="w-full">
        <h2 className="title-font font-medium text-lg  hover:text-white">
        KOORUI KeyBoard
        </h2>
      
        <p className=" hover:text-white font-semibold mb-4">Not Available</p>
        <button
       onClick={() => handleaddToCart("KOORUI KeyBoard")} className=" px-4  py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-md hover:scale-105 transition duration-300 w-full shadow-md shadow-indigo-500">
                    Add to Cart
                  </button>  
                       </div>
     

      
       </div>
  </div>

{/* Product card 7 */}

<div className="p-4 lg:w-1/4 md:w-1/2 transition-transform transform hover:scale-105 hover:shadow-lg hover:ring-2 ring-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
    
    <div className="h-96 flex flex-col items-center text-center p-6 bg-slate-900 border border-gray-200 rounded-lg shadow-lg hover:transform scale-105 transition duration-300 hover:bg-white hover:text-black">
      <img
        alt="product"
        className="flex-shrink-0 rounded-lg w-full h-48 object-cover object-center mb-4"
        src="https://tse2.mm.bing.net/th?id=OIP.g8Fx7KGTULfOPJanwZgDkAHaHa&pid=Api&P=0&h=220"
      />
      <div className="w-full">
        <h2 className="title-font font-medium text-lg  hover:text-white">
       Logitech Gamepad
        </h2>
      
        <p className=" hover:text-white font-semibold mb-4">Not Available</p>
        <button 
       onClick={() => handleaddToCart("Logitech Gamepad")} className=" px-4  py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-md hover:scale-105 transition duration-300 w-full shadow-md shadow-indigo-500">
                    Add to Cart
                  </button>  
                
      </div>
     

      
       </div>
  </div>
  {/* Product card 8 */}


  

         {/* //last div */}
     
       
      </div>
    </div>





  </section>
  
  )
}

export default Hero