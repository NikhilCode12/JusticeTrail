import React from "react";
import './hero.css'
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div className="featuredstyle flex flex-row-reverse bg-teal-400">
        <div className=' flex' >
        </div>
        <div className='max-w-[1520px] mt-[-96] w-full py-10 h-screen mx-auto text-center flex flex-col'>
          <p className='text-xl text-white font-bold p-2'>
            Lets Stand for Ourselves with
          </p>
          <h1 className="md:text-5xl sm:text-4xl text-4xl font-bold md:py-3 text-white">
            KIDvocate
          </h1><br/><br/>
          <div className="flex justify-center items-center">
            <p className="md:text-3xl sm:text-2xl text-xl font-bold pl-4 text-white">
              Become the informed kid in the society with
            </p><br/>
            <p className="md:text-3xl sm:text-2xl text-xl font-bold pl-2 text-pink-600">
              Everyone
            </p>
          </div>
          {/* <p className='md:text-2xl sm:text-xl text-xl py-0 font-bold text-white'>Lorem ipsum is placeholder text commonly used in</p> */}
          <div className="text-center mt-40">
            <Link
              to="ourServices"
              spy={true}
              smooth={true}
              offset={-70}
              duration={900}
            >
              <button className="bg-white w-[200px] rounded-full font-medium py-3 text-black hover:shadow-xl hover:bg-green-600 outline-none focus:outline-none">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
