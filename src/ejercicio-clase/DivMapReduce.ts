
import {MapReduce} from '../ejercicio-clase/MapReduce';

/**
 * Clase DivMapReduce, clase hija de MapReduce
 */

export class DivMapReduce extends MapReduce {
  constructor(miArray: number[]) {
    super(miArray);
  }

  /**
   * Función para reducir a través de la division
   * @returns La division de todos los elementos del array
   */
  public reduce() {
    let division :number = 0;
    this.miArray.forEach((element) => {
      division = division / element;
    });
    return division;
  }

  public hookReduce() {
    console.log("Hacemos el reduce por la división");
  }
}
