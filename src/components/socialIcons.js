import React from "react";  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.instagram.com/mohammed_ismail330/"><FontAwesomeIcon className="larger-icon" icon={faInstagram} /></a>     
      <a href="https://www.facebook.com/profile.php?id=100025330232754"><FontAwesomeIcon className="larger-icon" icon={faFacebook}/></a>           
      <a href="https://github.com/mohammed377"><FontAwesomeIcon className="larger-icon" icon={faGithub} /></a>         
    </div>  
  );  
};

export default SocialIcons;