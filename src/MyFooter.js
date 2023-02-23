// Personalized styles
import './Footer.css';
// JSX
import React from 'react';

function MyFooter() {
  return (
    <footer id="footer-content" class="fixed bottom-0 left-0 z-20 w-full bg-blue-800 shadow md:flex md:items-center md:justify-between md:p-2">
    <span class="text-sm text-white sm:text-center">© 2023 <a href="/" class="hover:underline"> N-L™</a>. Todos os Direitos reservados.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
        <li>
            <a href="/sobre" class="mr-4 hover:underline md:mr-6 ">Sobre</a>
        </li>
        <li>
            <a href="/contato" class="hover:underline">Contato</a>
        </li>
    </ul>
  </footer>);
}

export default MyFooter;
