import React from "react";
import './hero.css'
import { Link } from "react-scroll";
import heroImage from '../../../assets/hero.jpeg';

const Hero = () => {
  return (
    <>
      <div className="flex h-screen relative">
        <div className='absolute inset-0 bg-opacity-50 bg-black' style={{ mixBlendMode: 'multiply' }}>
        </div>
        <img
          src={heroImage}
          alt="Background"
          className="object-cover w-full h-full"
        />
        <div className='max-w-[1520px] mt-[-96] w-full py-16 h-screen mx-auto text-center absolute flex flex-col z-1'>
          <p className='text-2xl text-white font-bold p-2 my-4 [text-shadow:1px_1px_4px_var(--tw-shadow-color)] shadow-black'>
            Lets Stand for Ourselves with
          </p>
          <h1 className="md:text-8xl sm:text-4xl text-4xl my-2 font-bold md:py-3 text-white [text-shadow:3px_2px_2px_var(--tw-shadow-color)] shadow-black">
          <span className="text-pink-600">
            KID
          </span>
            vocate
          </h1><br/><br/>
          <div className="flex justify-center items-center">
            <p className="md:text-4xl sm:text-2xl text-xl font-bold pl-4 text-white [text-shadow:2px_2px_4px_var(--tw-shadow-color)] shadow-black">
              Become the informed kid in the society with
            </p><br/>
            <p className="md:text-3xl sm:text-2xl text-xl font-bold pl-2 text-pink-600 [text-shadow:2px_2px_2px_var(--tw-shadow-color)] shadow-black">
              Everyone
            </p>
          </div>
          <div className="text-center mt-20">
            <Link
              to="ourServices"
              spy={true}
              smooth={true}
              offset={-70}
              duration={900}
            >
              <button className="bg-white w-[200px] rounded-full font-medium py-3 text-black hover:shadow-xl hover:bg-green-500 outline-none focus:outline-none text-xl transition all 1s ease-in-out">
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
