var expect = chai.expect;
chai.should();

describe("eje 1obtenerFechaActual", function () {
  it("debe devolver la fecha actual en formato dd/mm/yyyy", function () {
    const actualDate = obtenerFechaActual();
    const [day, month, year] = actualDate.split('/');
    day.should.have.lengthOf(2);
    month.should.have.lengthOf(2);
    year.should.have.lengthOf(4);
  });
  it("debe devolver una fecha válida", function () {
    const actualDate = obtenerFechaActual();
    expect(new Date(actualDate)).to.be.a('date');
  });
  it("debe devolver un string", function () {
    obtenerFechaActual().should.be.a('string');
  });
  it("el formato de la fecha debe tener dos barras", function () {
    const actualDate = obtenerFechaActual();
    (actualDate.match(/\//g) || []).length.should.equal(2);
  });
  it("el día debe ser un número entre 01 y 31", function () {
    const [day] = obtenerFechaActual().split('/');
    parseInt(day).should.be.within(1, 31);
  });
});

describe("eje 2calcularAreaCirculo", function () {
  it("debe calcular correctamente el area", function () {
    calcularAreaCirculo(2).should.equal(12.57);
    calcularAreaCirculo(57).should.equal(10207.03);
    calcularAreaCirculo(10).should.equal(314.16);
  });
  it("debe manejar casos extremos", function () {
    expect(calcularAreaCirculo(0)).to.equal(0);
    expect(calcularAreaCirculo(-5)).to.be.null;
  });
  it("debe devolver un número con dos decimales", function () {
    calcularAreaCirculo(5).toString().should.match(/^\d+\.\d{2}$/);
  });
  it("debe devolver null si el argumento no es un número", function () {
    expect(calcularAreaCirculo("abc")).to.be.null;
  });
  it("debe calcular el área correctamente para radios fraccionarios", function () {
    calcularAreaCirculo(2.5).should.equal(19.63);
  });
});


describe("eje 3 contarVocales Sin Expresiones Regulares", function () {
  it("debe contar correctamente las vocales", function () {
    contarVocales("Hola Mundo").should.equal(4);
    contarVocales("Aeiou").should.equal(5);
  });
  it("debe manejar casos extremos e invalidos", function () {  
    contarVocales(123).should.equal(-1);
    contarVocales("bcd").should.equal(0);
  });
  it("debe devolver 0 si la cadena está vacía", function () {
    contarVocales("").should.equal(0);
  });
  it("debe contar las vocales en una cadena con mayúsculas y minúsculas", function () {
    contarVocales("HoLa MuNdO").should.equal(4);
  });
  it("debe manejar cadenas que no contienen vocales", function () {
    contarVocales("bcdfg").should.equal(0);
  });
  it('debería contar 4 vocales en "Hola Mundo"', () => {
    expect(contarVocales("Hola Mundo")).to.equal(4);
  });

  it('debería contar 0 vocales en "XYZ"', () => {
    expect(contarVocales("XYZ")).to.equal(0);
  });

  it('debería contar 5 vocales en "Programación"', () => {
    expect(contarVocales("Programación")).to.equal(5);
  });

  it('debería contar vocales independientemente de mayúsculas o minúsculas', () => {
    expect(contarVocales("AEIOU")).to.equal(5);
    expect(contarVocales("aeiou")).to.equal(5);
    expect(contarVocales("AeIoU")).to.equal(5);
  });

  it('debería manejar cadenas vacías', () => {
    expect(contarVocales("")).to.equal(0);
  });

  it('debería manejar cadenas con caracteres especiales', () => {
    expect(contarVocales("¡Hola! ¿Cómo estás?")).to.equal(6);
  });
});

describe("eje 4 celsiusAFahrenheit", function () {
  it("debe convertir correctamente Celsius a Fahrenheit", function () {
    celsiusAFahrenheit(0).should.equal(32);
    celsiusAFahrenheit(100).should.equal(212);
  });
  it("debe manejar casos invalidos", function () {
    expect(celsiusAFahrenheit("abc")).to.be.null;
  });
  it("debe devolver null para valores no numéricos", function () {
    expect(celsiusAFahrenheit(undefined)).to.be.null;
  });
  it("debe devolver un valor con dos decimales", function () {
    celsiusAFahrenheit(12.46).should.equal(54.43);
  });
  it("debe manejar valores negativos", function () {
    celsiusAFahrenheit(-40).should.equal(-40);
  });
});


describe("eje 5 formatearNumero", function () {
  it("debe formatear correctamente el numero", function () {
    formatearNumero(1000000).should.equal("1.000.000");
  });
  it("debe manejar casos invalidos", function () {
    expect(formatearNumero("abc")).to.be.null;
  });
  it("debe manejar numeros negativos", function () {
    formatearNumero(-1000000).should.equal("-1.000.000");
  });
  it("debe manejar numeros con decimales", function () {
    formatearNumero(12345.67).should.equal("12.345,67");
  });
  it("debe devolver un string", function () {
    formatearNumero(1000).should.be.a('string');
  });
  it("debe manejar el numero cero", function () {
    formatearNumero(0).should.equal("0");
  });
});

describe("eje 6 reyesMagos", function () {
  it("debe calcular correctamente los dias restantes para el 6 de enero", function () {
    reyesMagos("05/01/2024").should.equal(1);
    reyesMagos("07/01/2024").should.equal(365);
  });
  it("debe devolver un valor numérico", function () {
    reyesMagos("05/01/2024").should.be.a('number');
  });
  it("debe manejar fechas en diferentes años", function () {
    reyesMagos("31/12/2023").should.equal(6);
  });
  it("debe manejar el caso en que la fecha proporcionada sea el 6 de enero", function () {
    reyesMagos("06/01/2024").should.equal(0);
  });
  it("debe manejar fechas en formato invalido", function () {
    expect(reyesMagos("2024-01-05")).to.be.null;
  });
});

describe("eje 7 calcularAleatorio", function () {
  it("debe devolver un valor entre el valor minimo y el máximo", function () {
    for (let i = 0; i < 100; i++) {
      const valor = calcularAleatorio(1, 10);
      valor.should.be.at.least(1);
      valor.should.be.at.most(10);
    }   
  });
  it("debe manejar casos invalidos", function () {
    expect(calcularAleatorio("abc",5)).to.be.null;
    expect(calcularAleatorio(-1,3)).to.be.null;
  });
  it("debe devolver un valor entero", function () {
    calcularAleatorio(1,10).should.be.a('number').and.satisfy(Number.isInteger);
  });
  it("debe manejar el caso de un aleatorio con valor minimo igual al máximo", function () {
    calcularAleatorio(1,1).should.equal(1);
  });
  it("debe devolver un valor dentro del rango para un dado grande", function () {
    
    for (let i = 0; i < 100; i++) {      
      const valor = calcularAleatorio(1, 1.7976931348623157e+308);
      valor.should.be.at.least(1);
      valor.should.be.at.most(1.7976931348623157e+308);
    }      
  });
});



describe("eje 8 esPalindromo", function () {
  it("debe identificar correctamente un palindromo", function () {
    esPalindromo("anita lava la tina").should.equal(true);
    esPalindromo("A Santa at NASA").should.equal(true);
  });
  it("debe devolver false si la cadena no es un palindromo", function () {
    esPalindromo("Hola Mundo").should.equal(false);
  });
  it("debe manejar cadenas vacías", function () {
    esPalindromo("").should.equal(false);
  });
  it("debe devolver null si el argumento no es una cadena", function () {
    esPalindromo(123).should.equal(false);   
  });
  it("debe ignorar mayúsculas, minúsculas y espacios", function () {
    esPalindromo("A man a plan a canal Panama").should.equal(true);
  });
});


describe("eje 9 camelCase", function () {
  it("debe convertir correctamente la cadena a lowerCamelCase", function () {
    camelCase("hola mundo cruel").should.equal("holaMundoCruel");
    camelCase("camión amarillo").should.equal("camionAmarillo");
  });
  it("debe manejar cadenas vacías", function () {
    camelCase("").should.equal("");
  });
  it("debe manejar cadenas con caracteres especiales", function () {
    camelCase("hola mundo!@#").should.equal("holaMundo!@#");
  });
  it("debe devolver null si el argumento no es una cadena", function () {
    expect(camelCase(123)).to.be.null;
  });
  it("debe manejar cadenas con múltiples espacios consecutivos", function () {
    camelCase("hola   mundo").should.equal("holaMundo");
  });
});


describe("eje 10 Numéro a palabras del 0 al 999999", function () {
    it("debe convertir 0 a 'cero'", function () {
        numberToWords(0).should.equal('cero');
    });

    it("debe convertir números del 1 al 9", function () {
        numberToWords(1).should.equal('uno');
        numberToWords(5).should.equal('cinco');
        numberToWords(9).should.equal('nueve');
    });

    it("debe convertir números del 10 al 19", function () {
        numberToWords(10).should.equal('diez');
        numberToWords(11).should.equal('once');
        numberToWords(15).should.equal('quince');
        numberToWords(19).should.equal('diecinueve');
    });

    it("debe convertir números exactos de decenas", function () {
        numberToWords(20).should.equal('veinte');
        numberToWords(30).should.equal('treinta');
        numberToWords(50).should.equal('cincuenta');
        numberToWords(90).should.equal('noventa');
    });

    it("debe convertir números entre decenas y unidades", function () {
        numberToWords(21).should.equal('veintiuno');
        numberToWords(34).should.equal('treinta y cuatro');
        numberToWords(47).should.equal('cuarenta y siete');
        numberToWords(89).should.equal('ochenta y nueve');
    });

    it("debe convertir números exactos de centenas", function () {
        numberToWords(100).should.equal('cien');
        numberToWords(200).should.equal('doscientos');
        numberToWords(500).should.equal('quinientos');
        numberToWords(900).should.equal('novecientos');
    });

    it("debe convertir números entre centenas y decenas", function () {
        numberToWords(101).should.equal('ciento uno');
        numberToWords(256).should.equal('doscientos cincuenta y seis');
        numberToWords(399).should.equal('trescientos noventa y nueve');
    });

    it("debe convertir números exactos de miles", function () {
        numberToWords(1000).should.equal('mil');
        numberToWords(2000).should.equal('dos mil');
        numberToWords(5000).should.equal('cinco mil');
        numberToWords(999000).should.equal('novecientos noventa y nueve mil');
    });

    it("debe convertir números entre miles y centenas", function () {
        numberToWords(1001).should.equal('mil uno');
        numberToWords(2345).should.equal('dos mil trescientos cuarenta y cinco');
        numberToWords(999999).should.equal('novecientos noventa y nueve mil novecientos noventa y nueve');
    });

    it("debe lanzar un error para números negativos", function () {
        expect(() => numberToWords(-1)).to.throw('El número debe ser un entero positivo entre 0 y 999,999.');
    });

    it("debe lanzar un error para números mayores a 999,999", function () {
        expect(() => numberToWords(1000000)).to.throw('El número debe ser un entero positivo entre 0 y 999,999.');
    });

    it("debe lanzar un error para números no enteros", function () {
        expect(() => numberToWords(1.5)).to.throw('El número debe ser un entero positivo entre 0 y 999,999.');
    });

    it("debe lanzar un error para entradas no numéricas", function () {
        expect(() => numberToWords('cien')).to.throw('El número debe ser un entero positivo entre 0 y 999,999.');
        expect(() => numberToWords(null)).to.throw('El número debe ser un entero positivo entre 0 y 999,999.');
        expect(() => numberToWords(undefined)).to.throw('El número debe ser un entero positivo entre 0 y 999,999.');
    });
});

