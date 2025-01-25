var requisicao = require("readline-sync");



//Classe principal onde vou chamar as outras classes e outros metodos
class Main {
    constructor() {
        this.opcao = 0;
    }

    mostrarMenu(){
        //MENU PRINCIPAL
        console.log('')
        console.log('------- Hotel F-Luxo -------')
        console.log('')
        console.log('Seja bem-vindo(a) ao site oficial do Hotel F-Luxo, \nonde a experiência da sua hospedagem é a nossa prioridade.')
        console.log('')
        console.log('1- Fazer uma reserva.')
        console.log('2- Fazer log-in.')
        console.log('3- Estadias Promocionais.')
        console.log('4- Informações adicionais.')
        console.log('5- Sair.')
        console.log('')
        var opcao = requisicao.question('Digite a opcao desejada: ')
        console.log('')
    }

    main() {
        while (this.opcao !== 4) {
          this.mostrarMenu();
          this.opcao = opcao
    
          switch (this.opcao) {
            case 1:
                // Chamar o método da reserva
                break;
            case 2:
                // Chamar o método do log-in
                break;
            case 3:
                // Chamar o metodo das estadias promocionais
                break;
            case 4:
                // Chamar o método das informações adicionais 
                break;
            case 5:
                console.log('Obrigada por acessar nosso site! Volte sempre.')
                break;
            default:
              console.log("Opção inválida! Tente novamente.");
          }
        }
    }
}


class Reserva{
    constructor(IDcliente, status, dataEntrada, dataSaida){
        
        this.IDcliente=IDcliente
        this.status=status
        this.dataEntrada=dataEntrada
        this.dataSaida=dataSaida
    }
    verQuartos(){

    }

    cadastrar(){
        var nomeClnt = requisicao.question('Digite seu nome: ')
        var cpfClnt = requisicao.question('Digite seu CPF: ')
        var emailClnt = requisicao.question('Digite seu e-mail: ')
        var senhaClnt = requisicao.question('Digite uma senha: ')
    }
}


class Funcionario{
    constructor(nomeFunc, cpfFunc, emailFunc, senhaFunc){
        
        this.nomeFunc=nomeFunc
        this.cpfFunc=cpfFunc
        this.emailFunc=emailFunc
        this.senhaFunc=senhaFunc
    }
}


class Cliente{
    constructor(nomeClnt, dataAniv, cpfClnt, emailClnt, senhaClnt){

        this.nomeClnt=nomeClnt
        this.dataAniv=dataAniv
        this.cpfClnt=cpfClnt
        this.emailClnt=emailClnt
        this.senhaClnt=senhaClnt
    }
}


//Funcionarios poderao adiconar/remover quartos
class Quartos{
    constructor(numCamas, preco, qntdDisp, nome, descricao){

        this.numCamas=numCamas
        this.preco=preco
        this.qntdDisp=qntdDisp
        this.nome=nome
        this.descricao=descricao
    }

    adicionarQuarto(){
        var numCamas = requisicao.question('Numero de camas disponiveis no quarto: ')
        var preco = requisicao.question('Preco por noite: ')
        var qntdDisp = requisicao.question('Quantidade de quartos disponiveis: ')
        var nome = requisicao.question('Nome do quarto: ')
        var descricao = requisicao.question('Descricao do quarto: ')
    }
}





