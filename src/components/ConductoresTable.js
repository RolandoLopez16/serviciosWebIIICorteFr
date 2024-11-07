// src/components/ConductoresTable.js

import React from 'react';
import { deleteConductor } from '../controllers/conductoresController';

const ConductoresTable = ({ conductores, onEdit, onDelete }) => {

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este conductor?')) {
      try {
        await deleteConductor(id);
        onDelete();
      } catch (error) {
        console.error('Error al eliminar el conductor:', error);
      }
    }
  };

  return (
    <table className="w-full bg-white rounded-lg shadow-md">
      <thead>
        <tr className="bg-red-100 text-red-700">
          <th className="py-2 px-4">ID</th>
          <th className="py-2 px-4">Nombre</th>
          <th className="py-2 px-4">Apellido</th>
          <th className="py-2 px-4">Cédula</th>
          <th className="py-2 px-4">Fecha de Licencia</th>
          <th className="py-2 px-4">Tarifa por Servicio</th>
          <th className="py-2 px-4">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {conductores.map((conductor) => (
          <tr key={conductor._id} className="border-b">
            <td className="py-2 px-4">{conductor._id}</td>
            <td className="py-2 px-4">{conductor.nombre}</td>
            <td className="py-2 px-4">{conductor.apellido}</td>
            <td className="py-2 px-4">{conductor.cedula}</td>
            <td className="py-2 px-4">{conductor.fechaLicencia}</td>
            <td className="py-2 px-4">{conductor.tarifaPorServicio}</td>
            <td className="py-2 px-4">
              <button onClick={() => onEdit(conductor)} className="bg-green-600 text-white py-1 px-3 rounded mr-2 hover:bg-green-600">Editar</button>
              <button onClick={() => handleDelete(conductor._id)} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ConductoresTable;
