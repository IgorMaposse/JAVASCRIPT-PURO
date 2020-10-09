import {Cliente} from "./Cliente.js";
import{contaCorrente} from "./contaCorrente.js";

let cliente1= new Cliente("Nando",121313);
let cliente2= new Cliente("Igor",121312323);


let conta1 = new contaCorrente(10001,cliente1);
let conta2=new contaCorrente(10290,cliente2);

conta1.depositar(500);
conta2.depositar(100);

conta1.transferir(200,conta2);

console.log(conta1._cliente);


