// Clase para la funcionalidad de género
class Genero {
    constructor() {
        // Inicializa los eventos del género
        this.initGeneroListeners();
    }

    // Método para inicializar los eventos relacionados con el género
    initGeneroListeners() {
        document.querySelectorAll('.btnPerfil').forEach(btn => {
            btn.addEventListener('click', (e) => this.seleccionarGenero(e));
        });
    }

    // Método para seleccionar el género
    seleccionarGenero(e) {
        const perfil = e.target.textContent;
        console.log(`Género seleccionado: ${perfil}`);
        document.getElementById('btnJugar').style.display = 'block';
    }
}