import {argv} from 'node:process';

const [, , metodo, recurso, ...args] = argv;
//Get de todos (npm run start -- GET products)
if (metodo == "GET" && recurso == "products") {
    const response = await fetch('http://fakestoreapi.com/products');
    const data = await response.json();
    console.log("GET, productos:", data);
}
//Get de un producto (npm run start -- GET products/1)
if (argv[2] == "GET" && argv[3].startsWith("products/")) {
    const idProducto = argv[3].split("/")[1];
    const response = await fetch(`http://fakestoreapi.com/products/${idProducto}`);
    const data = await response.json();
    console.log("Get - Producto :", data);
}

if(argv [2] == "POST" && argv[3] == "products") {
    console.log("POST, aún no llama a nada");
}

if (argv[2] == "POST" && argv[3].startsWith("products/")) {
    console.log("POST, aún no llama a nada");
}



console.log("Argumentos recibidos:", {
    parametro1: argv[0],
    parametro2: argv[1],
    método: argv[2],
    recurso: argv[3],
    otros: argv.slice(4)
});