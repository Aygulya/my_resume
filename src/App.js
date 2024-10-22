import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import './components/css/styles.css'
const App = () => {
    return (
<>
            <Header />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            <Footer />
</>
    );
};

export default App;
