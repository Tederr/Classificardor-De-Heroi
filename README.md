# Classificador de Nível de Herói

Este projeto é um programa em JavaScript que classifica o nível de um herói com base na quantidade de experiência (XP) fornecida pelo usuário. O código utiliza conceitos como variáveis, estruturas de decisão e entrada de dados pelo terminal.

## Requisitos

Para executar o projeto, é necessário ter instalado:

- [Node.js](https://nodejs.org/) (versão mais recente recomendada).

## Funcionalidades

- Captura o nome do herói e sua quantidade de experiência (XP) pelo terminal.
- Classifica o herói em um dos seguintes níveis com base no XP:
  - **Ferro**: XP menor que 1.000.
  - **Bronze**: XP entre 1.001 e 2.000.
  - **Prata**: XP entre 2.001 e 5.000.
  - **Ouro**: XP entre 5.001 e 7.000.
  - **Platina**: XP entre 7.001 e 8.000.
  - **Ascendente**: XP entre 8.001 e 9.000.
  - **Imortal**: XP entre 9.001 e 10.000.
  - **Radiante**: XP maior ou igual a 10.001.
- Exibe uma mensagem com o nome do herói e seu nível.

## Como Executar

1. Clone este repositório ou copie o arquivo principal para o seu ambiente local.

2. Certifique-se de que o [Node.js](https://nodejs.org/) esteja instalado em seu sistema.

3. No terminal, navegue até o diretório onde o arquivo do projeto está localizado.

4. Execute o comando abaixo para iniciar o programa:
   ```bash
   node index.js
   ```

5. Insira os dados solicitados:
   - Nome do herói.
   - Quantidade de XP.

6. O programa exibira o nível do herói com base na experiência informada.

## Exemplo de Saída

### Entrada:
```
Digite o nome do herói: Arthur
Digite a quantidade de XP: 7200
```

### Saída:
```
O Herói de nome Arthur está no nível de Platina
```

## Tecnologias Utilizadas

- JavaScript
- Node.js (para entrada de dados pelo terminal)

## Estrutura do Código

1. **Entrada de Dados**: O módulo `readline` é usado para capturar o nome do herói e a quantidade de XP.
2. **Lógica de Classificação**: Estruturas de decisão (`if-else`) determinam o nível do herói com base na experiência.
3. **Saída**: A mensagem é exibida no terminal com o nível correspondente.

## Contribuição

Sugestões e melhorias são bem-vindas! Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.


## 📧 Contato

Se você tiver dúvidas ou sugestões, entre em contato:

- **Email**: joaopedrosantossilva1@outlook.com
- **GitHub**: [Tederr](https://github.com/Tederr)
- **LinkedIn**: [João Pedro](https://www.linkedin.com/in/joão-pedro-santos-395a90334/)

