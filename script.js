document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('typewriter');
    const text = "Bem-vindo ao meu Perfil, Meu nome é Geovani Bizaglio";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textContainer.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});
