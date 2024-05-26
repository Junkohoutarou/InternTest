import React from 'react';

interface ChatMessageProps {
  message: string;
  time: string;
  sender: string;
  align: 'left' | 'right';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, time, sender, align }) => {
  const isLeft = align === 'left';

  return (
    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} mb-4`}>
      {isLeft && <img src="hali.jpg" alt="Avatar" className="rounded-full w-10 h-10 mr-3" />}
      <div className={`flex flex-col ${isLeft ? 'items-start' : 'items-end'}`}>
        <div className={`p-2 rounded-full ${isLeft ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}>
          {message}
        </div>
        <span className="text-xs text-gray-500 mt-1">{time}</span>
      </div>
      
    </div>
  );
};

export default ChatMessage;
