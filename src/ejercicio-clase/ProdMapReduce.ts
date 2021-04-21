
import {MapReduce} from '../ejercicio-clase/MapReduce';

/**
 * Clase ProdMapReduce, clase hija de MapReduce
 */

export class ProdMapReduce extends MapReduce {
  constructor(miArray: number[]) {
    super(miArray);
  }

  /**
   * Función para reducir a través de la multiplicación
   * @returns La multiplicación de todos los elementos del array
   */
  public reduce() {
    let multiplicación :number = 0;
    this.miArray.forEach((element) => {
      multiplicación = multiplicación * element;
    });
    return multiplicación;
  }

  public hookReduce() {
    console.log("Hacemos el reduce por la multiplicación");
  }
}
