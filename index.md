# Informe
## Práctica 8 - Aplicación de procesamiento de notas de texto
### Desarrollo de Sistemas Informáticos
### ACOIDAN MESA HERNANDEZ - alu0101206479@ull.edu.es


#### Introducción
Esto es un informe para poder llevar a cabo la **práctica 8 de Desarrollo de Sistemas Informáticos**, hemos vuelto a crear una estructura de directorios adecuada (algo que ya sabíamos de prácticas anteriores), añadiendole el uso del generador de documentación [TypeDoc](https://typedoc.org/) y el uso de [Mocha](https://mochajs.org/) (Marco de pruebas rico en funciones) con [Chai](https://www.chaijs.com/) (Librería de aserciones BDD / TDD para node y el navegador que se puede combinar con cualquier marco de pruebas JS o TS, en este caso lo hemos configurado con Mocha). También hemos añadido [Instanbul](https://istanbul.js.org/) (Una herramienta que permite obtener informes sobre el cubrimiento del código fuente llevado a cabo por las pruebas que haya diseñado), hemos aplicado la integración continua mediante [GitHub Actions](https://docs.github.com/en/actions) (permite crear flujos de trabajo que se pueden utilizar para compilar, probar y desplegar código, dando la posibilidad de crear flujos de integración y despliegue continuo dentro del propio repositorio de git) y hemos aplicado la comprobación de la calidad y seguridad del código fuente mediante [Sonar Cloud](https://sonarcloud.io/) (Plataforma de análisis de código continuo y online con la que puedes analizar tus proyectos y ver los resultados online en la nube) y GitHub Actions

A parte, como se ha llevado a cabo la metodología **TDD**, hemos reforzado nuestros conocimientos sobre ello una vez más. Y también hemos aprendido a **trabajar con ficheros, a través de la [API síncrona proporcionada por Node.js para trabajar con el sistema de ficheros](https://nodejs.org/dist/latest-v15.x/docs/api/fs.html#fs_synchronous_api)**, a usar los paquetes **[yargs](https://www.npmjs.com/package/yargs) y [chalk](https://www.npmjs.com/package/chalk)** y a aplicar los **principios SOLID** una vez más. En este informe se mostrarán la solución diseñada para la aplicación de procesamiento de notas de texo.

También cabe destacar que hemos usado de nuevo los [issues de Github](https://guides.github.com/features/issues/), ya que era por dónde único podríamos comunicarle al profesorado cualquier tipo de incidencia relacionada con la práctica.




#### Objetivos
Los objetivos de esta práctica han sido crear la estructura de directorios adecuada para trabajar, añadiendole el generador de documentación TypeDoc, el uso del marco de pruebas Mocha con la libreria Chai y Instanbul para obtener un informe de cubrimiento de nuestro código cada vez que ejecutasemos las pruebas.También debimos aplicar la integración continua mediante GitHub Actions y aplicar la comprobación de seguridad y calidad del código mediante SonarCloud y GitHub Actions, aparta de usar los paquetes chalk y yargs. Pero lo principal ha sido implementar una aplicación de procesamiento de notas de texto que nos pedían en el [enunciado](https://ull-esit-inf-dsi-2021.github.io/prct08-filesystem-notes-app/).




#### Crear la estructura básica y adecuada del proyecto, añadiendole el generador de documentación TypeDoc, el uso del marco de pruebas Mocha con la librería Chai, la herramienta Instanbul, la aplicación de GitHub Actions y la aplicación de SonarCloud
Para crear la [estructura básica del proyecto](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html), lo haremos como lo hicimos en prácticas anteriores (Estará el enlace al informe de esta en la bibliografía), también podemos pinchar el hiperenlace adjuntado que se encontrará disponible también en la bibliografía.

Instalaremos Instanbul a través de la siguiente guía:

  * [https://istanbul.js.org/](https://istanbul.js.org/)

Lo instalamos para que en cada ejecución de las pruebas nos salga un informe de cubrimiento de nuestro código, algo como lo siguiente:

![Informe de cubrimiento de código](src/informecubrimiento.png)

Posteriormente, para configurar y aprender a usar el generador de configuración [TypeDoc](https://typedoc.org/) y el marco de pruebas [Mocha](https://mochajs.org/) con la librería [Chai](https://www.chaijs.com/), la aplicación de [GitHub Actions](https://docs.github.com/en/actions) y la aplicación de [SonarCloud](https://sonarcloud.io/) podremos consultar la documentación o pinchar en los siguientes hiperenlaces a vídeos explicativos (Estos enlaces también se encuentran en la bibliografía):

  * [Vídeo de ejemplo de instalación y configuración de TypeDoc en un proyecto TypeScript](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view)
  * [Vídeo de ejemplo de instalación y configuración de Mocha y Chai en un proyecto TypeScript](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view?usp=sharing)
  * [Vídeo de ejemplo de integración continua de código fuente TypeScript ejecutado en Node.js a través de una GitHub Action](https://drive.google.com/file/d/1hwtPovQlGvthaE7e7yYshC4v8rOtLSw0/view)
  * [Vídeo de ejemplo de configuración de workflow de GitHub Actions para enviar información de cubrimiento a Coveralls](https://drive.google.com/file/d/1yOonmpVbOyvzx3ZbXMQTAPxvA3a7AE7w/view?usp=sharing)
  * [Vídeo de ejemplo de configuración de workflow de GitHub Actions para comprobar la calidad y seguridad del código fuente con Sonar Cloud](https://drive.google.com/file/d/1FLPargdPBX6JaJ_85jNsRzxe34sMi-Z3/view?usp=sharing)

Finalmente, nos tiene que quedar algo parecido a lo siguiente (Se muestra a la izquierda la estructura y en el medio algunos archivos abiertos para que se vea su interior):

![Estructura del directorio](src/estructurafinal.png)




#### Aplicación de procesamiento de notas de texto
En cuanto al diseño y la estructura decidida para realizar la aplicación la veremos a continuación, podemos ver los requisitos de la aplicación [en el enunciado de la práctica 8](https://ull-esit-inf-dsi-2021.github.io/prct08-filesystem-notes-app/). El código fuente de la aplicación deberá estar alojado en un directorio independiente con nombre `aplicacion/` dentro del directorio `src/` de nuestro proyecto. Sin embargo, las notas que se crean, se van a almacenar en el directorio del usuario correspondiente, el cual está dentro de el directorio `/usuarios`

Cabe destacar que también se debe aportar la documentación mediante el uso de TypeDoc y usar una metodología de desarrollo dirigido por pruebas/comportamiento. El código fuente de las pruebas deberá estar alojado en un fichero (`aplicacion.spec.ts`) dentro del directorio `tests/`.



##### Clases
Para la aplicación deberemos crear las siguientes clases:

  * Clase `Nota`: Es una clase que representa una nota. Su código lo podremos observar en el siguiente enlace:

      [https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101206479/blob/master/src/aplicacion/nota.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101206479/blob/master/src/aplicacion/nota.ts)
          
    Esta clase contendrá los siguientes atributos privados:
      * `titulo`: Título de la nota (String) 
      * `cuerpo`: Cuerpo de la nota (String)
      * `color`: Color de la nota (String)

    Y contendrá las siguientes funciones públicas:
      * `getTitulo()`: Función para obtener el atributo privado `titulo`
      * `setTitulo(titulo: string)`: Función para cambiar el atributo privado `titulo`
      * `getCuerpo()`: Función para obtener el atributo privado `cuerpo`
      * `setCuerpo(cuerpo: string)`: Función para cambiar el atributo privado `cuerpo`
      * `getColor()`: Función para obtener el atributo privado `color`
      * `setColor(color: string)`: Función para cambiar el atributo privado `color`


  * Clase `Usuario`: Es una clase que representa a los usuarios que utilizan la aplicación de notas, cuando se construye un objeto de esta clase, al atributo notas se le introducen las notas correspondientes del usuario, que se han sacado de leer el contenido de su directorio correspondiente. Pero, si el usuario no tiene su directorio correspondiente, pues se le crea. Su código lo podremos observar en el siguiente enlace:

      [https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101206479/blob/master/src/aplicacion/usuario.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101206479/blob/master/src/aplicacion/usuario.ts)
      
    Esta clase contendrá los siguientes atributos privados:
      * `nombre`: Nombre del usuario (String) 
      * `notas`: Notas del usuario (Nota[]) 

    Y contendrá las siguientes funciones públicas:
      * `getNombre()`: Función para obtener el atributo privado `nombre`
      * `setNombre(nombre: string)`: Función para cambiar el atributo privado `nombre`
      * `getNotas()`: Función para obtener el atributo privado `notas`
      * `añadirNota(titulo: string, cuerpo: string, color: string)`: Función que le añade una nota al usuario, tanto al atributo notas con la función `push(nota)`, como al directorio del usuario con la función `fs.writeFileSync(ruta, texto, manejador)`
      * `modificarNota(tituloNota: string, parametroEditar: string, nuevoValor: string)`: Función que le modifica un atributo concreto a una nota del usuario, tanto en el atributo notas (Con las funciones correspondientes para ello de la clase `Nota`), como  en el directorio del usuario (Con la función `fs.writeFileSync(ruta, texto, manejador)` para editar tanto el título, como el cuerpo, como el color y usando la función `fs.renameSync(titulo viejo, titulo nuevo)` para cambiar el nombre del fichero cuando se cambie el título.
      * `borrarNota(titulo: string)`: Función que le borra una nota concreta al usuario, lo primero que se hace es comprobarse si la nota existe con la función `fs.existSync(ruta titulo)` y si existe la nota se borra tanto del atributo notas (Con la función `splice(indice, 1)`, como del directorio del usuario (Con la función `fs.rm(ruta, manejador)`)
      * `listarNotas()`: Función que lista los titulos de todas las notas del usuario. Le lista al usuario los titulos en los correspondientes colores de las notas (Con **chalk**).
      * `leerNota(titulo: string)`: Función para leer una nota concreta del usuario, lo primero que se hace es comprobarse si la nota existe con la función `fs.existSync(ruta titulo)` y si existe, pasa a leerse y esta se lee y se muestra al usuario con el color correspondiente de la nota.


Las pruebas de estas clases se pueden observar en el siguiente enlace:

  [https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101206479/blob/master/tests/aplicacion.spec.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101206479/blob/master/tests/aplicacion.spec.ts)
  
Y la salida de estas pruebas al ejecutar `npm run test` debería ser la siguiente. Pero antes, cabe destacar, que si se van a probar las pruebas más de una vez, cada vez que las probemos, deberemos borrar el directorio que se crea con las pruebas, el cual es `/src/aplicacion/usuarios/usuario_prueba`:

  ![Salida del npm run test](src/pruebas_clases.png)
  
  
  
##### Aplicación
Una vez creadas las clases, se pasará a crear la aplicación, su código lo podemos observar en el siguiente enlace:

  [https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101206479/blob/master/src/aplicacion/note-app.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101206479/blob/master/src/aplicacion/note-app.ts)
  
  
En esta lo que se ha hecho es que a través de **yargs** se han añadido los siguientes comandos:
  * `add`: Añade una nota al usuario, se le tiene que pasar como parámetros el usuario (`--user="usuario"`), el título de la nota (`--title="Título"`), el cuerpo de la nota (`--body="Cuerpo"`) y el color de la nota, que se pueden poner 4 colores, **red, blue, green o yellow** (`--color="blue"`)
  * `modify`: Modifica un parámetro concreto de una nota, se le tiene que pasar como parámetro obligatoriamente el usuario (`--user="usuario"`) y el título de la nota (`--title="Título"`) y opcionalmente el nuevo valor del campo que se quiere cambiar, el título (`--newTitle="Nuevo Título"`), el cuerpo (`--newBody="Nuevo Cuerpo"`) o el color (`--newColor="red"`)
  * `remove`: Borra una nota concreta al usuario, se le tiene que pasar como parámetros el usuario (`--user="usuario"`) y el título de la nota (`--title="Título"`)
  * `list`: Lista los títulos de las notas de los usuarios, se le tiene que pasar como parámetro el usuario (`--user="usuario"`)
  * `read`: Lee una nota concreta al usuario, se le tiene que pasar como parámetros el usuario (`--user="usuario"`) y el título de la nota (`--title="Título"`)
      

Para realizar las pruebas de los comandos de la aplicación deberemos introducir en la terminal `node [ruta del archivo en dist] [comando] [parametros]`, como se puede ver a continuación en la siguiente imágen, en la que se muestran pruebas de la ejecución de diversos comandos:

  ![Pruebas de la aplicación](src/pruebas_aplicacion.png)
  
  


#### Conclusiones
Como conclusión a la práctica, me ha parecido bastante interesante el uso del chalk ya que no lo conocía ni sabía que se podía mostrar el texto en colores, el uso de yargs, ya que tampoco sabía que podía hacer una aplicación y tambien me llamó bastante la atención la API que proporciona Node para trabajar con ficheros, me parece muy útil para diversas cosas.

Poco a poco viendo diversos artículos me voy dando cuenta de que TypeScript es muy útil en la actualidad y me alegra mucho aprender a usarlo cada vez más.




#### Bibliografía

Nombre | Enlaces
-------|--------
Enunciado de la práctica | [https://ull-esit-inf-dsi-2021.github.io/prct08-filesystem-notes-app/](https://ull-esit-inf-dsi-2021.github.io/prct08-filesystem-notes-app/)
Apuntes de la asignatura | [https://ull-esit-inf-dsi-2021.github.io/nodejs-theory/](https://ull-esit-inf-dsi-2021.github.io/nodejs-theory/)
TypeDoc | [https://typedoc.org/](https://typedoc.org/)
Mocha | [https://mochajs.org/](https://mochajs.org/)
Chai | [https://www.chaijs.com/](https://www.chaijs.com/)
Yargs | [https://www.npmjs.com/package/yargs](https://www.npmjs.com/package/yargs)
Chalk | [https://www.npmjs.com/package/chalk](https://www.npmjs.com/package/chalk)
API síncrona proporcionada por Node.js para trabajar con el sistema de ficheros | [https://nodejs.org/dist/latest-v15.x/docs/api/fs.html#fs_synchronous_api](https://nodejs.org/dist/latest-v15.x/docs/api/fs.html#fs_synchronous_api)
Tutorial de creación de la estructura básica del proyecto | [https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html)
Vídeo de ejemplo de instalación y configuración de TypeDoc en un proyecto TypeScript | [https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view)
Repositorio GitHub con el ejemplo de configuración de TypeDoc en un proyecto TypeScript | [https://github.com/ULL-ESIT-INF-DSI-2021/doc-test](https://github.com/ULL-ESIT-INF-DSI-2021/doc-test)
Vídeo de ejemplo de instalación y configuración de Mocha y Chai en un proyecto TypeScript | [https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view)
Repositorio GitHub con el ejemplo de configuración de Mocha y Chai en un proyecto TypeScript | [https://github.com/ULL-ESIT-INF-DSI-2021/doc-test](https://github.com/ULL-ESIT-INF-DSI-2021/doc-test)
Issues de Github | [https://guides.github.com/features/issues/](https://guides.github.com/features/issues/)
Instanbul | [https://istanbul.js.org/](https://istanbul.js.org/)
Coveralls | [ https://coveralls.io/](https://coveralls.io/)
Vídeo de ejemplo con cubrimiento de código mediante Instanbul y Coveralls | [https://drive.google.com/file/d/1xLDc4CpoYpsAlCFO_4DMwu7MKCtcZDnh/view?usp=sharing](https://drive.google.com/file/d/1xLDc4CpoYpsAlCFO_4DMwu7MKCtcZDnh/view?usp=sharing)
Repositorio GitHub con el ejemplo de cubrimiento de código mediante Instanbul y Coveralls | [https://github.com/ULL-ESIT-INF-DSI-2021/coveralls-typescripthttps://github.com/ULL-ESIT-INF-DSI-2021/coveralls-typescript](https://github.com/ULL-ESIT-INF-DSI-2021/coveralls-typescript)
GitHub Actions | [https://docs.github.com/en/actions](https://docs.github.com/en/actions)
Vídeo de ejemplo de integración continua de código fuente TypeScript ejecutado en Node.js a través de una GitHub Action | [https://drive.google.com/file/d/1hwtPovQlGvthaE7e7yYshC4v8rOtLSw0/view?usp=sharing](https://drive.google.com/file/d/1hwtPovQlGvthaE7e7yYshC4v8rOtLSw0/view?usp=sharing)
Vídeo de ejemplo de configuración de workflow de GitHub Actions para enviar información de cubrimiento a Coveralls | [https://drive.google.com/file/d/1yOonmpVbOyvzx3ZbXMQTAPxvA3a7AE7w/view?usp=sharing](https://drive.google.com/file/d/1yOonmpVbOyvzx3ZbXMQTAPxvA3a7AE7w/view?usp=sharing)
Repositorio GitHub con ejemplo de GitHub Action para llevar a cabo integración continua y cubrimiento de código | [https://github.com/ULL-ESIT-INF-DSI-2021/github-actions-typescript-nodejs-ci](https://github.com/ULL-ESIT-INF-DSI-2021/github-actions-typescript-nodejs-ci)
SonarCloud | [https://sonarcloud.io/](ttps://sonarcloud.io/)
Vídeo de ejemplo de configuración de workflow de GitHub Actions para comprobar la calidad y seguridad del código fuente con Sonar Cloud | [https://drive.google.com/file/d/1FLPargdPBX6JaJ_85jNsRzxe34sMi-Z3/view?usp=sharing](https://drive.google.com/file/d/1FLPargdPBX6JaJ_85jNsRzxe34sMi-Z3/view?usp=sharing)
Repositorio GitHub con ejemplo de GitHub Action para comprobar la calidad y seguridad del código fuente mediante Sonar Cloud | [https://github.com/ULL-ESIT-INF-DSI-2021/github-actions-sonar-cloud](https://github.com/ULL-ESIT-INF-DSI-2021/github-actions-sonar-cloud)
