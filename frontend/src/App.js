import React from 'react'
// import ImageCard from './components/ImageCard'
import Header from './components/Header'
import Contact from "./pages/Contact";
import Invitation from './pages/Invitation';
import Ceremony from "./pages/Ceremony";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import DataTable  from "./pages/DataTable";
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
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/ceremony" element={<Ceremony/>}/>
                        <Route path="/datatable" element={<DataTable/>}/>
                    </Routes>
                    {/* <Qrcode/> */}
                <Footer/>    
            </Router>
        // </Layout>   
    )
}

export default App