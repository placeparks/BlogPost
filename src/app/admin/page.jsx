"use client"
import React, { useState } from 'react';
import SideBar from '@/components/sidebar/sideBar';
import AddPost from '../addPost/page';
import AddUser from '../addUser/page';
import GetPosts from '../getPosts/page';

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
        {activePanel === 'addUser' && <AddUser />}
        {activePanel === 'getPosts' && <GetPosts />}

      </div>
    </div>
  );
};

export default AdminPanel;

