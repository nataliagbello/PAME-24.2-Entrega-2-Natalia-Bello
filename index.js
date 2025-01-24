console.log('')
console.log('------- Hotel F-Luxo -------')
console.log('')
console.log('Seja bem-vindo(a) ao site oficial do Hotel F-Luxo, \nonde a experiência da sua hospedagem é a nossa prioridade.')
console.log('')
console.log('1- Fazer uma reserva.')
console.log('2- Fazer log-in.')
console.log('3- Estadias Promocionais.')
console.log('5- Informações adicionais.')
console.log('')
console.log('Digite a opcao desejada:')
console.log('')


class Reserva{
    constructor(IDcliente, status, dataEntrada, dataSaida){
        
        this.IDcliente=IDcliente
        this.status=status
        this.dataEntrada=dataEntrada
        this.dataSaida=dataSaida
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


class Quartos{
    constructor(numCamas, preco, qntdDisp, nome, descricao){

        this.numCamas=numCamas
        this.preco=preco
        this.qntdDisp=qntdDisp
        this.nome=nome
        this.descricao=descricao
    }
}





