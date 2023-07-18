//Calculadora com Factory function
function criaCalculadora() {
    return{
        //atributos
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        //metodos
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter()
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizarConta()
                }
            })
        },

        cliqueBotoes(){
            // this -> calculadora
            document.addEventListener('click', function(e) {
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                if(el.classList.contains('btn-del')){
                    this.apagarUm()
                }
                if(el.classList.contains('btn-eq')){
                    this.realizarConta()
                }
            }.bind(this))
        },
        
        btnParaDisplay(valor){
            this.display.value += valor 
        },

        clearDisplay(){
            this.display.value = ''
        },

        apagarUm(){
            this.display.value = this.display.value.slice(0, -1)
        },
        realizarConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta)

                if(!conta){
                    alert('Conta inválida!');
                    return;
                }
                this.display.value = String(conta)
            } catch(e){
                alert('Conta inválida!');
            }
        },

        
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()