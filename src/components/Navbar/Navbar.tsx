import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";  

const Menu = [
  {
    id: 1,
    name: "Inicio",
    link: "/#",
  },
  {
    id: 2,
    name: "Serviços",
    link: "/categories",
  },
  {
    id: 3,
    name: "Sobre",
    link: "/Sobre",  
  },
];

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 py-">
        <div className="container py-1 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-1xl sm:text-4xl flex gap-0 items-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-verde">
                <img src="https://i.ibb.co/QFpjykTY/FastChef.png" alt="Logo" className="w-[50px]" />
                FastChef
              </a>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <ul className="hidden sm:flex items-center gap-2">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <Link
                      to={menu.link}  // Usando Link para navegação
                      className="inline-block py-4 px-4 hover:text-yellow-500"
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-red-400 to-red-200 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
                Comprar
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
