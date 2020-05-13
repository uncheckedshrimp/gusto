import React, { useState, useEffect } from "react";
import MenuHomePage from './components/MenuHomePage'

function App() {

  // this will make the api request for our menu which is returned
  // from the local mirage server in ./server
  let [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((json) => setMenu(json));
  }, []);

  return (
    <MenuHomePage menu={menu}/>
  );
}

export default App;
