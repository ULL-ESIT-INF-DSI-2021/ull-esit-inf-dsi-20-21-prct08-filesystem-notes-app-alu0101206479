import 'mocha';
import {expect} from 'chai';
import {Nota} from '../src/aplicacion/nota';
import {Usuario} from '../src/aplicacion/usuario';
import * as yargs from 'yargs';

describe('Pruebas de la aplicación y sus clases', ()=> {
  describe('Pruebas clase Nota', ()=> {
    const nota = new Nota("Red note", "This is a red note", "red");
    it('expect(nota).to.not.be.equal(null);', ()=>{
      expect(nota).to.not.be.equal(null);
    });
    it('expect(nota.getTitulo()).to.be.equal("Red note");', ()=>{
      expect(nota.getTitulo()).to.be.equal("Red note");
    });
    it('nota.setTitulo("Blue note");', ()=>{
      nota.setTitulo("Blue note");
      expect(nota.getTitulo()).to.be.equal("Blue note");
      nota.setTitulo("Red note");
    });
    it('expect(nota.getCuerpo()).to.be.equal("This is a red note");', ()=>{
      expect(nota.getCuerpo()).to.be.equal("This is a red note");
    });
    it('nota.setCuerpo("This is a blue note");', ()=>{
      nota.setCuerpo("This is a blue note");
      expect(nota.getCuerpo()).to.be.equal("This is a blue note");
      nota.setCuerpo("This is a red note");
    });
    it('expect(nota.getColor()).to.be.equal("red");', ()=>{
      expect(nota.getColor()).to.be.equal("red");
    });
    it('nota.setColor("blue");', ()=>{
      nota.setColor("blue");
      expect(nota.getColor()).to.be.equal("blue");
      nota.setColor("red");
    });
  });
});
