import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
    return (
        <div className="social-icons">
            <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer" title="Telegram">
                <FontAwesomeIcon icon={faTelegram} style={{ backgroundColor: '#E0E0E0' }}/>
            </a>
            <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer" title="Instagram">
                <FontAwesomeIcon icon={faInstagram} style={{ backgroundColor: '#E0E0E0' }}/>
            </a>
            <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer" title="Facebook">
                <FontAwesomeIcon icon={faFacebook} style={{ backgroundColor: '#E0E0E0' }} />
            </a>
            <a href="https://www.linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} style={{ backgroundColor: '#E0E0E0' }} /> 
            </a>
        </div>
    );
};

export default SocialIcons;
