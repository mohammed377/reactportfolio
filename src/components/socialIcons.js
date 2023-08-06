import React from "react";  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';  
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.instagram.com/mohammed_ismail330/" target="_blank"><FontAwesomeIcon className="larger-icon" icon={faInstagram} /></a>     
      <a href="https://github.com/mohammed377" target="_blank"><FontAwesomeIcon className="larger-icon" icon={faWhatsapp} /></a>          
      <a href="https://www.facebook.com/profile.php?id=100025330232754" target="_blank"><FontAwesomeIcon className="larger-icon" icon={faFacebook}/></a>           
      <a href="https://github.com/mohammed377" target="_blank"><FontAwesomeIcon className="larger-icon" icon={faGithub} /></a>         
    </div>  
  );  
};

export default SocialIcons;