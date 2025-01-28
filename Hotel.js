let requisicao = require("readline-sync");




//CLASSES
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
class Quarto{
    constructor(numCamas, preco, qntdDisp, nome, descricao){

        this.numCamas=numCamas;
        this.preco=preco;
        this.qntdDisp=qntdDisp;
        this.nome=nome;
        this.descricao=descricao;
    }
}




//Classe principal onde vou chamar as outras classes e outros metodos
class Sistema {
    constructor() {
        this.opcao = 0;
        this.opcao2 = 0;
        this.IDcliente = 0;
        this.clientes = [];
        this.funcionarios = []
        this.quartos = []
    }


    //-------MENU PRINCIPAL-------
    mostrarMenu(){
        console.log('');
        console.log('------- Hotel F-Luxo -------');
        console.log('');
        console.log('Seja bem-vindo(a) ao site oficial do Hotel F-Luxo, \nonde a experiência da sua hospedagem é a nossa prioridade.');
        console.log('');
        console.log('1- Fazer login.');
        console.log('2- Fazer cadastro cliente.');
        console.log('3- Fazer cadastro funcionario.');
        console.log('4- Sair.');
        

        console.log('');
        let opcao = requisicao.questionInt('Digite a opcao desejada: ');
        console.log('');
        return opcao;
    }


    //-----MENU DO LOG-IN-----
    mostrarMenu2(){
        console.log('');
        console.log('----------------------------------------')
        console.log('Fazer log-in como:');
        console.log('1- Cliente');
        console.log('2- Funcionario');
        console.log('3- Voltar');
        console.log('----------------------------------------')

        console.log('');
        let opcao2 = requisicao.questionInt('Digite a opcao desejada: ');
        console.log('');
        return opcao2;
    }


    //---------MENU DO FUNCIONARIO----------
    mostrarMenu3(){
        console.log('')
        console.log('1- Ver meus dados.')
        console.log('2- Ver lista de reservas.')
        console.log('3- Ver lista de quartos.')
        console.log('4- Ver lista de clientes.')
        console.log('5- Mudar status de uma reserva.')
        console.log('6- Adicionar quarto.')
        console.log('7- Voltar.')

        console.log('');
        let opcao3 = requisicao.questionInt('Digite a opcao desejada: ');
        console.log('');
        return opcao3;
    }


    //---------MENU DO CLIENTE----------
    mostrarMenu4(){
        console.log('')
        console.log('1- Ver meus dados.')
        console.log('2- Ver lista de quartos.')
        console.log('4- Fazer reserva.')
        console.log('5- Cancelar reserva.')
        console.log('6- Ver minhas reservas.')
        console.log('7- Voltar.')

        console.log('');
        let opcao4 = requisicao.questionInt('Digite a opcao desejada: ');
        console.log('');
        return opcao4;
    }


    main() {
        while (this.opcao != 7) {

          this.opcao = this.mostrarMenu();
    
          switch (this.opcao) {
            //----------LOG-IN-----------
            case 1:
                while (this.opcao2 != 3){

                    this.opcao2 = this.mostrarMenu2();

                    switch (this.opcao2) {
                        case 1:
                            this.loginClnt();
                            break;
                        case 2:
                            this.loginFunc()
                            break;
                        case 3:
                            break;
                        default:
                            console.log("Opção inválida! Tente novamente.");
                            break;
                    }
                }
            break
                
            case 2:
                console.log('Cadastrar cliente!!!');
                this.cadastrarClnt();
                break;

            case 3:
                console.log('Cadastrar funcionario!!!!!'); 
                this.cadastrarFunc();
                break;

            case 4:
                console.log('Obrigada por acessar nosso site! Volte sempre.');
                break;

            default:
                console.log("Opção inválida! Tente novamente.");
                break
          }
        }
    }



//----------------------------------------------------------SESSAO CLIENTE--------------------------------------------------------------------
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
        console.log('')
        console.log('Fazendo login como cliente.')
        console.log('')

        let emailLoginClnt = requisicao.question('Digite seu email: '); 
        let senhaLoginClnt = requisicao.question('Digite sua senha: ');
        let loginValido = false;

        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].email == emailLoginClnt && this.clientes[i].senha == senhaLoginClnt) {
                console.log('Bem-vindo a sua conta CLIENTE!');
                loginValido = true;
                break;
            } 
        }
        if (loginValido == false) {
                console.log('Login incorreto.');
        } 
    }

    fazerReserva(){
        console.log('');
        console.log('Quartos cadastrados: ');
        console.log(this.quartos);
        let nomeQuarto = requisicao.question('Digite o nome do quarto desejado para reservar: ');
        for (let i = 0; i < this.quartos.length; i++) {
            if (this.quartos[i].nome == nomeQuarto) {
                this.quartos.qntdDisp = this.quartos.qntdDisp - 1
            }
        }
    }

    cancelarReserva(){
        console.log('');
        console.log('Quartos cadastrados: ');
        console.log(this.quartos);
        let nomeQuarto = requisicao.question('Digite o nome do quarto desejado para cancelar: ');
        for (let i = 0; i < this.quartos.length; i++) {
            if (this.quartos[i].nome == nomeQuarto) {
                this.quartos.qntdDisp = this.quartos.qntdDisp + 1
            }
        }
    }

    //Funcao principal do cliente
    mainClnt(){
        while (this.opcao4 != 6) {

            this.opcao4 = this.mostrarMenu4();
            switch (this.opcao4) {
                case 1:
                    //Ver meus dados
                    break;
                case 2:
                    console.log('');
                    console.log('Lista de quartos cadastrados:');
                    console.log(this.quartos);
                    break;
                case 3:
                    fazerReserva();
                    break;
                case 4:
                    this.cancelarReserva()
                    break;
                case 5:
                    //Ver minhas reservas
                    break;
                case 6:
                    break;
                default:
                    console.log("Opção inválida! Tente novamente.");
                    break;
            }
        }
    }




//----------------------------------------------------------------SESSAO FUNCIONARIO---------------------------------------------------------------------
    cadastrarFunc(){
        let nomeFunc = requisicao.question('Digite seu nome: ');
        let cpfFunc = requisicao.question('Digite seu CPF: ');
        let emailFunc = requisicao.question('Digite seu e-mail: ');
        let senhaFunc = requisicao.question('Digite uma senha: ');

        const funcionario = new Funcionario(nomeFunc, cpfFunc, emailFunc, senhaFunc);
        console.log('');
        console.log('Funcionario adicionado: ');
        console.log(funcionario);

        this.funcionarios.push(funcionario);
        console.log('');
        console.log('Lista de funcionários cadastrados:');
        console.log(this.funcionarios);
    }
    
    loginFunc(){
        let emailLoginFunc = requisicao.question('Digite seu email: ');
        let senhaLoginFunc = requisicao.question('Digite sua senha: ');
        for (let i = 0; i < this.funcionarios.length; i++) {
            if (this.funcionarios[i].email == emailLoginFunc && this.clientes[i].senha == senhaLoginFunc) {
                console.log('Bem-vindo a sua conta FUNCIONARIO!');
                loginValido = true;
                this.mainFunc(); //Chamando main funcionario  
                break;
            } 
        }
        if (loginValido == false) {
                console.log('Login incorreto.');
        } 
    }


    adicionarQuarto(){
        let numCamas = requisicao.question('Digite o numero de camas: ');
        let preco = requisicao.question('Digite o preco da diaria: ');
        let qntdDisp = requisicao.question('Digite a quantidade disponivel: ');
        let nome = requisicao.question('Digite o nome do quarto: ');
        let descricao = requisicao.question('Digite uma breve descricao do quarto: ');

        const quarto = new Quarto(numCamas, preco, qntdDisp, nome, descricao);
        console.log('');
        console.log('Quarto adicionado:');
        console.log(quarto);

        this.quartos.push(quarto);
        console.log('');
        console.log('Lista de quartos cadastrados:');
        console.log(this.quartos);
    }
    

    //Funcao principal do funcionario
    mainFunc(){
        while (this.opcao3 != 7) {

            this.opcao3 = this.mostrarMenu3();
            switch (this.opcao3) {
                case 1:
                    //Ver meus dados
                    break;
                case 2:
                    //Ver lista reservas
                    break;
                case 3:
                    console.log('');
                    console.log('Lista de quartos cadastrados:');
                    console.log(this.quartos);
                    break;
                case 4:
                    console.log('');
                    console.log('Lista de clientes cadastrados:');
                    console.log(this.clientes);
                    break;
                case 5:
                    //Mudar status de uma reserva
                    break;
                case 6:
                    this.adicionarQuarto();
                    break;
                case 7:
                    break;
                default:
                    console.log("Opção inválida! Tente novamente.");
                    break;
            }
        }
    }
}

let sistema = new Sistema(); 
sistema.main();




