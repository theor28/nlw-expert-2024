const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "let varName;",
        "variable varName;",
        "var varName;"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'addEventListener' faz em JavaScript?",
      respostas: [
        "Remove um evento de um elemento",
        "Adiciona um evento a um elemento",
        "Altera o estilo de um elemento"
      ],
      correta: 1
    },
    {
      pergunta: "Como você pode verificar o tipo de uma variável em JavaScript?",
      respostas: [
        "typeof variable;",
        "variableType(variable);",
        "checkType(variable);"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma função de manipulação de strings",
        "Uma biblioteca de terceiros",
        "A representação da estrutura de um documento HTML/XML como uma árvore de objetos"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado da expressão '2' + 2 em JavaScript?",
      respostas: [
        "'22'",
        "'4'",
        "4"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador usado para comparar igualdade de valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para arredondar um número para o inteiro mais próximo em JavaScript?",
      respostas: [
        "round()",
        "ceil()",
        "floor()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "removeLast()",
        "pop()",
        "deleteLast()"
      ],
      correta: 1
    },
    {
      pergunta: "O que a função 'parseInt' faz em JavaScript?",
      respostas: [
        "Converte uma string em um número inteiro",
        "Remove a parte decimal de um número",
        "Retorna o primeiro índice em que um elemento pode ser encontrado em um array"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para adicionar novos elementos ao final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "add()"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou repetição ou laço de repetição
  for(const item of perguntas) {
    //for acima para mudar cada um dos h3's para a pergunta específica
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      //for acima para colocar cada uma das possíveis respostas em todas
      //as perguntas
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      quizItem.querySelector('dl').appendChild(dt) //append sempre no final
    }
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  