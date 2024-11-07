// src/models/Conductor.js

class Conductor {
    constructor(nombre = '', apellido = '', cedula = '', fechaLicencia = '', tarifaPorServicio = 0) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.cedula = cedula;
      this.fechaLicencia = fechaLicencia;
      this.tarifaPorServicio = tarifaPorServicio;
    }
  }
  
  export default Conductor;
  