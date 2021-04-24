export class Nota {
  constructor(private titulo: string, private cuerpo: string, private color: string) {}

  getTitulo() {
    return this.titulo;
  }

  setTitulo(titulo: string) {
    this.titulo = titulo;
  }

  getCuerpo() {
    return this.cuerpo;
  }

  setCuerpo(cuerpo: string) {
    this.cuerpo = cuerpo;
  }

  getColor() {
    return this.color;
  }

  setColor(color: string) {
    this.color = color;
  }
}
