import React from 'react';
import '../App.css';
import Header from './Header';
import MenuSection from './MenuSection';

export default function MenuHomePage (props) {
  const { menu } = props

  // this will only render a menu section if that section contains items.
  // to prevent displaying empty section.
  const renderMenuSection = (menuSection) => {
    if(menuSection.MenuItems.length > 0){
      return (
        <MenuSection
          key={menuSection.MenuSectionId}
          pageConfig={menuSection}
        >
          {menuSection.Name}
        </MenuSection>
      );
    }
  }

  return(
    <div className="App">
      <div className="App-header">
        <Header/>
        <div className="Menu-body">
          {menu.map((menuSection) => (
            renderMenuSection(menuSection)
          ))}
        </div>
      </div>
    </div>
  )
}