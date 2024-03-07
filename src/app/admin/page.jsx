"use client"
import React, { useState } from 'react';
import SideBar from '@/components/sidebar/sideBar';
import AddPost from '../addPost/page';

const AdminPanel = () => {
  const [activePanel, setActivePanel] = useState('');
  const handlePanelSelection = (panel) => {
    setActivePanel(panel);
  };
  return (
    <div className="flex">
      <SideBar onPanelSelect={handlePanelSelection} />
      <div className={`flex-1 ${activePanel === '' ? 'hidden' : ''}`}>
        {activePanel === 'addPost' && <AddPost />}
        {/* Add other components as needed for different panels */}
      </div>
    </div>
  );
};

export default AdminPanel;
