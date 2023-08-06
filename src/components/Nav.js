import React from 'react';
import SocialIcons from './socialIcons.js';
import myImage from './images/j.jpg';

const Nav = ({ links, switchContent, activeLink }) => {
  return (
    <div className="side-nav">
      <img src={myImage}className="profile-image" alt="profile_pic"/>
      {links.map(link => (
        <button
          key={link.id}  
          onClick={(e) => {
            e.preventDefault();
            switchContent(link.id);
          }}
          className={`clink ${activeLink === link.id ? 'active-link' : ''}`} 
         >
           {link.text}
         </button>
       ))}
       <SocialIcons />
    </div>
  ); 
}

export default Nav;