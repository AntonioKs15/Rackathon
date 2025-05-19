const seletor = document.querySelector('#arquivo');
const visualizador = document.querySelector('#img-file');

// Adiciona o evento de mudança
seletor.addEventListener('change', function(e) {
    // Verifica se algum arquivo foi selecionado
    if (e.target.files && e.target.files[0]) {
        // Cria uma URL temporária para o arquivo selecionado
        const urlImagem = URL.createObjectURL(e.target.files[0]);
        
        // Define a URL no src da tag img e mostra
        visualizador.src = urlImagem;
        visualizador.style.display = 'block';
    }
});