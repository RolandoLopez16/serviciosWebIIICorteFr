import React, { useState } from 'react';

const HomeView = () => {
  const [showSwagger, setShowSwagger] = useState(false);

  const toggleSwaggerView = () => {
    setShowSwagger(!showSwagger);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg relative">
      <div className="flex items-center justify-between mb-4">
        <img src="/assets/logoEmpresa.png" alt="Logo Izquierdo" className="w-40 h-40" />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-700">Documentación de la API</h1>
          <p className="text-red-700">Consulta la documentación de nuestra API en el entorno Swagger.</p>
        </div>
        <img src="/assets/logoEmpresa.png" alt="Logo Derecho" className="w-40 h-40" />
      </div>

      <div className="flex justify-center mb-4">
        <button
          onClick={toggleSwaggerView}
          className="bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-red-900 transition-colors duration-300"
        >
          {showSwagger ? 'Ocultar Documentación' : 'Ver Documentación'}
        </button>
      </div>

      {showSwagger && (
        <div className="flex justify-center">
          <iframe
            src="https://apiservi.vercel.app/swagger/"
            title="Documentación API Swagger"
            width="100%"
            height="600px"
            className="border border-gray-300 rounded-lg"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default HomeView;
