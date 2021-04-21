import 'mocha';
import {expect} from 'chai';
import {MapReduce} from '../src/ejercicio-clase/MapReduce';
import {AddMapReduce} from '../src/ejercicio-clase/AddMapReduce';
import {SubMapReduce} from '../src/ejercicio-clase/SubMapReduce';
import {ProdMapReduce} from '../src/ejercicio-clase/ProdMapReduce';
import {DivMapReduce} from '../src/ejercicio-clase/DivMapReduce';

const miMapReduceUno = new AddMapReduce([2, 4, 5, 8]);
const miMapReduceDos = new SubMapReduce([2, 4, 5, 8]);
const miMapReduceTres = new ProdMapReduce([2, 4, 5, 8]);
const miMapReduceCuatro = new DivMapReduce([2, 4, 5, 8]);

describe('Pruebas del ejercicio de clase', ()=> {
  describe('Pruebas clase AddMapReduce', ()=> {
    it('expect().to.deep.equal();', ()=>{
      expect(miMapReduceUno.run()).to.be.equal(38);
    });
  });
  describe('Pruebas clase AddMapReduce', ()=> {
    it('expect().to.deep.equal();', ()=>{
      expect(miMapReduceDos.run()).to.be.equal(38);
    });
  });
  describe('Pruebas clase AddMapReduce', ()=> {
    it('expect().to.deep.equal();', ()=>{
      expect(miMapReduceTres.run()).to.be.equal(38);
    });
  });
  describe('Pruebas clase AddMapReduce', ()=> {
    it('expect().to.deep.equal();', ()=>{
      expect(miMapReduceCuatro.run()).to.be.equal(38);
    });
  });
});
