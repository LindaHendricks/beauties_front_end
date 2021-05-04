import Signup from './Signup';
import SignIn from './SignIn';
import React, {useState} from 'react';
import { NavLink } from "react-router-dom"


function Header({addCreative, setCreatives,isDarkMode, onToggleDarkMode}) {
//////setCurrentCreative///////////
    return (
        
        <header>
         <h1>Inspired</h1>
         <h3>Everyday, browse, like and save your next inspiration</h3>
          <div className="toggle-switch">
           <input type="checkbox" id="toggle-dark-mode" checked={isDarkMode} onChange={e => onToggleDarkMode(e.target.checked)} />
           <label htmlFor="toggle-dark-mode"></label>
           <Signup  addCreative={addCreative} setCreatives={setCreatives}/>
           <SignIn/>
           <NavLink exact to="/home">Home</NavLink>
           <NavLink exact to="/profile">My profile</NavLink>
           <NavLink exact to="/liked_images">Favorites</NavLink>
           <NavLink exact to="/saved_images">Saved Image</NavLink>
      </div>
      </header>
 
    )
        
}
 
export default Header;