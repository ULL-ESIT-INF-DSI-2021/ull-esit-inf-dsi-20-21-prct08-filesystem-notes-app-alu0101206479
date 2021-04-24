import 'mocha';
import {expect} from 'chai';
import {Nota} from '../src/aplicacion/nota';
import {Usuario} from '../src/aplicacion/usuario';
import * as fs from 'fs';

const notaUno = new Nota("Red note", "This is a red note", "red");
const notaDos = new Nota("Blue note", "This is a blue note", "blue");
const usuario = new Usuario("usuario_prueba");
usuario.añadirNota(notaUno.getTitulo(), notaUno.getCuerpo(), notaUno.getColor());

describe('Pruebas de la aplicación y sus clases', ()=> {
  describe('Pruebas clase Nota', ()=> {
    it('expect(notaUno).to.not.be.equal(null);', ()=>{
      expect(notaUno).to.not.be.equal(null);
    });
    it('expect(notaUno.getTitulo()).to.be.equal("Red note");', ()=>{
      expect(notaUno.getTitulo()).to.be.equal("Red note");
    });
    it('notaUno.setTitulo("Blue note");', ()=>{
      notaUno.setTitulo("Blue note");
      expect(notaUno.getTitulo()).to.be.equal("Blue note");
      notaUno.setTitulo("Red note");
    });
    it('expect(notaUno.getCuerpo()).to.be.equal("This is a red note");', ()=>{
      expect(notaUno.getCuerpo()).to.be.equal("This is a red note");
    });
    it('notaUno.setCuerpo("This is a blue note");', ()=>{
      notaUno.setCuerpo("This is a blue note");
      expect(notaUno.getCuerpo()).to.be.equal("This is a blue note");
      notaUno.setCuerpo("This is a red note");
    });
    it('expect(notaUno.getColor()).to.be.equal("red");', ()=>{
      expect(notaUno.getColor()).to.be.equal("red");
    });
    it('notaUno.setColor("blue");', ()=>{
      notaUno.setColor("blue");
      expect(notaUno.getColor()).to.be.equal("blue");
      notaUno.setColor("red");
    });
  });

  describe('Pruebas clase Usuario', ()=> {
    it('expect(usuario).to.not.be.equal(null);', ()=>{
      expect(usuario).to.not.be.equal(null);
    });
    it('usuario.añadirNota(notaDos.getTitulo(), notaDos.getCuerpo(), notaDos.getColor());', ()=>{
      usuario.añadirNota(notaDos.getTitulo(), notaDos.getCuerpo(), notaDos.getColor());
      expect(fs.existsSync(`src/aplicacion/usuarios/${usuario.getNombre()}/${notaDos.getTitulo()}.json`)).to.be.equal(true);
    });
    it('expect(usuario.getNotas()).to.deep.equal([notaUno, notaDos]);', ()=>{
      expect(usuario.getNotas()).to.deep.equal([notaUno, notaDos]);
    });
    it('usuario.modificarNota("Red note", "titulo", "Green note");', ()=>{
      usuario.modificarNota("Red note", "titulo", "Green note");
      expect(fs.existsSync(`src/aplicacion/usuarios/${usuario.getNombre()}/Green note.json`)).to.be.equal(true);
    });
    it('usuario.borrarNota("Green note");', ()=>{
      usuario.borrarNota("Green note");
      expect(usuario.getNotas()).to.deep.equal([notaDos]);
    });
    it('usuario.listarNotas();', ()=>{
      console.log();
      usuario.listarNotas();
    });
    it('suario.leerNota("Blue note");', ()=>{
      console.log();
      usuario.leerNota("Blue note");
    });
  });
});
