import React,{ useState } from 'react';
import Button from '@mui/material/Button';
import { FaClock, FaFilter, FaSearch } from 'react-icons/fa';
import { BsBookHalf } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';

const rights = [
    {
      title: 'Right to Education',
      description: 'Explore the Power of Education!',
      lessons: 5,
      time: '1 Hour',
      status: 'Start',
    },
    {
        title: 'Right to Freedom of Speech',
        description: 'Explore the freedom of speech and expression.',
        lessons: 6,
        time: '1.5 Hours',
        status: 'Unlock',
    },
    {
        title: 'Right to Privacy',
        description: 'Discover the importance of personal privacy.',
        lessons: 4,
        time: '45 Minutes',
        status: 'Unlock',
    },
    {
        title: 'Right to Healthcare',
        description: 'Understand your rights to quality healthcare.',
      lessons: 7,
      time: '2 Hours',
      status: 'Unlock',
    },
    {
        title: 'Right to Work',
        description: 'Learn about your right to fair employment.',
        lessons: 4,
        time: '1 Hour',
        status: 'Unlock',
    },
    {
        title: 'Right to Equality',
        description: 'Explore the principle of equality before the law.',
        lessons: 8,
        time: '1.25 Hours',
        status: 'Unlock',
    },
    {
        title: 'Right to Food',
        description: 'Understand your right to adequate food.',
        lessons: 6,
        time: '1.5 Hours',
        status: 'Unlock',
    },
    {
        title: 'Right to Internet Access',
        description: 'Explore the digital age and internet access rights.',
        lessons: 6,
        time: '1 Hour',
        status: 'Unlock',
    },
    {
        title: 'Right to Clean Environment',
        description: 'Learn about environmental rights and conservation.',
        lessons: 4,
        time: '45 Minutes',
        status: 'Unlock',
    },
];

function Courses() {
    const [isSearchVisible, setSearchVisible] = useState(false);

    const toggleSearch = () =>{
        setSearchVisible(!isSearchVisible);
    };

    return (
        <div className='w-full h-full bg-gradient-to-t from-indigo-500 to-cyan-600'>
        <section className='courses-menu-container bg-gradient-to-tl from-gray-100 to-slate-400 w-full flex flex-col justify-center items-center h-auto'>
            <h1 className='heading text-6xl tracking-wide mt-32 mb-10 font-bold text-black'>Courses</h1>
            <nav className='courses-menu-nav flex my-4 w-full justify-between'>
                <div className='search ml-16 flex absolute justify-center items-center'>
                <button className='transition all 1s ease-in-out' onClick={toggleSearch}><FaSearch style={{fontSize: '1.3em'}}/></button>
                {isSearchVisible && (
                    <div className='mx-4'>
                        <input type='text' placeholder='Search in Courses' className='w-60 px-2 py-1 outline-none bg-inherit focus:border-gray-500 focus:outline-none border-gray-400 border-[1px] rounded-xl transition all 1s ease-in-out'/>
                    </div>
                )}
                </div>
                <ul className='menu flex justify-center ml-[31%] cursor-pointer'>
                    <li className='mx-8 hover:text-pink-800'>Recommended</li>
                    <li className='mx-8 hover:text-pink-800'>Recently Added</li>
                    <li className='mx-8 hover:text-pink-800'>Archived</li>
                </ul>
                <ul className='filter flex mr-16 -mt-1'>
                    <li className='mx-1'><button className='border-gray-300 border-1 rounded text-sm px-4 py-1 bg-indigo-200 hover:bg-indigo-300'>A-z</button></li>
                    <li className='mx-1'><button className='border-gray-300 border-1 rounded text-sm px-4 py-1 bg-indigo-200 hover:bg-indigo-300'>z-A</button></li>
                    <li className='mx-1'><button className='py-1'>
                    <FaFilter style={{color: 'rgba(165,180,252,1)',fontSize: '1.3em'}}/></button></li>
                </ul>
            </nav>
        </section>
        <section className='courses-grid grid grid-cols-3 gap-24 mx-40 mt-14'>
        {rights.map((right, index) => (
          <div key={index} className='card bg-gradient-to-tl from-gray-100 to-slate-300 border-[3px] border-slate-400 w-72 h-86 flex flex-col justify-center rounded cursor-pointer hover:scale-105 transition-all 1s ease-in-out hover:shadow-slate-700 hover:shadow-[0_0_26px_0_slate] mb-10'>
            <img src='/src/assets/RightToEducation.jpg' alt='image' className='shadow-sm rounded'></img>
            <div className='flex flex-col p-4 text-black'>
              <h3 className='my-2 text-[0.95em]'>{right.title}</h3>
              <p className='text-[1.25em] my-2 font-semibold'>{right.description}</p>
              <div className='lessons-time flex justify-between my-4 mb-0'>
                <div className='flex flex-col justify-start'>
                  <div className='flex'>
                    <BsBookHalf style={{ color: 'crimson', fontSize: '1.2em' }} />
                    <span className='text-[0.95em] mx-2'>{right.lessons} Lessons</span>
                  </div>
                  <div className='flex'>
                    <FaClock style={{ color: 'crimson', fontSize: '1.2em' }} />
                    <span className='text-[0.95em] mx-2'>{right.time}</span>
                  </div>
                </div>
                <Button
                  variant="contained"
                  href="/"
                  style={{
                    fontFamily: 'inherit',
                    textAlign: 'center',
                    display: 'flex',
                    margin: '5px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '0.85em',
                    fontWeight: 'bold',
                    width: '35%',
                    backgroundColor: 'indigo',
                    letterSpacing: '2px',
                  }}
                >
                {rights[index].status}
                </Button>
              </div>
            </div>
          </div>
        ))}        
        </section>
        <Button
            variant="contained"
            href="/"
            style={{
                position: 'absolute',
                left: '20px',
                top: '20px',
                borderRadius: '50px',
                padding: '10px',
                fontSize: '20px',
            }}
            >
                <BiArrowBack />
        </Button>     
        <Button
            variant="contained"
            href="/certificate"
            size="small"
            style={{
                position: 'absolute',
                right: '20px',
                top: '20px',
                borderRadius: '50px',
                padding: '10px',
                fontSize: '0.75em',
            }}
            >
              Certificates
        </Button>     
    </div>
  )
}

export default Courses