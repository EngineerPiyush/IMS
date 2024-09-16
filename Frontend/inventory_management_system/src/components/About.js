import React from 'react';

const About = () => {
  return (
    <div className='container-fluid p-5 bg-light'>
      <div className='row'>
        <div className='col-lg-6'>
          <h1 className='display-4'>About Us</h1>
          <p className='lead'>
            Welcome to our Inventory Management System - MERN CRUD App. We are dedicated to providing a seamless experience for managing your inventory using the latest technologies.
          </p>
          <p>
            Our system allows you to add, update, and delete items with ease, helping you stay organized and efficient in your business operations.
          </p>
        </div>
        <div className='col-lg-6'>
          <img 
            src='https://shorturl.at/jxyBZ'
            className='img-fluid rounded'
            alt='Inventory Management'
            style={{ maxWidth: '850px', height: '300px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
