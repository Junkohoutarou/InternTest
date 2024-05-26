import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faComment, faCalendarAlt, faTag, faFileInvoice, faCog } from '@fortawesome/free-solid-svg-icons';

const Navigation: React.FC = () => {
  return (
    <div className="p-4 bg-indigo-200 h-screen">
      <nav>
        <ul>
          <li className="my-10 flex items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <FontAwesomeIcon icon={ faHouse}  />
            <a href="#" className="text-xs font-thin text-gray-700 ml-2">PROPERTIES</a>
          </li>
          <li className="mb-10 flex items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <FontAwesomeIcon icon={faComment} />
            <a href="#" className="text-xs font-thin text-gray-700 ml-2">CHAT</a>
          </li>
          <li className="mb-10 flex items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <a href="#" className="text-xs font-thin text-gray-700 ml-2">CALENDAR</a>
          </li>
          <li className="mb-10 flex items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <FontAwesomeIcon icon={faTag} />
            <a href="#" className="text-xs font-thin text-gray-700 ml-2">OFFERS</a>
          </li>
          <li className="mb-10 flex items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <FontAwesomeIcon icon={faFileInvoice} />
            <a href="#" className="text-xs font-thin text-gray-700 ml-2">DOCUMENTS</a>
          </li>
          <li className="mb-10 flex items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <FontAwesomeIcon icon={faCog} />
            <a href="#" className="text-xs font-thin text-gray-700 ml-2">SETTINGS</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
