import React from 'react'
// import ImageCard from './components/ImageCard'
import Header from './components/Header'
// import Navbar from './components/Navbar'
import Contact from "./pages/Contact";
import About from "./pages/About";
import Ceremony from "./pages/Ceremony";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import Footer from './components/Footer';

const App = () => {
    return (
            <Router>
                {/* <Navbar /> */}
                <Header />
                    <Routes>
                        <Route exact path="/" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/ceremony" element={<Ceremony/>}/>
                    </Routes>
                <Footer/>    
            </Router>
    )
}

export default App