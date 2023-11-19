// 1. 
var car = 'Rolls-Royce';

var carGroup;
switch (car) {
  case 'Audi':
  case 'Bentley':
  case 'Bugatti':
  case 'Lamborghini':
  case 'Porsche':
  case 'VW':
    carGroup = 'priklauso VW Group';
    break;
  case 'BMW':
  case 'Mini':
  case 'Rolls-Royce':
    carGroup = 'priklauso BMW Group';
    break;
  default:
    carGroup = 'nepriklauso jokiai grupei';
}

console.log(car + " " + carGroup);

// 2.
var userInput = 'Obuolys'; 

var foodCategory;
switch (userInput) {
  case 'Bananas': 
  case 'Obuolys':
  case 'Kriaušė':
  case 'Vynuogės':
  case 'Ananasas':
    foodCategory = 'vaisius';
    break;
  case 'Bulvė':
  case 'Morka':
  case 'Pomidoras':
  case 'Agurkas':
  case 'Kopūstai':
    foodCategory = 'daržovė';
    break;
  default:
    foodCategory = 'nežinoma kategorija';
}

console.log(userInput + ' yra ' + foodCategory);

// 3.
var weekDay = 6; 

switch (weekDay) {
  case 0:
    weekDay = 'pirmadienis';
    break;
  case 1:
    weekDay = 'antradienis';
    break;
  case 2:
    weekDay = 'trečiadienis';
    break;
  case 3:
    weekDay = 'ketvirtadienis';
    break;
  case 4:
    weekDay = 'penktadienis';
    break;
  case 5:
    weekDay = 'šeštadienis';
    break;
  case 6:
    weekDay = 'sekmadienis';
    break;
  default:
    weekDay = 'nežinoma savaitės diena';
}

console.log('Šiandien yra ' + weekDay);
