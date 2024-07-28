function tablas() {
    for (let numero = 1; numero <= 10; numero++) {
      console.log(Tabla del '1{1}:');

      for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log('${numero} x ${i} = ${resultado}');
      }
    }
  }
  

  tablas();