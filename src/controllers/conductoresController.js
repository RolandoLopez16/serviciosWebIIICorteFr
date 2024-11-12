const API_BASE = "https://apiservi.vercel.app";

// Función para obtener todos los conductores
export const getConductores = async () => {
  try {
    const response = await fetch(`${API_BASE}/api/conductores`);
    if (!response.ok) {
      throw new Error('Error al obtener los conductores');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para crear un nuevo conductor
export const createConductor = async (conductorData) => {
  try {
    const response = await fetch(`${API_BASE}/api/conductores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(conductorData),
    });
    if (!response.ok) {
      throw new Error('Error al crear el conductor');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para actualizar un conductor existente
export const updateConductor = async (id, conductorData) => {
  try {
    const response = await fetch(`${API_BASE}/api/conductores/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(conductorData),
    });
    if (!response.ok) {
      throw new Error('Error al actualizar el conductor');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para eliminar un conductor
export const deleteConductor = async (id) => {
  try {
    const response = await fetch(`${API_BASE}/api/conductores/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error al eliminar el conductor');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
