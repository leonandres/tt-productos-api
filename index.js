import {argv} from 'node:process';

if (argv[2] == "GET" && argv[3] == "productos") {
    console.log("GET, aún no llama a nada");
}

if(argv [2] == "POST" && argv[3] == "productos") {
    console.log("POST, aún no llama a nada");
}

console.log("Argumentos recibidos:", {
    parametro1: argv[0],
    parametro2: argv[1],
    método: argv[2],
    recurso: argv[3],
    otros: argv.slice(4)
});