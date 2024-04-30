import React, { useState } from 'react';
import Mudra from './Mudra';
import Kreeda from './Kreeda';
import Alap from './Alap';
import './ClubTabs.css';
import Recurse from './Recurse';

const ClubTabs = () => {
  const [activeTab, setActiveTab] = useState('mudra');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="c-tabs">
        <div
          className={`tab ${activeTab === 'mudra' ? 'active' : ''}`}
          onClick={() => handleTabClick('mudra')}
        >
          <div>MUDRA</div>
        </div>
        <div
          className={`tab ${activeTab === 'kreeda' ? 'active' : ''}`}
          onClick={() => handleTabClick('kreeda')}
        >
          <div>KREEDA</div>
        </div>
        <div
          className={`tab ${activeTab === 'alap' ? 'active' : ''}`}
          onClick={() => handleTabClick('alap')}
        >
          <div>ALAP</div>
        </div>
        <div
          className={`tab ${activeTab === 'recurse' ? 'active' : ''}`}
          onClick={() => handleTabClick('recurse')}
        >
          <div>RECURES</div>
        </div>
      </div>
      {activeTab === 'mudra' && <Mudra />}
      {activeTab=== 'kreeda' && <Kreeda />}
      {activeTab==='alap'&& <Alap />}
      {activeTab==='recurse'&& <Recurse />}
    </div>
  );
};

export default ClubTabs;
