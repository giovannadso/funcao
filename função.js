//1
function mostrarLembrete() {
    //2
    console.log('Water the plants');
}

//3 
function saudacaoEmEspanhol() {
    //4
    console.log('Buenas tardes.');
}

//5
function agradecerCliente() {
    console.log('Thank you for your purchase! We appreciate your business.')
}

//6
agradecerCliente()

//7
agradecerCliente()
agradecerCliente()
agradecerCliente()

//8 e 9
function agradecerCliente(nome='Cole'){
    console.log('Thank you for your purchase '+nome+'! We appreciate your business.')
}

//10
agradecerCliente('Maria')

//11
function criarListaDeCompras(item1 = 'Leite', item2 = 'pão', item3 = 'ovos'){
    console.log(item1 + item2 + item3)
}

//12
//Tarefa 1
function contarMonitores(linhas , colunas ){
    return linhas * colunas
}
//Tarefa 2
const numeroDeMonitores = contarMonitores(5, 4)
console.log(numeroDeMonitores)
//Tarefa 3
function custoDosMonitores(linhas , colunas){
    return (linhas*colunas)*200
}
const custoTotal = custoDosMonitores(5, 4)
console.log(custoTotal)

//13
//Tarefa 1
const plantaPrecisaDeAgua = dia => {
    if (dia === 'Wednesday') {
        return true
    } else {
        return false
    }   
}

console.log(plantaPrecisaDeAgua('Tuerday'))