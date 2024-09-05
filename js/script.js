 //declare an array
 let desserts = ['bolo de chocolate', 'bolacha','semifrio', 'pudim'];

//  for(let i = 0; i<desserts.length; i++){
//     console.log(desserts[i]);
//  }
 
for(let item of desserts){
    console.log(item);
}

for(let item in desserts){
    console.log(item, desserts[item]);
}

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


