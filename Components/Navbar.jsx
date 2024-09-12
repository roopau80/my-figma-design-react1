import React, { useState } from "react";
import "../App.css";
import Button from "./Button";
import shoeslogo from "../images/shoes2-done.png";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "COLLECTIONS", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <header className=" bg-stone-900">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center">
          <img className="w-12" src={shoeslogo} alt="shoes" />
          <span className="mt-2 text-sm text-white">SHOP WAY</span>
        </div>

        {/* Hamburger Menu Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute text-3xl text-white cursor-pointer right-8 top-6 md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center flex-1">
          <ul
            className={`md:flex md:items-center md:pb-0 pl-8 pb-8 absolute md:static bg-stone-900 left-0 w-full md:z-auto md:w-auto md:pl-0  transition-all duration-500 ease-in ${
              open ? "top-20 opacity-100 z-20" : "top-[-490px]"
            }`}
          >
            {Links.map((Link) => (
              <li
                key={Link.name}
                className="font-semibold text-md md:ml-8 md:my-0 my-7"
              >
                <a className="text-white hover:text-gray-500" href={Link.link}>
                  {Link.name}
                </a>
              </li>
            ))}
            {/* LOGIN Button on smaller screens */}
            <li className="md:hidden my-7">
              <Button>LOGIN</Button>
            </li>
          </ul>
        </div>

        {/* LOGIN Button on larger screens */}
        <div className="hidden md:block">
          <Button>LOGIN</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
