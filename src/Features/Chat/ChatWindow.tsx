import React from 'react';
import ChatMessage from './ChatMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faFaceSmile, faPaperPlane, faBell } from '@fortawesome/free-solid-svg-icons';

const ChatWindow: React.FC = () => {
  const messages = [
    { sender: 'Hali', message: 'We invite you at our office for visit', time: '10:00', align: 'left' },
    { sender: 'Hali', message: 'Welcome', time: '10:05', align: 'left' },
    { sender: 'Jacob', message: 'It’s like a dream come true, thank you so much', time: '10:15', align: 'right' }
  ];

  return (
    <div className="flex flex-col h-full pt-20 mx-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-gray-700 text-xl font-medium">Gold Coast</div>
          <div className="text-sm text-gray-500">From: Hali</div>
        </div>
        <div className="flex items-center text-sm">
          <span>Status: Sale</span>
          <FontAwesomeIcon icon={faBell} className="w-4 h-4 ml-2" />
        </div>
      </div>
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            message={msg.message}
            time={msg.time}
            sender={msg.sender}
            align={msg.align as 'left' | 'right'}
          />
        ))}
      </div>
      <div className="flex mt-4 text-sm">
        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg mr-2">REQUEST VISIT</button>
        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg">MAKE OFFER</button>
      </div>
      <div className="mt-4 flex items-center">
        <button className="p-2">
          <FontAwesomeIcon icon={faFaceSmile} className="w-6 h-6 text-gray-500" />
        </button>
        <button className="p-2">
          <FontAwesomeIcon icon={faPaperclip} className="w-6 h-6 text-gray-500" />
        </button>
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-2 border border-gray-300 rounded-full mx-2"
        />
        <button className="p-3 bg-blue-500 rounded-full">
          <FontAwesomeIcon icon={faPaperPlane} className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
