import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import NavigationHeader from './components/NavigationHeader';
import MenuPage from './components/MenuPage';
import './App.css';

function App() {

  let [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((json) => setMenu(json));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <NavigationHeader/>
        <img src={logo} className="App-logo" alt="logo" />
          {console.log(menu)}
          {menu.map((menuSection) => (
            <MenuPage
              key={menuSection.MenuSectionId}
              pageConfig={menuSection}
            >
              {menuSection.Name}
            </MenuPage>
          ))}
      </header>
    </div>
  );
}

export default App;
