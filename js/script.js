 //declare an array
 //  let desserts = ['bolo de chocolate', 'bolacha','semifrio', 'pudim'];
 //  for(let item of desserts){
 //     console.log(item);
 // }

 // for(let item in desserts){
 //     console.log(item, desserts[item]);
 // }
 //  for(let i = 0; i<desserts.length; i++){
 //     console.log(desserts[i]);
 //  }



 function shoppingList() {
     let shoppingList = [];
     let item = '';

     while (item != 'fim') {
         item = prompt('qual o item?').toLowerCase();
         shoppingList.push(item);
     }

     shoppingList.pop();
     for (let list of shoppingList) {
         console.log(list);
     }

 }

 function rant(message) {
     for (let i = 1; i < 4; i++) {
         console.log(i, message.toUpperCase());
     }
 }

 const Person = {
     first: 'Sara',
     last: 'Monteiro',
     getName() {
         return Person.first;
     }
 }

 function peopleNames() {
     //exercício fullnames
     const fullNames = [{
         first: 'Albus',
         last: 'Dumbledore'
     }, {
         first: 'Harry',
         last: 'Potter'
     }, {
         first: 'Hermione',
         last: 'Granger'
     }, {
         first: 'Ron',
         last: 'Weasley'
     }, {
         first: 'Rubeus',
         last: 'Hagrid'
     }, {
         first: 'Minerva',
         last: 'McGonagall'
     }, {
         first: 'Severus',
         last: 'Snape'
     }];

    const firstName = fullNames.map( function (fName){
        return fName.first;
    });

    console.log(fullNames);
    console.log(firstName);
 }

//sintaxe normal
// function greet(userName){
//     console.log(userName);
// }



//arrow function
const greet = (userName) => {
    console.log(userName);
}

function validUserNames(usernames){
    const validNames =  usernames.filter(
        elem => elem.length < 10
    )
    console.log(validNames);
}

function allEvens(numberArr){
     return numberArr.every(myNumber => myNumber%2 ===0)
}


const calcMedia = (notes) =>{
// media = soma/ tamanho
 return (notes.reduce((accumulator, currentVal) => {return accumulator + currentVal})) /  notes.length;
 
}

