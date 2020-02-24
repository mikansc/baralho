Make Deck
===

Script simples de baralho
---

Script para geração de baralho simples.

Este código foi baseado no código de baralho do curso **"The Modern Javascript Bootcamp Course"**, por Colt Steele (Udemy)

[The Modern Javascript Bootcamp Course no Udemy.com](https://www.udemy.com/course/javascript-beginners-complete-tutorial/)


---
Funções:

**makeDeck()** => Cria um objeto de baralho (objeto) com seus métodos e parametos. Este baralho não possui cartas em sua pilha neste primeiro momento.

    Exemplo:

    // criar o deck1
    const deck1 = makeDeck()
    
    console.log(deck1)
    // {deck: Array(0), drawnCards: Array(0), suits: Array(4), values: "A,2,3,4,5,6,7,8,9,10,J,Q,K", initializeDeck: ƒ, …}

**initializeDeck()** => Cria as cartas em ordem de numero e naipe (espadas, ouro, paus, copas)

    Exemplo:

    // criar as cartas dentro do deck1
    deck1.initializeDeck()

    console.log(deck1.deck)
    // 0: {value: "A", suit: "espadas"}
    // 1: {value: "A", suit: "ouro"}
    // 2: {value: "A", suit: "paus"}
    // 3: {value: "A", suit: "copas"}
    // 4: {value: "2", suit: "espadas"}
    // 5: {value: "2", suit: "ouro"}
    // 6: {value: "2", suit: "paus"}
    // (...)

**drawCard()** => retorna um o objeto de carta, retira essa carta do topo da pilha do baralho e inclui na pilha de cartas compradas.

    Exemplo:

    deck1.drawCard()
    // retrona {value: "A", suit: "espadas"}.

**drawMultiple(n)** => retorna um array com os objetos de carta, retira essas cartas do topo da pilha do baralho e inclui na pilha de cartas compradas.

    Exemplo:

    deck1.drawMultiple(3)
    // 0: {value: "A", suit: "ouro"}
    // 1: {value: "A", suit: "paus"}
    // 2: {value: "A", suit: "copas"}

**shuffle()** => embaralha a pilha de cartas "deck1.deck"

    Exemplo:

    deck1.suffle();
    
    console.log(deck1.deck)
    // 0: {value: "Q", suit: "espadas"}
    // 1: {value: "2", suit: "espadas"}
    // 2: {value: "J", suit: "copas"}
    // 3: {value: "5", suit: "espadas"}
    // 4: {value: "8", suit: "copas"}
    // 5: {value: "2", suit: "copas"}
    // 6: {value: "7", suit: "espadas"}
    // (...)


----

<h4>
    Este markdown foi escrito por Michael Nascimento.
</h4>