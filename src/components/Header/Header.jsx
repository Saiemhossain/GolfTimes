/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { useState } from 'react';
import { NavLink } from "react-router-dom"
import logo from '../../assets/logo.png';



export default function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const {cart} = CartState()

  return (
    <>
      {/*<!-- Component: Basic Navbar --> */}
      <header className=" relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <div>
              <img src={logo} className="w-[140px] pt-6" />
            </div>

            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 '
                    : ''
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? 'visible opacity-100 backdrop-blur-sm'
                  : 'invisible opacity-0'
              }`}
            >
              <li role="none" className="flex items-stretch pt-2">
                <NavLink to={'/'}>
                  <a
                    href="/"
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  >
                    <span>Home</span>
                  </a>
                </NavLink>
              </li>

              <li role="none" className="flex items-stretch pt-2">
                <NavLink to={'/about'}>
                  <a
                    href="/about"
                    role="menuitem"
                    aria-current="page"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  >
                    <span>About</span>
                  </a>
                </NavLink>
              </li>
              <li role="none" className="flex items-stretch pt-2">
                <NavLink to={'/service'}>
                  <a
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  >
                    <span>Service</span>
                  </a>
                </NavLink>
              </li>
              <li role="none" className="flex items-stretch pt-2">
                <NavLink to={'/blog'}>
                  <a
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  >
                    <span>Blog</span>
                  </a>
                </NavLink>
              </li>
              <li role="none" className="flex items-stretch pt-2">
                <NavLink to={'/contact'}>
                  <a
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  >
                    <span>Contact</span>
                  </a>
                </NavLink>
              </li>
              
              <CartIcon cart={cart} />
            </ul>
          </nav>
        </div>
      </header>
      {/*<!-- End Basic Navbar--> */}
    </>
  );
}

import React from "react"
import { CartState } from '../../context/Context';

 function CartIcon({cart}) {
  return (
    <>
      <a
        href="#"
        className="relative inline-flex h-8 w-8 items-center justify-center rounded bg-indigo-500 text-lg text-white mt-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>

        <span className="absolute -top-2.5 -right-2.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-red-500 px-1.5 text-sm text-white">
          {cart.length} <span className="sr-only"> new emails </span>
        </span>
      </a>
      {/*<!-- End Rounded lg sized icon avatar with top right badge --> */}
    </>
  );
}
