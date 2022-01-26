/* Argumentos */
const valEdad = (e) => {
  if (Number.isNaN(e)) throw new Error('El argumento ingresado NO es un número');
  if (Array.isArray(e)) throw new Error('Debe ingresar UNA SOLA edad');
  if ((e) < 0 || (e >= 130)) throw new Error('Debes colocar un valor menor a 130');
  return true;
};

const valTxt = (t) => {
  let t2 = [];
  if (!Array.isArray(t)) { t2 = new Array(t); } else { t2 = t; }

  t2.forEach((e) => {
    if (e.length === 0) throw new Error('Debes completar nombre y apellido');
    if (!(/^[A-Za-z]+$/).test(e)) throw new Error(`${e} tiene caracteres inválidos`);
  });

  return true;
};

const arg = require('yargs')
  .options({
    n: {
      alias: 'nombre',
      type: 'string',
      describe: 'Nombre de la persona',
      demandOption: true,
    },
    a: {
      alias: 'apellido',
      type: 'string',
      describe: 'Apellido de la persona',
      demandOption: true,
    },
    e: {
      alias: 'edad',
      type: 'number',
      describe: 'Edad de la persona',
      demandOption: true,
    },
    d: {
      alias: 'delete',
      type: 'boolean',
      default: false,
      describe: 'Elimina a la persona',
      demandOption: true,
    },
  })
  .check((argv) => valEdad(argv.e) && valTxt(argv.n) && valTxt(argv.a))
  .argv;

module.exports = arg;
