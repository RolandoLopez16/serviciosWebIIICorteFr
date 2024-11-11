import React from 'react';

const HomeView = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Documentación de la API</h1>
      <p className="text-center mb-6">Consulta la documentación de nuestra API en el entorno Swagger.</p>
      
      <div className="flex justify-center">
        <iframe
          src="https://apiservi.vercel.app/swagger/"
          title="Documentación API Swagger"
          width="100%"
          height="600px"
          className="border border-gray-300 rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default HomeView;
