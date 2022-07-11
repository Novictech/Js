// // // // // // // // let name = 'John Doe';
// // // // // // // // console.log(name);
// // // // // // // // name = 'Steve Smith';
// // // // // // // // console.log(name);


// // // // // // // // const person = {
// // // // // // // //     name: 'John',
// // // // // // // //     age: 30
// // // // // // // // }

// // // // // // // // person.name = 'sara';
// // // // // // // // person.age = 32

// // // // // // // // // console.log(person)

// // // // // // // // const numbers = [1,2,3,4,5];
// // // // // // // // numbers.push(6,7,8,9);
// // // // // // // // console.log(numbers)

// // // // // // // // PRIMITIVE

// // // // // // // // String
// // // // // // // // const name = 'usman Razaq';


// // // // // // // // // Number
// // // // // // // // const age = 45;



// // // // // // // // // Boolean
// // // // // // // // const hasKids = true;


// // // // // // // // // Null
// // // // // // // // const car = null;


// // // // // // // // // Undefined
// // // // // // // // let test;



// // // // // // // // Symbol
// // // // // // // // const sym = symbol();

// // // // // // // // console.log(typeof sym);


// // // // // // // // Reference type

// // // // // // // // Array
// // // // // // // // const hobbies = ['movies', 'music'];

// // // // // // // // Object literal

// // // // // // // // const address = {
// // // // // // // //     city: 'Boston',
// // // // // // // //     state: 'MA'
// // // // // // // // }

// // // // // // // // const today = new Date();


// // // // // // // // console.log(today);
// // // // // // // // console.log(typeof today);

// // // // // // // // Conversion

// // // // // // // // let val;
// // // // // // // // Number to string
// // // // // // // // val = String(55555);
// // // // // // // // val = String(4+4);
// // // // // // // // Boolean to a string
// // // // // // // // val = String(true);
// // // // // // // // Date to a string
// // // // // // // // val = String(new Date);
// // // // // // // // Array to string
// // // // // // // // val = String([1,2,3,4,5]);

// // // // // // // // toString() method
// // // // // // // // val = (5).toString();

// // // // // // // // String to number
// // // // // // // // val = Number('5');
// // // // // // // // val = Number(true);
// // // // // // // // val = Number(null);
// // // // // // // // val = Number('hello');

// // // // // // // // parseInt method

// // // // // // // // val = parseInt('100');
// // // // // // // // val = parseFloat('100.30');



// // // // // // // // Output
// // // // // // // // console.log(val);
// // // // // // // // console.log(typeof val);
// // // // // // // // // console.log(val.length);
// // // // // // // // console.log(val.toFixed());

// // // // // // // // const val1 = String(5);
// // // // // // // // const val2 = 6;
// // // // // // // // const sum = val1 + val2;

// // // // // // // // console.log(sum);
// // // // // // // // console.log(typeof sum)

// // // // // // // // const num1 = 100;
// // // // // // // // const num2 = 50;
// // // // // // // // let val;

// // // // // // // // Simple math with numbers
// // // // // // // // val = num1 + num2;
// // // // // // // // val = num1 - num2;
// // // // // // // // val = num1 * num2;
// // // // // // // // val = num1 / num2;
// // // // // // // // val = num1 % num2;

// // // // // // // // Math object
// // // // // // // // val = Math.PI;
// // // // // // // // val = Math.E;
// // // // // // // // val = Math.round(2.4);
// // // // // // // // val = Math.ceil(2.4);
// // // // // // // // val = Math.floor(2.8);
// // // // // // // // val = Math.sqrt(64);
// // // // // // // // val = Math.abs(-3);
// // // // // // // // val = Math.pow(8, 2);
// // // // // // // // val = Math.min(2,33,4,1,55,-2);
// // // // // // // // val = Math.max(2,33,4,1,55,-2);
// // // // // // // // val = Math.random();

// // // // // // // // val = Math.floor(Math.random() * 20 +1);

// // // // // // // // console.log(val);

// // // // // // // // String and concatenation
// // // // // // // const firstName = 'William';
// // // // // // // const lastName = 'Doe';
// // // // // // // const age = 26;
// // // // // // // const str = 'Hello there my name is Brad.';
// // // // // // // const tags = 'Web development, programming, product design, project management';

// // // // // // // let val;

// // // // // // // val = firstName + lastName;
// // // // // // // // Concatenation
// // // // // // // val = firstName + ' ' + lastName;

// // // // // // // // Append (+=)

// // // // // // // val = 'Brad ';
// // // // // // // val += 'Traversy';

// // // // // // // val = 'Hello, my name is '+ firstName + ' and I am ' + age;

// // // // // // // // Escaping (by putting a \)
// // // // // // // val = "That's awesome, I can't wait";
// // // // // // // val = 'That\'s awesome, I can\'t wait';

// // // // // // // // Lenght
// // // // // // // val = firstName.length;

// // // // // // // // concat
// // // // // // // val = firstName.concat(' ', lastName);

// // // // // // // // change case
// // // // // // // val = firstName.toUpperCase();
// // // // // // // val = firstName.toLowerCase();

// // // // // // // val = firstName[2];

// // // // // // // // indexof
// // // // // // // val = firstName.indexOf('l');
// // // // // // // val = firstName.lastIndexOf('l');

// // // // // // // //charAt()
// // // // // // // val = firstName.charAt('2');

// // // // // // // // Get last character
// // // // // // // val = firstName.charAt(firstName.length - 1);

// // // // // // // // Substring
// // // // // // // val = firstName.substring(0, 4);

// // // // // // // // Slice()
// // // // // // // val = firstName.slice(0, 4);
// // // // // // // val = firstName.slice(-3);

// // // // // // // // Split
// // // // // // // val = str.split(' ');
// // // // // // // val = tags.split(',')

// // // // // // // // Replace
// // // // // // // val = str.replace('Brad', 'Usman');

// // // // // // // // Include()
// // // // // // // val = str.includes('fool');





// // // // // // // console.log(val);

// // // // // // //Template Literals
// // // // // // const firstName = 'William';
// // // // // // const lastName = 'Doe';
// // // // // // const age = 26;
// // // // // // const job = 'web Developer';
// // // // // // const city = 'Akure';

// // // // // // // Without template strings (es5)
// // // // // // html = '<ul><li>Name: ' + name + ' </li><li> Age: ' + age + ' </li><li>Job: '+ job + ' </li><li>City: '+ city +' </li></ul>';

// // // // // // html = '<ul>' +
// // // // // //             '<li>Name: ' + name + ' </li>' +
// // // // // //             '<li> Age: ' + age + ' </li>' +
// // // // // //             '<li>Job: '+ job + ' </li>' +
// // // // // //             '<li>City: '+ city +' </li>' +
// // // // // //         '</ul>';

// // // // // // // With template strings (es6)
// // // // // // html = `
// // // // // //     <ul>
// // // // // //         <li>Name: ${name}</li>
// // // // // //         <li>Age: ${age}</li>
// // // // // //         <li>Job: ${job}</li>
// // // // // //         <li>City: ${city}</li>
// // // // // //     </ul>
// // // // // // `;


// // // // // // document.body.innerHTML = html;

// // // // // // Create some arrays
// // // // // const numbers = [43,56,33,23,44,36,5];
// // // // // const numbers2 = new Array(43,56,33,23,44,36,5);
// // // // // const fruit = ['Apple', 'Orange', 'Banana', 'Pear'];
// // // // // const mixed = [22, 'Hello',  true, undefined, null, {a:1, b:2}, new Date];

// // // // // let val;

// // // // // // Get array length
// // // // // val = numbers.length;

// // // // // // Check if is array
// // // // // val = Array.isArray(numbers);

// // // // // // Get single value
// // // // // val = numbers[4];

// // // // // // Insert into array
// // // // // numbers[2] = 100;

// // // // // //Find index of value
// // // // // val = numbers.indexOf(36);

// // // // // // // Mutating Array
// // // // // // // Add on to end
// // // // // // numbers.push(250);

// // // // // // //Add on to front
// // // // // // numbers.unshift(120);

// // // // // // // Take off from end
// // // // // // numbers.pop();

// // // // // // // Take off from front
// // // // // // numbers.shift();

// // // // // // // Splice values
// // // // // // numbers.splice(1,3);

// // // // // // // Reverse
// // // // // // numbers.reverse();

// // // // // // Concatenate array
// // // // // val = numbers.concat(numbers2);

// // // // // // // Sorting arrays
// // // // // // val = fruit.sort();
// // // // // // val = numbers.sort();

// // // // // // // use the "compare function"
// // // // // // val = numbers.sort(function(x, y){
// // // // // //     return x - y;
// // // // // // });

// // // // // // // Reverse sort 
// // // // // // val = numbers.sort(function(x, y){
// // // // // //     return y - x;
// // // // // // });

// // // // // // Find
// // // // // function under50(num){
// // // // //     return num < 50;
// // // // // }

// // // // // val = numbers.find(under50);
// // // // // function over50(num){
// // // // //     return num > 50;
// // // // // }

// // // // // val = numbers.find(over50);


// // // // // console.log(numbers);
// // // // // console.log(val);

// // // // // Objects literal
// // // // const person = {
// // // //     firstName: 'Razaq',
// // // //     lastName: 'Usman',
// // // //     age: 26,
// // // //     email:'urazaq4@gmail.com',
// // // //     hobbies: ['music', 'sports', 'reading', 'cooking',],
// // // //     address: {
// // // //         city:'Akure',
// // // //         state: 'ondo'
// // // //     },
// // // //     getBirthYear: function(){
// // // //         return 2022 - this.age;
// // // //     }
    
// // // // }

// // // // let val;

// // // // val = person;
// // // // // Get specific value
// // // // val = person.firstName;  // Recommended method
// // // // val = person['firstName'];
// // // // val = person.hobbies;
// // // // val = person.address.state;
// // // // val = person.getBirthYear();

// // // // console.log(val);

// // // // const people = [
// // // //     {name: 'Usman', age: 26},
// // // //     {name: 'Razaq', age: 25},
// // // //     {name: 'Abiodun', age: 27}
// // // // ]

// // // // for(let i = 0; i < people.length; i++){
// // // //     console.log(people[i].name);
// // // // }

// // // // Date and Time
// // // let val;

// // // const today = new Date();
// // // let birthday = new Date('05-07-1996 14:09:25');

// // // val = today.getMonth();
// // // val = today.getDate();
// // // val = today.getDay();
// // // val = today.getFullYear();
// // // val = today.getHours();
// // // val = today.getMinutes();
// // // val = today.getSeconds();
// // // val = today.getTime();

// // // console.log(val);


// // // If statement & Comparison operators
// // //  If(something){
// // //     do something
// // // };
// // // else {
// // //     do something else
// // // }

// // const id = '100';

// // // // Equal to
// // // if(id == 100){
// // //     console.log('CORRECT');
// // // } else{
// // //     console.log('INCORRECT')
// // // }

// // // //Not equal to
// // // if(id != 100){
// // //     console.log('CORRECT');
// // // } else{
// // //     console.log('INCORRECT')
// // // }

// // // // Equal to value and type
// // // if(id === 100){
// // //     console.log('CORRECT');
// // // } else{
// // //     console.log('INCORRECT')
// // // }
// // // // Not Equal to value and type
// // // if(id === 100){
// // //     console.log('CORRECT');
// // // } else{
// // //     console.log('INCORRECT')
// // // }


// // // Test if Undefined
// // // if(typeof id !== 'undefined'){
// // //     console.log(`The ID is ${id}`);
// // // } else{
// // //     console.log('NO ID');
// // // }

// // // Greater or less than
// // // if(id >= 100){
// // //         console.log('CORRECT');
// // //     } else{
// // //         console.log('INCORRECT')
// // //     }

// // //If Else
// // // const color = 'yellow';

// // // if(color === 'red'){
// // //     console.log('color is red');
// // // }
// // // else if(color === 'blue'){
// // //     console.log('color is blue');
// // // }
// // // else {
// // //     console.log('color is not red or blue');
// // // }

// // //Logical operators
// // const name = 'steve';
// // const age = 26;


// // //AND &&
// // if(age > 0 && age < 12){
// // console.log(`${name} is a child`);
// // } else if(age >= 13 && age <= 19){
// //     console.log(`${name} is a teenager`);
// // } else {
// //     console.log(`${name} is an Adult`);
// // }

// // // OR ||
// // if(age < 16 || age > 65){
// //     console.log(`${name} can not run in race`);
// // } else{
// //     console.log(`${name} is registered for the race`);
// // }

// // // TENARY operator
// // console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// // SWITCH
// // const color = 'red';

// // switch(color){
// //     case 'red':
// //         console.log('color is red');
// //         break;
// //     case 'blue':
// //         console.log('color is blue');
// //         break;
// //     default:
// //         console.log('color not found')

// // }
// // let day;

// // switch(new Date().getDay()){
// //     case 0:
// //         day = 'Sunday';
// //         break;
// //     case 1:
// //         day = 'Monday';
// //         break;
// //     case 2:
// //         day = 'Tuesday';
// //         break;
// //     case 3:
// //         day = 'Wednesday';
// //         break;
// //     case 4:
// //         day = 'Thursday';
// //         break;
// //     case 5:
// //         day = 'Friday';
// //         break;
// //     case 6:
// //         day = 'Saturday';
// //         break;
// // }

// // console.log(`Today is ${day}`);

// // FUNCTION DECLARATIONS & ExPRESSION
// // functions are blocks of code that can defined and then called at the later time.
// // Function declarations
// // function greet(firstName = 'Razaq', lastName = 'Usman'){
//     // if(typeof firstName === 'undefined'){firstName = 'Razaq'}
//     // if(typeof lastName === 'undefined'){lastName = 'Razaq'}
//     // console.log('Hello');
//     // return 'Hello ' + firstName + ' ' + lastName;
// // }
//  // console.log(greet());

//  // FUNCTION EXPRESSION
// //  const square = function(x = 3){
// //     return x*x;
// //  };
//  // console.log(square());

//  // IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// //  (function(){
// //      console.log('IIFE Ran..');
// //  })();

// //  (function(name){
// //      console.log('Hello ' + name);
// //  })('Usman');

// // PROPERTY METHODS
// // const todo = {
// //     add: function(){
// //         console.log('Add todo..');
// //     },
// //     edit: function(id){
// //         console.log(`Edit todo ${id}`);
// //     }
// // }

// // todo.delete = function(){
// //     console.log('Delete todo...');

// // }

// // todo.add();
// // todo.edit(26);
// // todo.delete();

// // LOOPS & ITERATION
// // For Loops 
// // for(i = 0; i < 10; i++){
    
// //     if(i === 7){
// //         console.log('7 is my favorite number')
// //         continue
// //     }

// //     if(i === 8){
// //         console.log('Stop the loop');
// //         break;
// //     }

// //     console.log('Number ' + i);
// // }


// // WHILE LOOP

// // let i = 0;

// // while(i < 10){
// //     console.log('Number ' + i);
// //     i++;
// // }

// // Do While loop

// // let i = 100;

// // do{
// //     console.log('Number ' + i);
// //     i++;
// // }

// // while(i < 10);

// // LOOP THROUGH ARRAY

// // const cars = ['Ford', 'Honda', 'chevy', 'Toyota'];

// // for(let i = 0; i < cars.length; i++){
// //     console.log(cars[i]);
// // }

// // ForEach loop
// // cars.forEach(function(car, index, array){
// //     console.log(`${index} : ${car}`);
// //     console.log(array);
// // });

// // Map
// // const users = [
// //     {id: 1, name: 'usman'},
// //     {id: 2, name: 'razaq'},
// //     {id: 3, name: 'abiodun'},
// //     {id: 4, name: 'ayinla'}
// // ];

// // const ids = users.map(function(user){
// //     return user.id;
// // });

// // console.log(ids);

// // FOR IN Loop

// // const user = {
// //     firstName: 'Usman',
// //     lastName: 'Razaq',
// //     age: 26
// // }

// // for(let x in user){
// //     console.log(`${x} : ${user[x]}`);
// // }

// // WINDOW METHODS / OBJECTS / PROPERTIES
// //ALERT
// // alert('Hello World');

// //PROMPT
// // const input = prompt();
// // alert(input);

// //confirm
// // if(confirm('Are you sure?')){
// //     console.log('YES');
// // } else {
// //     console.log('NO');
// // }

// // let val;

// // Outter height and width

// // val = window.outerHeight;
// // val = window.outerWidth;

// // Inner height and width

// // val = window.innerHeight;
// // val = window.innerWidth;

// // Scroll points
// // val = window.scrollY;
// // val = window.scrollX;

// // Location Object
// // val = window.location;
// // val = window.location.hostname;
// // val = window.location.search;

// // Redirect

// //window.location.href = 'http://google.com'

// // Reload 
// //window.location.reload();

// // History Object

// // window.history.go(-2);

// // Navigator Object

// // val = window.navigator;

// // console.log(val);



// // Global Scope
// var a = 1;
// let b = 2;
// const c = 3;

// // function test(){
// //     var a = 4;
// //     let b = 5;
// //     const c = 6;
// //     console.log('Function scope: ',a, b, c);
// // }

// // test();

// // if(true){
// //     //Block scope
// //     var a = 4;
// //     let b = 5;
// //     const c = 6;
// //     console.log('If scope: ',a, b, c);
// // }

// // for(var  a = 0; a < 10; a++){
// //     console.log(`Loop: ${a}`);
// // }

// console.log('Global scope: ', a, b, c);

const i = "20";

while(i < 100);{

console.log(i);
i = i + 1;
}




