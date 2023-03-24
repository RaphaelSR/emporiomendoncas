import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-whisper-amethyst text-nearly-white-hot py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Emporio Mendonças. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
