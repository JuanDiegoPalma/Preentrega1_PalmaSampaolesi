let opcion;
let nombre = prompt('Ingrese su nombre')
function saludar(){
    alert('Bienvenid@ ' + nombre + ' a PlayHud' )
}
saludar();
do{
    opcion = parseInt(prompt('Menú de opciones:\n 1. Motherboards\n 2. Microprocesadores\n 3. Placas de video\n 4. Almacenamiento\n 5. Fuente de poder\n 6. Refrigeración\n 7. Memorias RAM\n 8. Cacular el precio final\n\n Para salir, ingrese 0'));
    
    switch (opcion) {
        case 0:
            alert ('Gracias por pasar por PlayHud, te esperamos!!')
            break;
        case 1:
            let mensajeUno = 'Motherboards\n 1. B450-PLUS ($ 90)\n 2. A520M-HVS ($ 100)\n 3. B550M-HDV ($ 85)';
            alert (mensajeUno);
            break;

        case 2:
            let mensajeDos = 'Microprocesadores\n\n 1. AMD ($ 145)\n 2. INTEL ($ 150)'
                alert (mensajeDos);
                break;

        case 3:
            let mensajeTres ='Placas de video\n\n 1. ASUS GeForce RTX 4060 ($ 470)\n 2. ASUS GeForce RTX 3060 TI ($ 650)\n 3. ASUS GeForce RTX 4090 ($ 2.000)'
                alert (mensajeTres);
                break;
        case 4:
            let mensajeCuatro = 'Almacenamiento\n\n 1. SSD 256GB($ 50)\n 2. SSD 500GB ($ 75)\n 3. SSD 1TB ($ 180)'
                alert (mensajeCuatro);
                break;        
        case 5:
                let mensajeCinco = 'Fuente de poder\n\n 1. Fuente 650W($ 150)\n 2. Fuente 800W ($ 200)'
                    alert (mensajeCinco);
                    break;
        case 6:
                let mensajeSeis = 'Refrigeración\n\n 1. Ventiladores($ 50)\n 2. Refrigeracion Liquida($ 200)'
                    alert (mensajeSeis);
                    break;
        case 7:
                let mensajeSiete= 'Memorias RAM\n\n 1. 4GB ($ 25)\n 2. 8GB ($ 50)\n 3. 16GB ($ 125)'
                    alert (mensajeSiete);
                    break;
        case 8:
            function suma(){
                const productoUno = parseInt(prompt('Ingrese el valor del producto'))
                const productoDos = parseInt(prompt('Ingrese el valor del producto'))
                const productoTres = parseInt(prompt('Ingrese el valor del producto'))
                const productoCuatro = parseInt(prompt('Ingrese el valor del producto'))
                const productoCinco = parseInt(prompt('Ingrese el valor del producto'))
                const productoSeis = parseInt(prompt('Ingrese el valor del producto'))
                const productoSiete = parseInt(prompt('Ingrese el valor del producto'))
                const productoOcho = parseInt(prompt('Ingrese el valor del producto'))
                alert('El total de tu compra es ' + '$ ' + (productoUno + productoDos + productoTres + productoCuatro + productoCinco + productoSeis + productoSiete + productoOcho))
            }
            suma();
            break;

        default:
            alert('Opcion no válida, ingrese la correcta.');
            break;
    }
} while (opcion !== 0)
