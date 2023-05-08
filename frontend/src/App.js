import React from 'react'
// import ImageCard from './components/ImageCard'
import Header from './components/Header'
// import Contact from "./pages/Contact";
import Invitation from './pages/Invitation';
import FairePart from "./pages/FairePart";
import Localisation from "./pages/Localisation";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import GuestList  from "./pages/GuestList";
import Accueil from './pages/Accueil';
// import Qrcode from './components/Qrcode';
// import Layout from './components/Layout';

const App = () => {
    return (
        // <Layout>
            <Router>
                <Header />
                    <Routes>
                        <Route exact path="/" element={<Accueil/>}/>
                        <Route path="/guest" element={<Invitation/>}/>
                        <Route path="/localisation" element={<Localisation/>}/>
                        {/* <Route path="/contact" element={<Contact/>}/> */}
                        <Route path="/faire-part" element={<FairePart/>}/>
                        <Route path="/guestList" element={<GuestList/>}/>
                    </Routes>
                    {/* <Qrcode/> */}
                <Footer/>    
            </Router>
        // </Layout>   
    )
}

export default App