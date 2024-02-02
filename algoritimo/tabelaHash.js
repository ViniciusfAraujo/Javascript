class HashTable {
    constructor(size) {
      this.size = size;
      this.table = new Array(size);
    }
  
    // Função de hash simples para este exemplo
    hash(key) {
      let hashValue = 0;
      for (let i = 0; i < key.length; i++) {
        hashValue += key.charCodeAt(i);
      }
      return hashValue % this.size;
    }
  
    // Adiciona um par chave-valor à tabela hash
    put(key, value) {
      const index = this.hash(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }
      this.table[index].push({ key, value });
    }
  
    // Obtém o valor associado a uma chave
    get(key) {
      const index = this.hash(key);
      if (this.table[index]) {
        for (const pair of this.table[index]) {
          if (pair.key === key) {
            return pair.value;
          }
        }
      }
      return undefined;
    }
  
    // Remove um par chave-valor da tabela hash
    remove(key) {
      const index = this.hash(key);
      if (this.table[index]) {
        this.table[index] = this.table[index].filter(pair => pair.key !== key);
      }
    }

    //Evitando entrada duplicada
    verificarCadatro(nome) {
        const index = this.hash(nome);
        if (this.table[index]) {
          for (const pair of this.table[index]) {
            if (pair.key === nome) {
              console.log('Produto cadastrado!');
              return;
            }
          }
        }
    
        this.put(nome, true);
        console.log('Cadastrar!');
      }
  }
  
  // Exemplo de uso
  const myHashTable = new HashTable(10);
  myHashTable.put("maca", 1.49);
  myHashTable.put("leite", 5.50);
  myHashTable.put("ovo", 6);
  myHashTable.put("macarrao", 5);
  myHashTable.put("arroz", 30);
//   myHashTable.put("feijao", 30);
  myHashTable.verificarCadatro('feijao')
  console.log(myHashTable.get("maca"));
  
//   myHashTable.remove("arroz");
  console.log(myHashTable.get("arroz")); 
  myHashTable.verificarCadatro('arroz')

console.log('---------------------------------');

// Exemplo a ser usado como tabela hash
const listaTelefonica = {}
listaTelefonica['vinicius'] = 5555 + '-' + 5555
listaTelefonica['milena'] = 6666 + '-' + 6666

console.log(listaTelefonica['vinicius']);
console.log(listaTelefonica['milena']);

console.log('---------------------------------');

const dicio = {'chave':'valor'}
console.log(typeof(dicio));

