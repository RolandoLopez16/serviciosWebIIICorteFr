import React, { useState } from 'react';
import Loader from "../components/loader/loader";

const HomeView = () => {
  const [showSwagger, setShowSwagger] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSwaggerView = () => {
    setShowSwagger(!showSwagger);
    if (!showSwagger) {
      setIsLoading(true); // Muestra el loader cuando se muestra el iframe
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false); // Oculta el loader una vez que el iframe ha cargado
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
          {isLoading && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-white">
              <Loader /> {/* Utiliza el componente Loader */}
            </div>
          )}
          <iframe
            src="https://apiservi.vercel.app/swagger/"
            title="Documentación API Swagger"
            width="100%"
            height="600px"
            className="border border-gray-300 rounded-lg"
            onLoad={handleIframeLoad}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default HomeView;
