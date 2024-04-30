//1. Crie um modulo de calculadora, exportando as 4 operações básicas: somar, subtrair, dividir, multiplicar
//- Dentro de outro arquivo, importar as funções e executar as operações
const faker = require("@faker-js/faker")
const soma = require("./somar")
const subtrair = require("./subtrair")
const dividir = require("./dividir")
const multiplicar = require("./multiplicar")


console.log(soma(20,30))
console.log(subtrair(100,400))
console.log(dividir(400,1900))
console.log(multiplicar(50,50))

//2. usando a lib fakerjs (https://www.npmjs.com/package/@faker-js/faker) crie uma função que retorna dados de uma pessoa falsa contendo nome, email e data de nascimento.

function createRandomUser() {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }


console.log(createRandomUser())


