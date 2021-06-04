# Semana 04: Objetos, Arrays e Métodos

Essa semana foi uma semana dificil, acredito eu a mais dificil até aqui (e eu achando que aprender sobre git e github seria a parte mais dificil)

![gif "that is insane"](img/giphy.gif)

# Objetos

Objetos nada mais é do que um "agrupamento" de propriedades organizadas em pares de chave. Ou seja, chave:valor, onde chave é o nome da propriedade e o valor é a informação que quer passar:

## Sua sintaxe pode ser feita da seguinte maneira:
```javascript
    const pessoa = {
    nome: 'Carol',
    idade: 23,
    profissao: 'desenvolvedora',
    };
```
```javascript
Ou uma alternativa é usar o new Object ():  
    const pessoa = new Object();
    pessoa.nome = 'Carol; 
    pessoa.idade = 23; 
    pessoa.profissao = 'desenvolvedora';
```

Ambas as situações vão funcionar e cumprir o objetivo, mas eu particularmente gostei mais da primeira :yellow_heart:

A gente pode acessar os valores dos objetos quando o declaramos. Existem, atualmente, duas maneiras de fazer isso: 
### Notação de ponto:
```javascript
        const pessoa = {
        nome: 'Carol',
        idade: 23,
        profissao: 'desenvolvedora',
        };

    console.log(pessoa.nome); // Carol
    console.log(pessoa.idade); // 23
    console.log(pessoa.profissao); // desenvolvedora
```
### Notação de índice:
```javascript
        const pessoa = {
        nome: 'Carol',
        idade: 23,
        profissao: 'desenvolvedora',
        };

console.log(pessoa['nome']); // Carol
console.log(pessoa['idade']); // 23
console.log(pessoa['profissao']); // desenvolvedora
```

# Arrays

A array pode ser entendido como uma lista mutável que permite armazenar um conjunto de dados e atribuí-los a uma variável, sendo esta a estrutura de dados mais simples possível. Diferente do que a gente viu na criação de Objetos, a array é criada abrindo colchetes [] e inserindo seus valores dentro deles.

## Sua sintaxe pode ser feita da seguinte maneira:

```javascript
const alunasReprograma = ['Samira', 'Giovanna', 'Carla', 'Francisca', 'Silvana', 'Alessandra', ...];
```

E é claro que, para acessar seus valores, a forma também se difere do Objeto. Precisamos passar o indice, ou seja, a posição que o valor se encontra. Lembrando que qualquer indice se inicia em 0, ou seja, se a gente quiser saber qual aluna está na posição 3, podemos escrever da seguinte forma:

```javascript
    console.log(alunasReprograma[3]) // Francisca
```

# Métodos

Métodos podem ser entendidos como uma função associada a um objeto. Alguns métodos mais usados no Javascript:

- `filter` retorna um novo array com os elementos filtrados.
- `find` retorna o primeiro elemento que achar igual ao elemento passado por parâmetro.
- `indexOf` retorna a posição do item passado por parâmetro ou -1 caso não tenha encontrado.
- `length` retorna um número que representa o tamanho do array.
- `map` retorna um novo array sem alterar o array original, criando uma cópia com as alterações que desejamos.
- `pop` remove e retorn o último item do array.
- `push` adiciona um item na última posição do array.
- `shift` remove e retorna o primeiro item do array.
- `slice` copia o array para outra variável.
- `splice` remove o item da posição passada por parâmetro
- `unshift` adiciona um item na primeira posição do array.

# Desafio da semana

O desafio da semana foi o primeiro em que pudermos fazer de forma integrada. Tivemos que escrever um algoritmo por completo, algo que foi diferente de tudo o que fizemos até agora, já que fizemos pequenas partes de uma instrução, e desta vez tivemos que usar aplicar tudo o que pudemos ver até agora. 

Fazer este exercicio, desenvolver a lógica, encontrar a melhor maneira de estruturar o código foi dificil, demorou um pouco rsrs, mas ao executá-lo e ver que estava funcionando, ver o resultado do meu esforço e dedicação não teve preço.

![gif "beyonce is happy"](img/happy.gif)