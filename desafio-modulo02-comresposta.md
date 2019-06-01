# Desafios Módulo 02

> 1º desafio

Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.

**Resposta**

```
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Exercício 01</title>
</head>

<body>
  <button id="new">Novo quadrado</button>

  <div id="squares"></div>

  <script>
    var btnElement = document.getElementById('new');
    var squaresElement = document.getElementById('squares');
    btnElement.onclick = function () {
      var square = document.createElement('div');
      square.style.width = '100px';
      square.style.height = '100px';
      square.style.backgroundColor = '#F00';
      squaresElement.appendChild(square);
    };
  </script>
</body>

</html>

```

> 2º desafio

Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

```
function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}
var newColor = getRandomColor(); // #E943F0
```

**Resposta**

```
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Exercício 02</title>
</head>

<body>
  <button id="new">Novo quadrado</button>

  <div id="squares"></div>

  <script>
    var btnElement = document.getElementById('new');
    var squaresElement = document.getElementById('squares');
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    btnElement.onclick = function () {
      var square = document.createElement('div');
      square.style.width = '100px';
      square.style.height = '100px';
      square.style.backgroundColor = '#F00';
      square.onmouseover = function () {
        square.style.backgroundColor = getRandomColor();
      }
      squaresElement.appendChild(square);
    };
  </script>
</body>

</html>

```

> 3º desafio

A partir do seguinte vetor:

```
var nomes = ["Carlito", "Joao", "Mateus"];
```

Preencha uma lista (`<ul>`) no HTML com os itens da seguinte forma:

- Carlito
- Joao
- Mateus

**Resposta**

```
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Exercício 03</title>
</head>

<body>
  <ul></ul>

  <script>
    var nomes = ['Diego', 'Gabriel', 'Lucas'];
    var listElement = document.querySelector('ul');
    for (nome of nomes) {
      var liElement = document.createElement('li');
      var textElement = document.createTextNode(nome);
      liElement.appendChild(textElement);
      listElement.appendChild(liElement);
    }
  </script>
</body>

</html>
```
