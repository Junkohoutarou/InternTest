import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-indigo-200 p-4">
      <div className="text-center m-10"></div> {/* Added closing tag */}
      <img src="jimi.jpg.webp" alt="Avatar" className="inline-block h-20 w-20 rounded-full ring-2 ring-white" />
      {/* Đã thêm sự kiện onClick để nhấp vào tên Jimi Hendrix */}
      <h2 className="mt-4 text-sm font-medium cursor-pointer" >
        Jimi Hendrix  
      </h2>
    </div>
  );
};

export default Profile;
