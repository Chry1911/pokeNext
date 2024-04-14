"use client"

import React from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface NavigationMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavigationMenu = ({ isOpen, toggleMenu }: NavigationMenuProps) => {

  return (
    <div className="relative">
      <div className={`flex flex-col h-screen md:w-64 bg-gray-800 shadow-lg md:flex md:w-64 ${isOpen ? '': 'hidden md:flex'}`}>
        <div className="flex items-center justify-between h-16 bg-gray-900 text-white text-xl font-semibold">
          <button className="md:hidden ml-auto mr-4" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="flex items-center">
            <img src="/poke.png" alt="Pokemon Logo" className="h-8 mr-2" />
            <span className="ml-2">Card System</span>
          </div>
        </div>
        <ul className="py-4 md:flex-grow md:overflow-y-auto">
          <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">
            <Link href="/home">
              <span className="text-white hover:text-gray-300">Home</span>
            </Link>
          </li>
          <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">
            <Link href="/search">
              <span className="text-white hover:text-gray-300">Pokedex</span>
            </Link>
          </li>
          <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">
            <Link href="/deck">
              <span className="text-white hover:text-gray-300">Deck</span>
            </Link>
          </li>
          <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">
            <Link href="/pikachu">
              <span className="text-white hover:text-gray-300">Pikachu</span>
            </Link>
          </li>
        </ul>
        
        <div className="md:flex md:items-center md:justify-between px-6 py-4">
          <div className="flex items-center">
            <img
              src="/ash.png"
              alt="Avatar"
              className="rounded-full h-10 w-10 shadow-md mr-2"
            />
            <span className="text-white">Ash</span>
          </div>
          <Link href="/login">
            <span className="text-white hover:text-gray-300 cursor-pointer" onClick={toggleMenu}>
              Logout
            </span>
          </Link>
        </div>
      </div>
      {!isOpen && (
        <div className="absolute top-4 right-4 md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      )}
    </div>
  );
};

export default NavigationMenu;

