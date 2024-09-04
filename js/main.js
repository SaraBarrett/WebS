// /*alert('hello world');
// let myLuckyNumber = 16;
// let myName = 'Sara';
// const MY_BIRTHDAY = 1986;
// MY_BIRTHDAY =  1992;

// myName = 'Margarida';

// alert(myName+ ' e o meu número é '+myLuckyNumber+' e o meu ano de nascimento é ' +MY_BIRTHDAY);
// alert(myName+ ' e o meu número é '+myLuckyNumber+' e o meu ano de nascimento é ' +MY_BIRTHDAY);*/


// const MESSAGE = "   TASTE THE RAINBOW  ";
// let whisper = MESSAGE.trim().toLowerCase();

// console.log(whisper);

// const WORD = 'Skateboard';

// let facialHair = WORD.slice(5,10);
// facialHair.replace('o', 'e');
// alert(facialHair);


// let pi = Math.PI;

// let myName = prompt('Qual o seu nome?');
// console.log(myName);

// let dayOfWeek = prompt('Que dia é hoje?').toLowerCase();

// switch(dayOfWeek){
//     case "sexta":
//     alert('yaayyyy,sexta');
//     break;

//     case "terça":
//     alert('yaayyyy,terça');
//     break;

//     case "quarta":
//     alert('yaayyyy,quarta');
//     break;

//     default:
//     alert('não reconheço');
//     break;
// }


// let pw = prompt('qual é a pass?');

// if(pw.length < 5){
//     alert('ok');
// }else{
//     alert('a pass tem mais de 5 caracteres'); 
// }

// let series = ['Friends', 'Dark', 'Breaking Bad', 'House of Dragons', 'The Bear', 'Station 11'];

// series[1] = 'DragonBall';
// series.push('GOT');
// series.unshift('Halt and Catch Fire');

// console.log(series);

// let planets = ['Mercúrio','Venus','Terra', 'Mart', 'Jupiter','Saturno','Venus', 'Plutão'];

// planets[3] = 'Marte';
// planets.pop();
// planets.unshift('YayNovo');
// console.log(planets);


// let courses = [
//     ['Apis', 'Dom', ['JS', 'TS']],
//     ['CSS', 'Html'],
//     'Algoritmia',
//     true,
//     16,
//     'Android'
// ];

// console.log(courses[0][2][0]);

const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];
airplaneSeats[3][1] = 'Sara';

console.log(airplaneSeats);


let JS = {
    avaliação : 'Teste',
    formador : 'Sara Monteiro',
    sala : 2,
    horas : 50,
    ferias : true,
}

console.log('A avaliação é por ' + JS.avaliação);
console.log('A formadora é ' + JS.formador);
