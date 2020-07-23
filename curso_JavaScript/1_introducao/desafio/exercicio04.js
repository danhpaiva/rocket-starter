function experiencia(anos) {
    if (anos <= 1) {
        document.write("Iniciante");
    } else if (anos <= 3) {
        document.write("Intermediário");
    } else if (anos <= 6) {
        document.write("Avançado");
    } else {
        document.write("Jedi Master");
        return "Jedi Master";
    }
}

var anosEstudo = 7;

experiencia(anosEstudo);
console.log(experiencia(anosEstudo))
    // De 0-1 ano: Iniciante
    // De 1-3 anos: Intermediário
    // De 3-6 anos: Avançado
    // De 7 acima: Jedi Master