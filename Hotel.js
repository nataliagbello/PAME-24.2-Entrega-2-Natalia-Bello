let requisicao = require("readline-sync");


class Cliente{
    constructor(nomeClnt, dataAniv, cpfClnt, emailClnt, senhaClnt, IDcliente){
        this.IDcliente=IDcliente;
        this.nomeClnt=nomeClnt;
        this.dataAniv=dataAniv;
        this.cpfClnt=cpfClnt;
        this.emailClnt=emailClnt;
        this.senhaClnt=senhaClnt;
    }
}







//Classe principal onde vou chamar as outras classes e outros metodos
class Sistema {
    constructor() {
        this.opcao = 0;
        this.IDcliente = 0;
        this.clientes = [];
    }

    mostrarMenu(){
        //MENU PRINCIPAL
        console.log('');
        console.log('------- Hotel F-Luxo -------');
        console.log('');
        console.log('Seja bem-vindo(a) ao site oficial do Hotel F-Luxo, \nonde a experiência da sua hospedagem é a nossa prioridade.');
        console.log('');
        console.log('1- Fazer uma reserva.');
        console.log('2- Fazer log-in.');
        console.log('3- Estadias Promocionais.');
        console.log('4- Informações adicionais.');
        console.log('5- Sair.');
        console.log('6- Fazer cadastro.');

        console.log('');
        let opcao = requisicao.questionInt('Digite a opcao desejada: ');
        console.log('');
        return opcao;
    }

    main() {
        while (this.opcao != 5) {

          this.opcao = this.mostrarMenu();
    
          switch (this.opcao) {
            case 1:
                // Chamar o método da reserva
                break;
            case 2:
                this.loginClnt();

            case 3:
                // Chamar o metodo das estadias promocionais
                break;
            case 4:
                // Chamar o método das informações adicionais 
                break;
            case 5:
                console.log('Obrigada por acessar nosso site! Volte sempre.');
                break;
            case 6:
                console.log('Cadastrar!!!');
                this.cadastrarClnt();
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
                break
          }
        }
    }



    cadastrarClnt(){
        let nomeClnt = requisicao.question('Digite seu nome: ');
        let cpfClnt = requisicao.question('Digite seu CPF: ');
        let emailClnt = requisicao.question('Digite seu e-mail: ');
        let senhaClnt = requisicao.question('Digite uma senha: ');
        let dataAniv = requisicao.question('Digite sua data de aniversario (DD/MM/AA): ');
        let IDcliente = this.IDcliente
        this.IDcliente = this.IDcliente + 1;

        const cliente = new Cliente(nomeClnt, dataAniv, cpfClnt, emailClnt, senhaClnt, IDcliente);
        console.log(cliente)

        this.clientes.push(cliente)
        console.log(this.clientes)
        
    }
    loginClnt(){
        let emailLoginClnt = requisicao.question('Digite seu email: '); 
        let senhaLoginClnt = requisicao.question('Digite sua senha: ');
    }



    cadastrarFunc(){
        let nomeFunc = requisicao.question('Digite seu nome: ');
        let cpfFunc = requisicao.question('Digite seu CPF: ');
        let emailFunc = requisicao.question('Digite seu e-mail: ');
        let senhaFunc = requisicao.question('Digite uma senha: ');
    }
    loginFunc(){
        let emailLoginFunc = requisicao.question('Digite seu email: ');
        let senhaLoginFunc = requisicao.question('Digite sua senha: ');
    }
}
let sistema = new Sistema(); 
sistema.main();




class Reserva{
    constructor(IDcliente, status, dataEntrada, dataSaida){
        
        this.IDcliente=IDcliente;
        this.status=status;
        this.dataEntrada=dataEntrada;
        this.dataSaida=dataSaida;
    }
    verQuartos(){

    }

    escolherQuarto(){
        let dataEntrada = require.question('Digite a data de entrada (DD/MM/AA): ');
        let dataSaida = require.question('Digite a data de saida (DD/MM/AA): ');
    }
}



class Funcionario{
    constructor(nomeFunc, cpfFunc, emailFunc, senhaFunc){
        
        this.nomeFunc=nomeFunc;
        this.cpfFunc=cpfFunc;
        this.emailFunc=emailFunc;
        this.senhaFunc=senhaFunc;
    }
}






//Funcionarios poderao adiconar/remover quartos
class Quartos{
    constructor(numCamas, preco, qntdDisp, nome, descricao){

        this.numCamas=numCamas;
        this.preco=preco;
        this.qntdDisp=qntdDisp;
        this.nome=nome;
        this.descricao=descricao;
    }

    adicionarQuarto(){
        let numCamas = requisicao.question('Numero de camas disponiveis no quarto: ');
        let preco = requisicao.question('Preco por noite: ');
        let qntdDisp = requisicao.question('Quantidade de quartos disponiveis: ');
        let nome = requisicao.question('Nome do quarto: ');
        let descricao = requisicao.question('Descricao do quarto: ');
        
    }
}





