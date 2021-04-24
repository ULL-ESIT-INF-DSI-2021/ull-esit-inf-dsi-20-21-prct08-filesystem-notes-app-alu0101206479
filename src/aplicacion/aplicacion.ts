import {Nota} from '../aplicacion/notas';
import * as fs from 'fs';
import * as chalk from 'chalk';

class Usuario {
  private notas: Nota[] = [];

  constructor(private nombre: string) {
    const directorioExiste: boolean = fs.existsSync(`src/${this.nombre}`);

    if (directorioExiste) {
      const ficheros = fs.readdirSync(`src/${this.nombre}/`);

      ficheros.forEach((fichero) => {
        const contenidoNota = fs.readFileSync(`src/${this.nombre}/${fichero}`);
        const dataJson = JSON.parse(contenidoNota.toString());

        const nota = new Nota(dataJson.titulo, dataJson.cuerpo, dataJson.color);
        this.notas.push(nota);
      });
    } else {
      fs.mkdirSync(`src/${this.nombre}`);
    }
  }

  public getNombre() {
    return this.nombre;
  }

  public getNotas() {
    return this.notas;
  }

  public añadirNota(titulo: string, cuerpo: string, color: string) {
    const ficheroExiste: boolean = fs.existsSync(`src/${this.nombre}/${titulo}.json`);

    if (ficheroExiste == false) {
      this.notas.push(new Nota(titulo, cuerpo, color));
      fs.writeFile(`src/${this.nombre}/${titulo}.json`, `{\n\t"titulo": "${titulo}",\n\t"cuerpo": "${cuerpo}",\n\t"color": "${color}"\n}`, () => {
        console.log('New note added!');
      });
    } else {
      console.log("Note title taken!");
    }
  }

  public borrarNota(titulo: string) {
    const ficheroExiste: boolean = fs.existsSync(`src/${this.nombre}/`);

    if (ficheroExiste == false) {
      console.log("No note found");
    } else {
      let indice: number = 0;
      let i = 0;
      this.notas.forEach((nota) => {
        if (nota.getTitulo() == titulo) {
          indice = i;
        }
        i++;
      });
      this.notas.splice(indice, 1);

      fs.rm(`src/${this.nombre}/${titulo}.json`, () => {
        console.log('Note removed!');
      });
    }
  }

  public leerTitulos(titulo: string) {
    this.notas.forEach((nota) => {
      const color = nota.getColor();

      switch (color) {
        case "red":
          console.log(chalk.red(`${nota.getTitulo()}`));
          console.log(chalk.red(`${nota.getCuerpo()}`));
          break;
        case "green":
          console.log(chalk.green(`${nota.getTitulo()}`));
          console.log(chalk.green(`${nota.getCuerpo()}`));
          break;
        case "blue":
          console.log(chalk.blue(`${nota.getTitulo()}`));
          console.log(chalk.blue(`${nota.getCuerpo()}`));
          break;
        case "yellow":
          console.log(chalk.yellow(`${nota.getTitulo()}`));
          console.log(chalk.yellow(`${nota.getCuerpo()}`));
          break;
        default:
          break;
      }
    });
  }

  public leerNota(titulo: string) {
    const ficheroExiste: boolean = fs.existsSync(`src/${this.nombre}/`);

    if (ficheroExiste == false) {
      console.log("No note found");
    } else {
      let indice: number = 0;
      let i = 0;
      this.notas.forEach((nota) => {
        if (nota.getTitulo() == titulo) {
          indice = i;
        }
        i++;
      });

      const color = this.notas[indice].getColor();

      switch (color) {
        case "red":
          console.log(chalk.red(`${this.notas[indice].getTitulo()}`));
          console.log(chalk.red(`${this.notas[indice].getCuerpo()}`));
          break;
        case "green":
          console.log(chalk.green(`${this.notas[indice].getTitulo()}`));
          console.log(chalk.green(`${this.notas[indice].getCuerpo()}`));
          break;
        case "blue":
          console.log(chalk.blue(`${this.notas[indice].getTitulo()}`));
          console.log(chalk.blue(`${this.notas[indice].getCuerpo()}`));
          break;
        case "yellow":
          console.log(chalk.yellow(`${this.notas[indice].getTitulo()}`));
          console.log(chalk.yellow(`${this.notas[indice].getCuerpo()}`));
          break;
        default:
          break;
      }
    }
  }
}
