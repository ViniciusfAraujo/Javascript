const numero = Number(prompt('Digite um numero:'));
const numTitulo = document.getElementById('numero-titulo');
const text = document.getElementById('texto')

numTitulo.innerHTML = numero
text.innerHTML += `<p>Seu numero + 2 é ${numero + 2}.<p/>`;
text.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}<br/>`;
text.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.<p/>`;
text.innerHTML += `<p>É NaN: ${isNaN(numero)}.<p/>`;
text.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}.<p/>`;
text.innerHTML += `<p>Arredondado para cima:  ${Math.ceil(numero)}.<p/>`;
text.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.<p/>`;