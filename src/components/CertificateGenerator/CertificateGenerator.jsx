import React, { useRef } from 'react'
import { HiDownload } from 'react-icons/hi';
import { BiArrowBack } from 'react-icons/bi';
import { VscDebugRestart } from 'react-icons/vsc';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import './CertificateGenerator.css'
import html2pdf from 'html2pdf.js';
import signature from '../../assets/signature.png';
import cloud from '../../assets/cloud.png';
import childrenBalloon from '../../assets/childrenballoon.png';
import childLaw from '../../assets/childlaw.png';
import education from '../../assets/education.png';


let username = {
    fName : 'Nikhil',
    lName : 'Sharma'
};

let coursename = "Right to Education";

const months = 
[   
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const date = new Date();
const day = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();

let daySuffix = (   
        day != 1 && day != 2 && day != 3 && day != 21 && day != 22 && 
        day != 23 && day != 31 ? 'th' : (day == 2 || day == 22 ? 'nd' : 'rd')
    );

function CertificateGenerator() {
    const certificateRef = useRef();
    function downloadCertificateAsPDF() {
        const certificateRef = document.getElementById('certificate');
        const pdfOptions = {
          margin: 10,
          filename: `certificate.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
        };
    
        html2pdf()
          .from(certificateRef)
          .set(pdfOptions)
          .save();
    }    

    return (
        <div className='w-full h-screen bg-[rgb(8,51,68)] flex justify-center items-center'>
            <motion.div 
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.35,ease: "easeIn"}}
            className="certificate flex justify-center items-center flex-col text-center bg-gradient-to-br from-emerald-200 to-emerald-400 w-[70%] h-[85%] rounded-xl drop-shadow-sm hover:drop-shadow-xl cursor-pointer border-8 border-orange-500" ref={certificateRef} contentEditable={false}>
                <h1 className='text-7xl'>CERTIFICATE</h1>
                <h2 className='text-4xl mt-1'>OF COMPLETION</h2>
                <p className="content-1 text-md mt-6">THIS CERTIFICATE IS PROUDLY GIVEN TO</p>
                <div className="text-center name text-[42px] bg-teal-700 px-12 py-3 rounded-full text-white mt-6 mb-6">{username.fName} {username.lName}</div>
                <p className="content-2 text-md text-center">For successfully completing the course on {coursename}</p>
                <p className='content-2 text-center text-md mt-0'>Given this {day}{daySuffix} of {month + ', ' + year}</p>
                <div className="signature mt-4">
                    <img className="w-60 h-14" src={signature} alt="signature.png"/>
                    <h3 className='mb-1'>KIDvocate</h3>
                    <p>Leader | HackTitans</p>
                </div>
                <img className='absolute h-[55%] left-0 bottom-0' src={childrenBalloon} alt="childrenballon.png"/>
                <img className='absolute h-[33%] bottom-1 right-1 drop-shadow-md' src={education} alt="education.png"/>
                <img className='absolute w-28 top-10 left-4' src={cloud} alt="cloud.png"/>
                <img className='absolute w-28 top-36 left-28' src={cloud} alt="cloud.png"/>
                <img className='absolute w-28 top-10 right-4' src={cloud} alt="cloud.png"/>
                <img className='absolute w-28 top-36 right-28' src={cloud} alt="cloud.png"/>
                <img className='absolute h-[30%] left-40 -bottom-6' src={childLaw} alt="childlaw.png"/>
            </motion.div>
            <Button
                variant="contained"P
                onClick={downloadCertificateAsPDF}
                style={{
                    position: 'absolute',
                    right: '15px',
                    top: '15px',
                    borderRadius: '50px',
                    padding: '10px',
                    fontSize: '20px',
                }}
                >
                    <HiDownload />
            </Button>
            <Button
                variant="contained"
                href="/certificate"
                style={{
                    position: 'absolute',
                    right: '100px',
                    top: '15px',
                    borderRadius: '50px',
                    padding: '10px',
                    fontSize: '20px',
                }}
                >
                    <VscDebugRestart />
            </Button>
            <Button
                variant="contained"
                href="/courses"
                style={{
                    position: 'absolute',
                    left: '15px',
                    top: '15px',
                    borderRadius: '50px',
                    padding: '10px',
                    fontSize: '20px',
                }}
                >
                    <BiArrowBack />
            </Button>
    </div>
  )
}

export default CertificateGenerator