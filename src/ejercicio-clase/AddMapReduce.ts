
import {MapReduce} from '../ejercicio-clase/MapReduce';

/**
 * Clase AddMapReduce, clase hija de MapReduce
 */

export class AddMapReduce extends MapReduce {
  constructor(miArray: number[]) {
    super(miArray);
  }

  /**
   * Función para reducir a través de la suma
   * @returns La suma de todos los elementos del array
   */
  public reduce() {
    let suma :number = 0;
    this.miArray.forEach((element) => {
      suma = suma + element;
    });
    return suma;
  }

  public hookReduce() {
    console.log("Hacemos el reduce por la suma");
  }
}
