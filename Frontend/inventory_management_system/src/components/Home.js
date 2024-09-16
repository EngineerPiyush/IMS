import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container-fluid p-5 bg-light text-center'>
      <h1 className='display-4 mb-4'>Welcome to Our Store</h1>
      <p className='lead'>
        Explore our wide range of products and find exactly what you need.
      </p>
      <NavLink to="/products" className='btn btn-primary btn-lg mt-4'>
        View Products
      </NavLink>
    </div>
  );
};

export default Home;
