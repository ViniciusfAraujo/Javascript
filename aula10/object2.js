var pessoas = {
      nome1: "Vinicius",
      nome2: "Milena",
      nome3: "Izabel",
      nome4: "Jose",
      nome5: "Ana"
};

//forEach
 Object.keys(pessoas).forEach(function(item) {
    console.log(item + " - " + pessoas[item]);
 })

 //for/in
 for(var item in pessoas){
    console.log(item + "-" + pessoas[item])
 }

 //object.entries
 for(var [key, value] of Object.entries(pessoas)){
    console.log(key + "-" + value)
 } 