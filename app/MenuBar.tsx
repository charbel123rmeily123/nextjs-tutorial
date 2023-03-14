'use client';
import Link from "next/link";
import React, { useState } from "react"; 

function MenuBar(){

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleItemClick = () => {
    setShowMenu(false);
  };

  return (
    <div> 
      {showMenu ? (
        <ul className="show-menu" >
          <li>
            <Link href="/" onClick={handleItemClick} className="px-2 py-1 bg-white text-blue-500 rounded-lg">
              Home
            </Link>
          </li>
          <li>
            <Link href="/search" onClick={handleItemClick} className="px-2 py-1 bg-white text-blue-500 rounded-lg">
              Search
            </Link>
          </li>
          <li>
            <Link href="/todos" onClick={handleItemClick} className="px-2 py-1 bg-white text-blue-500 rounded-lg">
              Todos
            </Link>
          </li>
        </ul>
      ) : (
        <button  className="px-2 py-1 bg-white text-blue-500 rounded-lg" onClick={toggleMenu}>Menu</button>
      )}
      <style jsx>{`

        .show-menu {
          display: flex;
          flex-direction: column;
          padding: 0;
          margin: 0;
         list-style:none;
        
        }
        .show-menu li {
          padding: 5px 0;
          
        }
      `}</style>
    </div>
  );
}

export default MenuBar;