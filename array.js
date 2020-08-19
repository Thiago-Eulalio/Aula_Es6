// criando array

const users = ["Guilherme", "Pedro", "Jenifer"];

const gender = {
    Man: 'M',
    Woman: 'W'
}

const persons = [
    {
        name: "Guilherme",
        age: 26,
        gender: gender.Man
    },
    {
        name: "Pedro",
        age: 43,
        gender: gender.Woman
    },
    {
        name:"Jenifer",
        age: 18,
        gender: gender.Man
    }
];

// retornando a quantidade de itens do array
console.log("Itens:", persons.length)

// Verificando se é array
console.log("A variavel persons é um array:", Array.isArray(persons));

// Iterando itens do array
persons.forEach((persons, index, arr) => {
    console.log(`Nome: ${persons.name}, index: ${index}`, arr);
});

// Filtrar array
const mens = persons.filter(persons => persons.gender === gender.Man)
console.log('\nNova Lista apenas com homes:', mens);

// Retorna um novo arrey
const personsWinthCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});

console.log('\nPessoas com adição de curso:', personsWinthCourse)

//Transforma um array em outro tipo

const totalAge = persons.reduce((age, person) =>{
    age += person.age;
    return age;
}, 0)

console.log('\nSoma de idade das pessoas', totalAge)

// Juntando Operações
const totalEvenAges = persons
                            .filter(person => person.age % 2 === 0)
                            .reduce((age, person) => {
                                age += person.age;
                                return age
                            }, 0);
                        console.log('\nSoma das idades das pessoas que possuem idade par', totalEvenAges)