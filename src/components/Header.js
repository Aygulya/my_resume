import React from 'react';
import { Link } from 'react-router-dom';
import  {MyIcon}  from './css/svgs';

const Header = () => (
    <header>
      <h2>Aigul Hurbanova / Frontend developer </h2>      
  <nav className="centre">
  
            <ul>
                <li><Link to="/">About me</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contacts</Link></li>

            </ul>
        </nav>

    </header>
);

export default Header;
