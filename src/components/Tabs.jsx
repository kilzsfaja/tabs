import React, { useState } from 'react'
import "../bootstrap.min.css"

function Tabs() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [activeContent, setActiveContent] = useState('');

  // arr of tab objects
  const tabs = [
    {label: 'Tab 1', content: 'This was much harder than I thought'},
    {label: 'Tab 2', content: 'Mixing bootstrap with a ternary in the same className was annoying to figure out. Why do we even bother with bootstrap?'},
    {label: 'Tab 3', content: 'I need a drink'}
  ];

  // setting active tabs + content
  const handleTabClick = (label, content) => {
    setActiveTab(label);
    setActiveContent(content);
  }

  return (
    <>
      <div className="container">
        <h1 className="mt-5">PUT IT ON MY TAB</h1>
        <ul className="nav nav-justified">
          {/* loop through arr of tabs */}
          {tabs.map( (e) => (
            <li key={e.label} onClick={ () => handleTabClick(e.label, e.content)} className={`p-5 fs-3 ${activeTab === e.label ? 'active' : ''}`}>
              {e.label}
            </li>
          ))}
        </ul>
        <p>{activeContent}</p>
      </div>
    </>
  );
}

export default Tabs