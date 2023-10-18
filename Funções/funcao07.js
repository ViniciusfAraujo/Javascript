// Factory function (função fabrica)
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,
        fala(assunto){
            return `${nome} está ${assunto}.`
        },
        altura: altura,
        peso: peso,
        imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}
const p1 = criaPessoa('Vinicius', 'Araujo', 1.9, 89)
console.log(p1.fala('falando sobre JS'));
console.log(p1.imc());
const p2 = criaPessoa('Milena', 'França', 1.65, 65)
console.log(p2.fala('falando sobre JS'));
console.log(p2.imc());

console.log('--------------------------------------------------');
// Constructor function => Função construtora
function criaPessoa1(nome, sobrenome, a, p) {
    return {
      nome,
      sobrenome,
  
      // Getter
      get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
      },
  
      // Setter
      set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
      },
  
      fala(assunto = 'falando sobre NADA') {
        return `${this.nome} está ${assunto}.`;
      },
  
      altura: a,
      peso: p,
  
      // Getter
      get imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
      }
    };
  }
  
  const p3 = criaPessoa1('Luiz', 'Otávio', 1.8, 80);
  const p4 = criaPessoa1('João', 'Otávio', 1.90, 57);
  const p5 = criaPessoa1('Junior', 'Otávio', 1.5, 110);
  
  console.log(p3.fala());
  console.log(p4.imc);
  console.log(p5.imc);



