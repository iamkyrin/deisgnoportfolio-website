import { useState } from "react";
import { Link } from "react-router-dom";

import AboutPage from "./About/AboutPage";
import logodark from "/public/assets/logo/logo-dark.png";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between 2xl:px-85 w-full mt-20">
      <div>
        <a href="/">
          <img
            src={logodark}
            alt="Business Logo"
            className="2xl:w-[15rem] lg:w-[15rem] md:w-[15rem] w-[13rem] ml-5 2xl:ml-0"
          />
        </a>
      </div>

      {/* HAMBRUGER MENU!!! */}
      <div className="lg:hidden ml-20">
        <button
          className="2xl:hidden md:hidden sm:block"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <div className="absolute right-4 top-6 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* NAVBAR!!! */}

      <nav className="jost400 text-gray-500">
        <ul className="hidden 2xl:flex md:flex gap-10 2xl:mr-30 lg:mr-30 md:mr-10">
          <li>
            <Link to={"/about"} className="cursor-pointer">
              OUR COMPANY
            </Link>
          </li>
          <li>
            <Link to={"/locations"} className="cursor-pointer">
              LOCATIONS
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="cursor-pointer">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      {/* HAMBRUGER MENU!!! */}
      {open && (
        <div className="w-25">
          <ul className="flex flex-col gap-10 mr-30 2xl:hidden md:hidden lg:hidden">
            <li>
              <Link to={"/about"} className="cursor-pointer">
                OUR COMPANY
              </Link>
            </li>
            <li>
              <Link to={"/locations"} className="cursor-pointer">
                LOCATIONS
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="cursor-pointer">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default Navbar;
