// Modelo
class Cancion {
    constructor(public titulo: string, public artista: string) {}
  }
  
  // Controlador
  class ListaCancionesController {
    private canciones: Cancion[] = [];
    private vista: ListaCancionesView;
  
    constructor(vista: ListaCancionesView) {
      this.vista = vista;
    }
  
    agregarCancion(cancion: Cancion) {
      this.canciones.push(cancion);
      this.vista.actualizarVista(this.canciones);
    }
  }
  
  // Vista
  class ListaCancionesView {
    actualizarVista(canciones: Cancion[]) {
      console.log("Lista de canciones:");
      canciones.forEach((cancion, index) => {
        console.log(`Canción ${index + 1}: ${cancion.titulo} - ${cancion.artista}`);
      });
    }
  }
  
  // Crear una única instancia del controlador y la vista
  const vistaGlobal = new ListaCancionesView();
  const controladorGlobal = new ListaCancionesController(vistaGlobal);
  
  // Crear 3 objetos de canciones
  const cancion1 = new Cancion("Canción 1", "Artista 1");
  const cancion2 = new Cancion("Canción 2", "Artista 2");
  const cancion3 = new Cancion("Canción 3", "Artista 3");
  
  // Agregar canciones a través del controlador
  controladorGlobal.agregarCancion(cancion1);
  controladorGlobal.agregarCancion(cancion2);
  controladorGlobal.agregarCancion(cancion3);
  
