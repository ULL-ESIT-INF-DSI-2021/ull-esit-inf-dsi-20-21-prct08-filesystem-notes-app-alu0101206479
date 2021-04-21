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

  /**
   * Función run que servirá para hacer el map y el reduce
   * @returns El resultado del reduce
   */
  public run() {
    this.hookMap();
    this.setArray(this.map((x) => {
      return x * 2;
    }));

    this.hookReduce();
    return this.reduce();
  }

  /**
   * FUnción map
   * @param funcion función a ejecutar
   * @returns El nuevo array resultado de la funcion
   */
  protected map(funcion: (arg0: number) => number) {
    const arrayNuevo: number[] = [];
    this.miArray.forEach((element) => {
      arrayNuevo.push(funcion(element));
    });
    return arrayNuevo;
  }

  /**
   * Función reduce
   */
  public abstract reduce(): number;

  /**
   * Función hook para antes del map
   */
  protected hookMap() {
    console.log("Hacemos el map");
  }

  /**
   * Función hook para antes del reduce
   */
  public abstract hookReduce(): void;
}

