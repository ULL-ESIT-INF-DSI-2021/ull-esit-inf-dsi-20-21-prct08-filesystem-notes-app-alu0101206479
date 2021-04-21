
import {MapReduce} from '../ejercicio-clase/MapReduce';

/**
 * Clase SubMapReduce, clase hija de MapReduce
 */

export class SubMapReduce extends MapReduce {
  constructor(miArray: number[]) {
    super(miArray);
  }

  /**
   * Función para reducir a través de la resta
   * @returns La resta de todos los elementos del array
   */
  public reduce() {
    let resta :number = 0;
    this.miArray.forEach((element) => {
      resta = resta - element;
    });
    return resta;
  }
}
