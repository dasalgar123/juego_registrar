// Clase principal para inicializar todo
class App {
    constructor() {
        // Instancia de las clases que manejan cada funcionalidad
        this.perfil = new Perfil();
        this.genero = new Genero();
        this.registro = new Registro();
        this.login = new Login();
        this.navegacion = new Navegacion();
    }
}

// Inicializa la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    new App(); // Crea una nueva instancia de la clase App
});