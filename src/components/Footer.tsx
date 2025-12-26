import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-24 bg-blue-800 w-full text-center flex justify-center gap-36 text-white">
      <p>
        <span className="font-semibold">Contacto:</span> <br />
        contacto@email.com
      </p>
      <p>
        <span className="font-semibold">Redes Sociales:</span> <br />
        @joseampies
      </p>
    </footer>
  );
};

export default Footer;