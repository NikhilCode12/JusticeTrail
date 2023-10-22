// import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from './Hero/Hero'
import Feature from '../Features/Features';
import Chat from '../Chatbot/Chat'
import Footer from "../Footer/Footer";

const Home = ()=>{
    return (
        <>
           <Navbar/>
           <Hero/>
           <Feature/>
           <Chat/>
           <Footer/> 
        </>
    )
}

export default Home;