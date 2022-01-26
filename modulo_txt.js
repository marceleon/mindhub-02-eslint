/* Función que genera txt con Tabla de Multiplicar */

const fs = require('fs');
const colors = require('colors');
const Persona = require('./modulo_persona');

class Txt {
  constructor(a) {
    this.archivo = a;
    this.archivo_full = `${__dirname}/${this.archivo}`;
  }

  abrir() {
    return new Promise((res, rej) => {
      fs.open(
        this.archivo_full,
        'a+',
        '666',
        (e, d) => ((e) ? rej(e) : res(d)),
      );
    });
  }

  agregar(p) {
    // this.p=Object.assign({}, p);
    this.nom = p.datos_completo();

    this.abrir().then((res) => {
      fs.write(
        res,
        `${this.nom}\n`,
        0,
        (e) => {
          if (e) throw e;
          else console.log(`${colors.green('Agregando')} >> ${this.nom} a >> ${colors.green(this.archivo)}`);
        },
      );
    }).catch((rej) => {
      console.log(colors.bgRed('ERROR:') + rej.message);
    });
  }

  cargar() {
    let resultado = '';
    if (fs.existsSync(this.archivo_full)) resultado = fs.readFileSync(this.archivo_full);
    return resultado;
  }

  eliminar(p) {
    this.nom = p.datos_completo();

    let r = this.cargar();
    if (typeof (r) !== 'string') r = r.toString();

    if (r.indexOf(this.nom) >= 0) {
      const nuevo = r.replaceAll(`${p.datos_completo()}\n`, '');

      try {
        fs.writeFileSync(this.archivo_full, nuevo);
        console.log(`${colors.yellow('Eliminando')} >> ${this.nom} de >> ${colors.yellow(this.archivo)}`);
      } catch (e) {
        console.log(colors.bgRed('ERROR:') + e.message);
      }
    } else {
      console.log(`${colors.bgMagenta(this.nom)} no se encuentra!`);
    }
  }
}

module.exports = { Persona, Txt };
