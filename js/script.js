// Agrega comportamiento a los elementos con clases específicas
document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('.titulo');
    titulo.addEventListener('click', () => {
    alert('¡Has hecho clic en el título!');
    });
});
