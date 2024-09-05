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
 


function shoppingList(){
    let shoppingList = [];
    let item = '';

    while(item != 'fim'){
        item = prompt('qual o item?').toLowerCase();
        shoppingList.push(item);
    }
    
    shoppingList.pop();
    for(let list of shoppingList){
        console.log(list);
    }
    
}

function rant(message){
    for(let i = 1; i<4; i++){
        console.log(i, message.toUpperCase());
    }
}

const Person = {
    first: 'Sara',
    last: 'Monteiro',
    getName(){
        return Person.first;
    }
}

console.log(Person.getName());