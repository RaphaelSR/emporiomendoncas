import React from "react";
import { motion } from "framer-motion";

const Showcase: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section
      className="relative bg-cover bg-center text-nearly-white-hot py-20"
      style={{
        backgroundImage:
          "url('https://www.tuhucarnes.com.br/wp-content/uploads/2020/05/FUNDO-GADO.jpg')",
      }}
    >
      <div
        className="absolute inset-0 bg-gray-700"
        style={{ opacity: 0.7 }}
      ></div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Empório Mendonças</h1>
          <p className="text-xl">
            Descubra nossos cortes de carne premium e faça o seu pedido agora
            mesmo!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
