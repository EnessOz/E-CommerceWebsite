import './App.css';
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { RoutePage } from './RoutePage';
import { MdKeyboardDoubleArrowDown } from "react-icons/md"

function App() {
  const [showButton, setShowButton] = useState(false);



  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  return (
    <div className="App">
      <div
        className="menuContainer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        <button className="menuButton">MENU <MdKeyboardDoubleArrowDown /></button>
        <nav className={`menuItems ${showButton ? 'show' : ''}`}>
          <Navbar />
        </nav>
      </div>
      <RoutePage />
    </div>
  );
}

export default App;
