import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [show, handleShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className='nav-items'>
        <img
          className='nav_logo'
          src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
          alt='Netflix logo'
        />
          <a href="/Home" className="nav_link px-2" style={{fontSize:"17px",fontFamily:"bold"}}>
            Home
          </a>
          <a href="/movies" className="nav_link px-2" style={{fontSize:"17px",fontFamily:"bold"}}>
            MovieDetails
          </a>
           

      </div>

      <div>
    <span className="nav_user" style={{color:"white",marginRight:"50px"}}>Welcome,Hrushikesh </span>
    <Link to="/" >
        <img
        className="nav_avatar"
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt='Netflix logo'
        />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
