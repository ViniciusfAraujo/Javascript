function buscarMenor(array){
    let menor = array[0]
    let menorIndice = 0
  
    for(let i = 1; i < array.length; i++){
      if(array[i] < menor){
        menor = array[i]
        menorIndice = i
      }
    }
    return menorIndice
  }
  
  function ordenacaoSelecao(array){
    let novoArray = []
  
    for(let i = 0; i < array.length; i++){
      let menor = buscarMenor(array)
      novoArray.push(array.splice(menor, 1)[0])
    }
    return novoArray
  }
  
  console.log(ordenacaoSelecao([5, 3, 6, 2, 10]))