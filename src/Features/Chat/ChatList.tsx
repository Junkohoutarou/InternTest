import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

type ChatListProps = {
  setCurrentChat: React.Dispatch<React.SetStateAction<string | null>>;
};

interface Message {
  avatar: string;
  name: string;
  message: string;
  time: string;
  notificationCount: number;
  date: string;
}

const ChatList: React.FC<ChatListProps> = ({ setCurrentChat }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const chats: Message[] = [
    { avatar: 'hurinomar.jpg', name: 'Hurin Omar', message: 'Sure 8:00 PM', time: 'Now', notificationCount: 6, date: '2024-05-26' },
    { avatar: 'Shaikh.jpeg', name: 'Iftikhar Shaikh', message: 'early prototype of product', time: '13:18', notificationCount: 5, date: '2024-05-26' },
    { avatar: 'victor.jpeg', name: 'Victor Erixon', message: 'New project for you', time: '13:14', notificationCount: 3, date: '2024-05-26' },
    { avatar: 'hali.jpg', name: 'Hali', message: 'Welcome', time: '13:10', notificationCount: 0, date: '2024-05-26' },
    { avatar: 'jony.jpeg', name: 'Jony lve', message: 'Hey', time: 'Yesterday', notificationCount: 0, date: '2024-05-25' },
    { avatar: 'zakia.webp', name: 'Azastu Zakia', message: 'Are your there?', time: 'Yesterday', notificationCount: 0, date: '2024-05-25' },
    { avatar: 'sufiya.jpeg', name: 'Sufiya', message: 'metting around...', time: 'Yesterday', notificationCount: 0, date: '2024-05-25' },
    { avatar: 'pablo.jpeg', name: 'Pablo Stanley', message: 'Hay', time: 'Yesterday', notificationCount: 0, date: '2024-05-25' },
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h3 className="my-10 text-3xl">Chat</h3>
      {/* Ô tìm kiếm */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 w-full"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
        </div>
      </div>

      {/* Danh sách chat */}
      {filteredChats.map((chat, index) => (
        <div
          key={index}
          className="flex items-center p-2 hover:bg-gray-200 cursor-pointer rounded-lg transition-transform transform hover:scale-105 shadow hover:shadow-lg"
          onClick={() => setCurrentChat(chat.name)}
        >
          <img src={chat.avatar} alt="Avatar" className="h-10 w-10 rounded-full mr-2" />
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold">{chat.name}</h3>
                <p className="text-sm text-gray-600">{chat.message}</p>
              </div>
              <span className="text-xs text-gray-500">{chat.time}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-400">{chat.date}</span>
              {chat.notificationCount > 0 && (
                <span className="ml-auto flex justify-center items-center text-white h-4 w-4 rounded-full ring-2 ring-white bg-red-500 text-xs">
                  {chat.notificationCount}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
