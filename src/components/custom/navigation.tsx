import React from "react";
import Link from 'next/link';

const NavigationMenu = () => {
  return (
    <div className="flex flex-col h-screen w-64 bg-gray-800 shadow-lg">
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-center h-16 bg-gray-900 text-white text-xl font-semibold">
          <img src="/poke.png" alt="Pokemon Logo" className="h-8 mr-2" />
          <span className="ml-2">Card System</span>
        </div>
        <ul className="py-4 flex-grow overflow-y-auto">
          <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">
            <Link href="/home">
              <span className="text-white hover:text-gray-300">Home</span>
            </Link>
          </li>
          <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">
            <a className="text-white hover:text-gray-300">Cerca Pokemon</a>
          </li>
          <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">
            <a className="text-white hover:text-gray-300">Deck</a>
          </li>
          <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">
            <Link href="/pikachu">
              <span className="text-white hover:text-gray-300">Pikachu</span>
            </Link>
          </li>
        </ul>
        {/* Avatar and Logout */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <img
              src="/ash.png"
              alt="Avatar"
              className="rounded-full h-10 w-10 shadow-md mr-2"
            />
            <span className="text-white">Ash</span>
          </div>
          <button
            className="text-white hover:text-gray-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
