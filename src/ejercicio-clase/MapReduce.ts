/**
 * Clase que representa
 */
export abstract class MapReduce {
  /**
   * Constructor de la clase comanda.
   */
  constructor(protected miArray: number[]) {}

  /**
   * Función para acceder al atributo miArray
   * @returns el objeto miArray
   */
  public getArray() {
    return this.miArray;
  }

  /**
   * Función para cambiar el atributo miArray
   * @param miArray El nuevo array
   */
  public setArray(miArray :number[]) {
    this.miArray = miArray;
  }

  public run() {
    this.setArray(this.map(function(x) {
      return x * 2;
    }));

    return this.reduce();
  }

  protected map(funcion: (arg0: number) => number) {
    const arrayNuevo: number[] = [];
    this.miArray.forEach((element) => {
      arrayNuevo.push(funcion(element));
    });
    return arrayNuevo;
  }

  public abstract reduce(): number;


}

