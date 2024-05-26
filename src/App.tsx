import React, { useState } from 'react';
import Profile from './Features/Chat/Profile';
import ChatList from './Features/Chat/ChatList';
import ChatWindow from './Features/Chat/ChatWindow';
import Navigation from './Features/Chat/Navigation';
import './index.css';

const App: React.FC = () => {
  const [currentChat, setCurrentChat] = useState<string>('');

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-100 border-r flex flex-col">
        <Profile />
        <Navigation/>
      </div>
      <div className="w-2/5 bg-gray-100 border-r">
        <ChatList setCurrentChat={setCurrentChat as React.Dispatch<React.SetStateAction<string | null>>} />
      </div>
      <div className="w-2/3">
        <ChatWindow />
      </div>
    </div>
  );
};
export default App;

