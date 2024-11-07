// src/views/ConductoresView.js

import React, { useState, useEffect } from "react";
import ConductoresForm from "../components/ConductoresForm";
import ConductoresTable from "../components/ConductoresTable";
import { getConductores } from "../controllers/conductoresController";
import Loader from "../components/loader/loader";
 
const ConductoresView = () => {
  const [conductores, setConductores] = useState([]);
  const [conductorEdit, setConductorEdit] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cargar conductores al montar el componente
  useEffect(() => {
    loadConductores();
  }, []);

  // Función para cargar la lista de conductores desde la API
  const loadConductores = async () => {
    try {
      const data = await getConductores();
      setConductores(data);
    } catch (error) {
      console.error("Error al cargar los conductores:", error);
    } finally {
      setLoading(false);
    }
  };

  // Manejar envío del formulario
  const handleFormSubmit = () => {
    loadConductores(); // Recargar la lista de conductores
    setConductorEdit(null); // Limpiar el conductor en edición
  };

  // Manejar edición de conductor
  const handleEdit = (conductor) => {
    setConductorEdit(conductor);
  };

  // Manejar eliminación de conductor
  const handleDelete = () => {
    loadConductores(); // Recargar la lista de conductores después de eliminar
  };

  return (
    <div>
      <ConductoresForm
        conductorEdit={conductorEdit}
        onFormSubmit={handleFormSubmit}
      />
      {loading ? 
      (
        <Loader/>
      ) : 
      (
        <ConductoresTable
          conductores={conductores}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default ConductoresView;
