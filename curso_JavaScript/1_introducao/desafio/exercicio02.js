function pares(x, y) {
    var contador = 0;
    for (var i = x; i <= y; i++) {
        if (x % 2 === 0) {
            document.write("Número: " + x + "<br>");
            contador++;
        }
        x++;
    }
    document.write("Existem " + contador + " números pares neste intervalo.");
};

document.write("<br>");
pares(32, 321);