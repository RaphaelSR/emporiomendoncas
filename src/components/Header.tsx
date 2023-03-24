import React, { useEffect } from "react";
import Headroom from "headroom.js";

const Header: React.FC = () => {
  useEffect(() => {
    const header = document.getElementById("header");
    if (header) {
      const headroom = new Headroom(header, {
        offset: 100,
        tolerance: 5,
        classes: {
          initial: "headroom",
          pinned: "slideDown",
          unpinned: "slideUp",
          top: "top",
          notTop: "not-top",
        },
      });
      headroom.init();
    }
  }, []);

  return (
    <header
      id="header"
      className="fixed w-full bg-whisper-amethyst text-nearly-white-hot py-4 backdrop-blur-md opacity-90 transition-all duration-300"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="font-bold text-lg">Emporio Mendonças</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#inicio" className="hover:text-green-300">
                Início
              </a>
            </li>
            <li>
              <a href="#cortes" className="hover:text-green-300">
                Cortes de Carne
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-green-300">
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          {/* Botão de menu para dispositivos móveis */}
        </div>
      </div>
    </header>
  );
};

export default Header;
