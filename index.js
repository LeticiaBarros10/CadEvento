// Inserir o nome do evento.
var nomeEvento = "Cosmos Lecture"
console.log("Palestra: " + nomeEvento)
console.log("")

// Inserir dia, mês e ano do evento.
var diaEvento = 10, mesEvento = 12, anoEvento = 2021
mesEvento = mesEvento -1

CompDatas()

// Função para comparar datas.
function CompDatas() { 

    var dataAtual = new Date()
    var dataEvento = new Date(anoEvento, mesEvento, diaEvento) 

    if (dataEvento > dataAtual) { 
        console.log("Evento marcado para: " + dataEvento)   
        console.log("")

    }else {  
        console.log("A data do evento deve ser maior que a data atual!")
        console.log("")
    }    
 }    

// Inserir o nome do palestrante.
 let listaPalestrantes = ["Neil deGrasse Tyson", "Richard Dawkins"]
console.log("Palestrante(s): " + listaPalestrantes)

// Inserir idade do participante.
var idadeParticipante = 18
if (idadeParticipante >= 18) {
    
} else {
    console.log("")
    console.log("Idade mínima não atingida!")
}


// Inserir nome do participante.
var nomeParticipante

let listaParticipantes = ["Leonardo", "Leticia", "Ana", "Antonio"]
let qtdParticipantes = listaParticipantes.length
    if (qtdParticipantes < 5) {
        listaParticipantes.push(nomeParticipante)
    } else {
        console.log("Não é possível adicionar mais participantes!")
    }

console.log("")

console.log("Lista de Participantes: " + listaParticipantes)

console.log("")

console.log("Quantidade de Participantes: " + qtdParticipantes)

console.log("")