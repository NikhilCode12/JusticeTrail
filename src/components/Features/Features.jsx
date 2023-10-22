import React from 'react';
import { Link } from 'react-router-dom';
import pika from '../../assets/videos/pika.gif'
import course from '../../assets/videos/course.gif'
import chatbot from '../../assets/videos/chatbot.gif'
import './Features.css';

const Services = () => {
    return (
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id="ourServices">
        <h1  className='px-4 text-center my-20 mt-0 text-4xl md:text-5xl sm:text-4xl  font-bold md:py-3 text-cyan-700'>Let's Dive</h1>
        <div className='bg-gray-200'>
          <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='bgm'>
              <img src={pika} alt="" />
            </div>
            <div className='md:w-4/5 mx-[20px]'>
              <h2 className='text-4xl text-neutral-500 md:w-full'>Play Interactive Games</h2>
              <p className='md:w-full txt-sm text-neutral-400 mb-8'>Play amazing games to learn about the fundamental laws of kids and the country and compete with your friends.</p>
              <Link to ="/games">
              <button className='bg-green-400 w-32 md:w-[200px] rounded-full font-medium py-3 text-black hover:shadow-xl hover:bg-green-600 outline-none focus:outline-none'>Play Now!!</button></Link>
            </div>
          </div>
        </div>
  
        <div className='bg-blue'>
    <div className='md:w-11/12 mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-12 my-20'>
      <div className='md:w-4/5 mx-[20px]'>
        <h2 className='text-4xl text-neutral-500 md:w-full'>Take Courses</h2>
        <p className='md:w-full txt-sm text-neutral-400 mb-8'>Learn from the best people of the country and stay well informed about your rights and duties.</p>
        <Link to ="/courses">
        <button className='bg-green-400 w-32 md:w-[200px] rounded-full font-medium py-3 text-black hover:shadow-xl hover:bg-green-600 outline-none focus:outline-none'>Learn Now!!</button></Link>
      </div>
      <div className='bgm flex-col md:flex-col'>
        <img src={course} alt="DESCRIBE_IMAGE_HERE" />
      </div>
    </div>
  </div>
  <div className='bg-pink-100'>
          <div className='md:w-10/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-5 my-20'>
            <div className='bgm'>
              <img src={chatbot} alt="" />
            </div>
            <div className='md:w-4/5 mx-[10px]'>
              <h2 className='text-4xl text-neutral-500 md:w-full'>Talk to ChatBot</h2>
              <p className='md:w-full txt-sm text-neutral-400 mb-8'>Ask your doubts from the chatbot and get to learn more from it and the internet and know how to protecct yourself from exploitation.</p>
              <Link to ="Chat">
              <button className='bg-green-400 w-32 md:w-[200px] rounded-full font-medium py-3 text-black hover:shadow-xl hover:bg-green-600 outline-none focus:outline-none'>Let's Chat</button></Link>
            </div>
          </div>
        </div>
  
      </div>
    )
  }
  
  export default Services;
  