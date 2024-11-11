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

 
  useEffect(() => {
    loadConductores();
  }, []);

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


  const handleFormSubmit = () => {
    loadConductores(); 
    setConductorEdit(null); 
  };


  const handleEdit = (conductor) => {
    setConductorEdit(conductor);
  };


  const handleDelete = () => {
    loadConductores(); 
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
