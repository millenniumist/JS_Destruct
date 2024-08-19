//Lab1
// class Calculator {
//     constructor(value) {
//         this.value = value
//     }
//     add(num) {
//         return this.value += num
//     }
//     subtract(num) {
//         return this.value -= num
//     }
//     multiply(num) {
//         return this.value *= num
//     }
//     divide(num) {
//         return this.value /= num
//     }
//     show() {
//         console.log(this.value);
//     }
// }

// let price = new Calculator(10)
// price.add(30)
// price.show()

// Lab2
// class Sale {
//     constructor(name,amount,price) {
//         this.name = name
//         this.amount = amount
//         this.price = price
//     }
//     calPrice() {
//         return this.amount * this.price
//     }
// }

// class Beverage extends Sale {
//     constructor(amount,price) {
//         super()
//         this.amount = amount
//         this.price = price
//     }
// }

// let beverage = new Beverage("Pepsi",3,19)
// console.log(beverage.calPrice()) 

//LabB-1
// let arr = [1,2]
// console.log(Array.isArray(arr));

//LabC-1
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };

// console.log(Object.values(salaries).reduce((acu,cur) => acu + cur))

//LabC-2
// let checkEmptyObj = (obj) => {
//     return Object.keys(obj).length == 0
// } 
// let obj = {}

// console.log(checkEmptyObj(obj));

//LabD-1
// const mult = (...args) => {
//     return args.reduce((acu,cur)=>acu*cur)
// }
// console.log(mult(2,3,4));

//LabD-2
// const filterOutOdds = (...args) => args.filter((arg)=>arg%2==0)
// console.log(filterOutOdds(1,2,3,4,5,6));

//LabD-3
// const mergeObjects = (...objs) => Object.assign({},...objs)
// let obj = {a:1}
// let obj2 = {b:2}
// console.log(mergeObjects(obj,obj2));

//LabD-4
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// let numA = [5,...nums1,6,-1,...nums2];
// console.log(numA.reduce((a,c)=>a+c));

//LabD-5
// const arr1 = [1,2,3,4]
// const arr2 = [...arr1]
// arr2[2] = arr2[2] ** 2
// console.log(arr2);

// LabD-6
// const bio = (fname,surname,...hobbies) => {
//     return [fname,surname,...hobbies,hobbies.length]
// }
// console.log(bio("Mill","Pan","Tennis","Pingpong"));

//LabD-7
// let doubleAndReturnArgs = ([...args],...nums) => {
//     return [[...args],...nums.map(i=>i*2)]
// }
// console.log(doubleAndReturnArgs([2,2,3],3,4));

//LabD-9
// const cloneArray = (arr) => [...arr]
// console.log(cloneArray([1,2,3]));

//LabD-10
// const cloneObject = (obj) => {
//     return    {...obj}
// }
// console.log(cloneObject({a:1}));

//LabD-11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // *Maya| because it's = [0]
// console.log(second); // **Marisa| because it's = [1]
// console.log(third); // ***Chi| because it's = [2]

//LabD-12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     'Raindrops on roses',
//     'whiskers on kittens',
//     'Bright copper kettles',
//     'warm woolen mittens',
//   ];
//   console.log(raindrops); // *Raindrops on roses |because it's = [0]
//   console.log(whiskers); // **whiskers on kittens | because it's = [1]
//   console.log(aFewOfMyFavoriteThings); // ***Bright copper kettles,warm woolen mittens because | it's = [2,3,...]

//LabD-13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // *[10,30,20] because numbers[1] and numbers[2] were reassigned to the original numbers[2], numbers[1] respectively

//LabD-14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // * 8 because we created a new primitive parameter name "numPlanet"(from facts key) as we destructure the value of facts.numPlanets into it
// console.log(yearNeptuneDiscovered); // *** 1846 because we created a new primitive parameter name "yearNeptuneDiscovered"(from facts key) as we destructure the value of facts.yearNeptuneDiscovered into it

//LabD-15
// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
//   let { numPlanets, ...discoveryYears } = planetFacts;
//   console.log(discoveryYears); // *    {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659} as we use spread operator
  

//LabD-16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *Your name is Alejandro and you like purple
// getUserData({ firstName: 'Melissa' }); // **Your name is Melissa and you like green
// getUserData({}); // ***Your name is undefined and you like green

//LabD-17
// let guest = 'Jane';
// let admin = 'Pete';
// [guest,admin] = [admin,guest]
// console.log(guest,admin)

//LabD-18
// const obj = {
//     firstName:"Mill",
//     lastName:"Pan",
//     age:29
// }

// const greet = ({firstName,lastName,age}) => {
//     if(age>18) return `Welcome! ${firstName} ${lastName}`
//         else return `No permission`
// }
// console.log(greet(obj));

// LabD-19
// let user = {
//     name: 'John',
//     years: 27
//   };
// let {name, years:age, isAdmin = 0} = user
// console.log(name,age,isAdmin);

//LabD-21
// let arr = [1, [2, [[[3, 4], 5], 6]]];

// let [a, [b, [[[c, d], e], f]]]  = arr
// console.log(a, b, c, d, e, f);

//LabD-22
// const obj = { prop: 5, prop2: 10 };
// let {prop:a,prop2:b} = obj
// console.log(a,b);

//LabD-23
// let a, b;
// let { a, b } = {a: 1, b: 2};//Let should be in this line
// console.log(a,b);


//LabD-24
// const [, , , a, b] = [1, 2, 3];//both undefined

//LabD-25
// const q = { prop: 5, prop2: [10, 100] };
// let {prop:x, prop2:[,y]} = q
// console.log(x,y);

//LabD-26
// const q = {
//     prop: 'Hello',
//     prop2: {
//       prop2: {
//         nested: ['a', 'b', 'c']
//       }
//     }
//   };

//   let {
//     prop:x,
//     prop2: {
//       prop2: {
//         nested: [,y]
//       }
//     }
//   } = q

//   console.log(x,y);

//LabD-27
// const names = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jack', lastName: 'Dann' },
//     { firstName: 'Joe', lastName: 'Dunne' }
//   ];

// for(let [, {firstName,lastName}] of Object.entries(names)) {
//     console.log(firstName + " " + lastName );
// }

//LabD-28

// const users = [
//     { user: "Name1" },
//     { user: "Name2", age: 2 },
//     { user: "Name2" },
//     { user: "Name3", age: 4 }
//   ];
// for(let [, {user,age}] of Object.entries(users)) {
//     console.log(`User: ${user} Age: ${age??"Unknonwn"}`)
// }
  
  

  
  



  


