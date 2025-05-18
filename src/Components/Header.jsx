import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className='w-[1920px] h-[120px]'>
            <img className='w-full h-[120px]' src="https://i.postimg.cc/TPzN6Vb2/15.jpg" alt="" />
            <nav>
               <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/addcoffee'}>Add Coffee</Link></li>
        <li><Link to={'/signin'}>Log in</Link></li>
        <li><Link to={'/signup'}>Sign Up</Link></li>
      </ul>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/addcoffee'}>Add Coffee</Link></li>
      <li><Link to={'/signin'}>Log in</Link></li>
      <li><Link to={'/signup'}>Sign Up</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
 
  </div>
</div>

            </nav>
        </div>
    );
};

export default Header;