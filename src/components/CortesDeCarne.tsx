import React, { useState } from "react";
import { motion } from "framer-motion";
import { carnesData } from "../data";

interface Corte {
  id: number;
  nome: string;
  descricao?: string;
  imagem: string;
  cortes: {
    id: string;
    peso: string;
    preco: string;
  }[];
}

export default function CortesDeCarne() {
  const [selecionados, setSelecionados] = useState<string[]>([]);

  const handleSelect = (corteId: string) => {
    if (selecionados.includes(corteId)) {
      setSelecionados(selecionados.filter((item) => item !== corteId));
    } else {
      setSelecionados([...selecionados, corteId]);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de fazer um pedido para as seguintes carnes:\n${selecionados.join(
        "\n"
      )}\n\nPor favor, informe-me sobre a disponibilidade e o processo de compra.`
    );
    window.open(`https://wa.me/55991043604?text=${message}`);
  };

  const formatWeight = (weight: string) => {
    return weight.length < 4 ? `${weight}g` : `${weight}kg`;
  };

  return (
    <section id="cortes" className="bg-jet py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nossos Cortes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carnesData.map((corte: Corte) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`relative p-4 bg-white shadow-md rounded ${
                selecionados.some((id) =>
                  corte.cortes.map((c) => c.id).includes(id)
                )
                  ? "ring-2 ring-vermilion"
                  : ""
              }`}
              key={corte.id}
            >
              <img
                src={corte.imagem}
                alt={corte.nome}
                className="w-full h-64 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-2">{corte.nome}</h3>
              <p className="text-gray-600 mb-4">{corte.descricao}</p>
              {corte.cortes.map((c) => (
                <button
                  key={c.id}
                  className={`inline-flex items-center px-3 py-1 bg-gray-200 rounded shadow-sm text-sm font-medium text-gray-700 mr-2 mb-2 ${
                    selecionados.includes(c.id) ? "ring-2 ring-vermilion" : ""
                  }`}
                  onClick={() => handleSelect(c.id)}
                >
                  {formatWeight(c.peso)} - R${c.preco}
                </button>
              ))}
            </motion.div>
          ))}
        </div>
        {selecionados.length > 0 && (
          <div className="text-center mt-8">
            <button
              className="bg-cindercoal text-nearly-white-hot px-8 py-3 rounded font-semibold"
              onClick={handleWhatsApp}
            >
              Enviar pedido por WhatsApp
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
