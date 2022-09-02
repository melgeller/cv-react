import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    
      <section class="top-nav">
    <div>
    <img src="../assets/logo.png" alt="logo"/>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
    <li><NavLink onClick={() => {document.getElementById("menu-toggle").click()}} to='/'>HOME</NavLink></li>
      <li><NavLink onClick={() => {document.getElementById("menu-toggle").click()}} to='/about'>ABOUT</NavLink></li>
      <li><NavLink onClick={() => {document.getElementById("menu-toggle").click()}} to='/gallery'>PHOTOGRAPHY</NavLink></li>
      <li><NavLink onClick={() => {document.getElementById("menu-toggle").click()}} to='/projects'>CODING</NavLink></li>
      <li><NavLink onClick={() => {document.getElementById("menu-toggle").click()}} to='/more'>MORE</NavLink></li>
      <li><a href="https://www.linkedin.com/in/melgeller-foto/"><img src="../assets/linkedin.png" alt="link"/></a></li>
      <li><a href="https://github.com/melgeller"><img src="../assets/git.png" alt="link"/></a></li>
    </ul>
  </section>

  )
}

export default Navbar