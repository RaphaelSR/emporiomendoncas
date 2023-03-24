import React from "react";

const Info: React.FC = () => {
  return (
    <section id="contato" className="bg-coco-crisp text-nearly-white-hot py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Entre em contato</h2>
        <p className="mb-4">
          Peças únicas, escolha o nome e o número da peça que você deseja e pode
          ir acendendo o fogo 🔥🥩
        </p>
        <p className="mb-4">
          Siga-nos no Instagram:{" "}
          <a
            href="https://www.instagram.com/emporiomendoncas"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-cindercoal hover:text-red"
          >
            @emporiomendoncas
          </a>
        </p>
        <p>
          Entre em contato pelo WhatsApp:{" "}
          <a
            href="https://wa.me/55991043604"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-cindercoal hover:text-red"
          >
            (99) 91043-604
          </a>
        </p>
      </div>
    </section>
  );
};

export default Info;
