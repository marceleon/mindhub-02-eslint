/* Función que genera txt con Tabla de Multiplicar */
const revisarTxt = (t) => ((Array.isArray(t)) ? t.join(' ') : t).trim();

class Persona {
  constructor(nom, ape, edad) {
    this.nombre = revisarTxt(nom).toUpperCase();
    this.apellido = revisarTxt(ape).toUpperCase();
    this.edad = edad;
  }

  datos_completo() {
    return `Nombre: ${this.nombre} Apellido:${this.apellido} Edad:${this.edad}`;
  }
}

Persona.prototype.toString = () => `${this.nombre} ${this.apellido}`;

module.exports = { Persona };
