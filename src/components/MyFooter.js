import '../css/Footer.css'
import React from 'react'

function MyFooter () {
  return (
    <footer id="footer-content" className="fixed bottom-0 left-0 z-20 w-full bg-blue-800 shadow md:flex md:items-center md:justify-between md:p-2">
    <span className="text-sm text-white sm:text-center">© 2023 <a href="/" className="hover:underline"> N-L™</a>. Todos os Direitos reservados.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
        <li>
            <a href="/sobre" className="mr-4 hover:underline md:mr-6 ">Sobre</a>
        </li>
        <li>
            <a href="/contato" className="hover:underline">Contato</a>
        </li>
    </ul>
  </footer>)
}

export default MyFooter
