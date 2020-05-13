import React, { useState, useEffect } from "react";
import Header from './components/Header';
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
      <div className="App-header">
        <Header/>
        <div className="Menu-body">
          {menu.map((menuSection) => (
            <MenuPage
              key={menuSection.MenuSectionId}
              pageConfig={menuSection}
            >
              {menuSection.Name}
            </MenuPage>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
