'use strict';
/* ----------------------------------------------- function вызов */
code5();

/* Interval */
function code1() {
  const INTERVAL = 100;
  let counter = 0;
  const MAX_VALUE = 3;
  let timer = null;

  const event = () => {
    if (counter === MAX_VALUE) {
      console.log('The end');
      clearInterval(timer);
      return;
    }
    console.dir({ counter, date: new Date() });
    counter++;
  };

  console.log('Begin');
  timer = setInterval(event, INTERVAL);
}

/* Цикл for */
function code2() {
  const MAX_VALUE = 3;

  console.log('Begin');
  for (let i = 0; i < MAX_VALUE; i++) {
    console.dir({ i, date: new Date() });
  }
  console.log('The end');
}

/* function add */
function code3() {
  const add = (a, b) => a + b;

  console.log(add(5, -2)); /* Subtraction 5 + (-2) = 3 */
  console.log(add('5', '2')); /* Concatenate \'5\' + \'2\' = 52 */
  console.log(add(5, 2)); /* Number 5 + 2 = 7 || Float 3.4 */
}

/* Array and for of */
function code4() {
  const welcome = person => {
    console.log('AVE, ' + person.name);
  };

  const persons = [
    { name: 'Marcus' },
    { name: 'Mao' },
  ];
  const marcus = { name: 'Slava' };
  const mao = { name: 'Vasya' };

  for (const person of persons) {
    welcome(person);
    console.log('iteration for of - ', person);
  }
  welcome(marcus);
  welcome(mao);
}

/* Object and for in */
function code5() {
  const welcome = person => {
    console.log('AVE, ' + person.name);
  };

  const persons = {
    marcus: { name: 'Marcus' },
    mao: { name: 'Mao' },
  };

  for (const name in persons) {
    const person = persons[name];
    welcome(person);
    console.log(persons, `- key - ${name}`, `, value - ${persons[name].name}`);
  }
}