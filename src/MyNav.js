// My new component

// Personalized styles
import './Nav.css';
// JSX
import React from 'react';
import backToTop from './backToTop';

function MyNav() {
  return (<div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
              <img src="./images/logos/NL-Logo.jpeg" className="h-6 mr-3 sm:h-10" alt="Empresa Logo" />
              <span className="self-center text-white text-xl font-semibold whitespace-nowrap">N&L</span>
          </a>
          <a href="/" className="flex items-center">
            <img src="./images/logos/mariana.jpeg" className="h-6 mr-3 sm:h-10" alt="Empresa Logo" />
            <span className="self-center text-white text-xl font-semibold whitespace-nowrap">Mariana</span>
          </a>
          <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white" aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul id="ul-navbar" className="flex flex-col items-center p-4 mt-4 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">Home</a>
              </li>
              <li>
                  <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">Mais <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                  <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-white rounded-lg shadow w-44">
                      <ul className="py-2 text-sm text-white" aria-labelledby="dropdownLargeButton">
                        <li>
                          <a href="/" className="block px-4 py-2 text-blue-600 hover:bg-white">Localização</a>
                        </li>
                        <li>
                          <a href="/" className="block px-4 py-2 text-blue-600 hover:bg-white">Opção 2</a>
                        </li>
                        <li>
                          <a href="/" className="block px-4 py-2 text-blue-600 hover:bg-white">Opção 3</a>
                        </li>
                      </ul>
                  </div>
              </li>
              <li>
                <a href="/servicos" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Serviços</a>
              </li>
              <li>
                <a href="/sobre" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Sobre</a>
              </li>
              <li>
                <a href="/clientes" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Clientes</a>
              </li>
              <li>
                <a href="/contato" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contato</a>
              </li>
              <li>
                <button id="to-top-anchor" onClick={backToTop} className="m-auto w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center flex justify-center " type="button">Retornar<svg className="w-4 h-4 ml-2 rotate-180" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
              </li>
            </ul>
          </div>
        </div>);
}

export default MyNav;
