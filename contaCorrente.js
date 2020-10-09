import { Cliente } from "./Cliente.js";

export class contaCorrente{
    _saldo=0; //atributo privado deve comecar com_
    agencia;
    _cliente;
    static numeroDeContas=0;
    constructor(agencia,cliente){
        this.agencia=this.agencia;
        this.cliente=cliente;
        contaCorrente.numeroDeContas++;
    }

    set cliente(novoCliente){
        //protecao ao cliente, para que possa fazer a atribuicao certa
        if(novoCliente instanceof Cliente)
        this._cliente=novoCliente;
    }
    get cliente(){
        return this._cliente;
    }
  
    sacar(valor){
        if(this._saldo>=valor){
            this._saldo-=valor;
            return valor;
        }
     
    }

    depositar(valor){
        if(valor>0){
            return this._saldo=this._saldo+valor;
        }
    }

    transferir(valor, conta){
      let valorSacado=this.sacar(valor);
      conta.depositar(valorSacado);

    }

}