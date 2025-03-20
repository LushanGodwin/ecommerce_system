import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({containerStyles ,onClick}) {
  const navLinks =[
    {path: '/', title: 'Home'},
    {path: '/collection', title: 'Collection'},
    {path: '/about', title: 'About'},
    {path: '/contact', title: 'Contact'}
  ]

  return(
    <nav className={`${containerStyles}`}>
      {navLinks.map((link)=>(
        <NavLink
          key={link.title}
          to={link.path}
          className={({ isActive }) =>`${isActive ? 'active-link' : ''} px-3 py-2 rounded-full`}
          onClick={onClick}
        > 
          {link.title}
        </NavLink>
      ))}
    </nav>

  ) 
}
