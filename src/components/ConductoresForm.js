import React, { useState, useEffect } from 'react';
import { createConductor, updateConductor } from '../controllers/conductoresController';
import Conductor from '../models/Conductor';

const ConductoresForm = ({ conductorEdit, onFormSubmit }) => {
  const [conductor, setConductor] = useState(new Conductor());

  useEffect(() => {
    if (conductorEdit) {
      setConductor(conductorEdit);
    }
  }, [conductorEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConductor({ ...conductor, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (conductorEdit) {
        await updateConductor(conductorEdit._id, conductor);
      } else {
        await createConductor(conductor);
      }
      onFormSubmit();
      setConductor(new Conductor());
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 py-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6 flex flex-col">
        <h2 className=" text-2xl font-bold mb-4 text-red-500 text-center">{conductorEdit ? 'Actualizar Conductor' : 'Agregar Conductor'}</h2>

        {conductorEdit && (
          <div className="mb-4">
            <label className="block text-gray-700">ID:</label>
            <input
              type="text"
              value={conductor._id || ''}
              readOnly
              className="w-full border-gray-300 rounded p-2 mt-1 bg-gray-100"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700">Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={conductor.nombre}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2 mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Apellido:</label>
          <input
            type="text"
            name="apellido"
            value={conductor.apellido}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2 mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Cédula:</label>
          <input
            type="text"
            name="cedula"
            value={conductor.cedula}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2 mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Fecha de Licencia:</label>
          <input
            type="date"
            name="fechaLicencia"
            value={conductor.fechaLicencia}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2 mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Tarifa por Servicio:</label>
          <input
            type="number"
            name="tarifaPorServicio"
            value={conductor.tarifaPorServicio}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2 mt-1"
          />
        </div>

        <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-60 m-auto">
          {conductorEdit ? 'Actualizar Conductor' : 'Agregar Conductor'}
        </button>
      </form>
    </div>
  );
};

export default ConductoresForm;
