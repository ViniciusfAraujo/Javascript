// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        //value: estoque, // valor
        //writable: true, //pode altera o valor ou não
        configurable: true, // configuração,
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Mensagem')
            }

            estoquePrivado = valor
        }
    })

    /*
    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra a chave
            value: nome, // valor
            writable: true, //pode altera o valor ou não
            configurable: true //
            },
        preco: {
            enumerable: true, //mostra a chave
            value: preco, // valor
            writable: true, //pode altera o valor ou não
            configurable: true //
            }
    })
    */
}

function criaProduto(nome){
    return{
        get nome(){
            return nome
        },
        set nome(valor){
            valor = valor.replace('coisa', '')
            nome = valor
        }
    }
}

const p1 = new Produto('camiseta', 20, 3)
console.log(p1);
p1.estoque = 30
console.log(p1.estoque);

console.log('-----------------------');

const p2 = criaProduto('camiseta')
p2.nome = 'Qualquer coisa'
console.log(p2.nome);
