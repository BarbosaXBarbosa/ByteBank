import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

        /* Contrução antiga
        const cliente1 = new Cliente();
        cliente1.nome = "Ricardo";
        cliente1.cpf = 11122233309;

        //---------Maneira considerada correta
        const cliente2 = new Cliente();
        cliente2.nome = "Alice";
        cliente2.cpf = 88822233309;
        */

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

        /*
        contaCorrenteRicardo.agencia = 1001;
        contaCorrenteRicardo.cliente = cliente1;

        */
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(cliente2, 1002);

        /*
        conta2.cliente = cliente2;
        conta2.agencia = 1002;
        */

//----------outra maneira de popular os atributos
//conta2.cliente = new Cliente();
// conta2.cliente.nome = "Alice";
// conta2.cliente.cpf = 88822233309;
// conta2.agencia = 1002;

contaCorrenteRicardo.transferir(200, conta2);

console.log(conta2);