// Um array de arrays (ex: [[1, 2, 3, 4], [5, 6, 7, 8]])
// Um valor de posição mínima (ex: 1)
// Um valor de posição máxima (ex: 3)
// Um valor a ser encontrado (ex: 3)

function manipularArray (arr: any, posicaoMinima: number, posicaoMaxima: number, valorAEncontrar: number) {
    const arrayComNumero = arr.map((matriz) => {
        return matriz.find((numero: number) => {return numero === valorAEncontrar})
        
    })

    console.log(arrayComNumero)
}

console.log(manipularArray([[1, 2, 3, 4], [5, 6, 7, 8]],1,3,3))
