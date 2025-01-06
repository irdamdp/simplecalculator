// const yd = 10;
// let age = 25;
// console.log(`you are ${age}`);
// () => {
//   let b;
// };
// let greet = (name = "guest") => {
//   console.log(`Hello, ${name}!`);
// };

// greet();
// greet("Abreham");
// let agee = 21;
// let message = agee > 18 ? "ayele won't come" : " I will come.";
// console.log(message);

// for (i = 0; i <= 2; i++) {}
// let day = 1;
// switch (day) {
//   case 1:
//     console.log("It is monday");
//     break;
//   case 2:
//     console.log("It is Tuesday");
//   default:
//     console.log("It's Wensday");
// }

// let tela = {
//   male: message,
//   age: 19,
//   filetype: "audio",
// };

// class product {
//   constructor(name, age) {
//     this.name = name;
//     this.price = 13;
//   }
//   displaytheresult() {
//     console.log(`Product: $(this.name) `);
//   }
// }
// const man = new product("ayele", 189);
// man.displaytheresult();

// let car = {
//   brand: "toyota",
//   speed: 0,
//   accelerate: function () {
//     this.speed += 8;
//     console.log(`The car is now going ${this.speed} km/h`);
//   },
// };

// car.accelerate();

// function createcounter() {
//   let count = 0;
//   return {
//     increment: function () {
//       count++;
//       console.log(count);
//     },
//     reset: function () {
//       count = 0;
//       console.log(count);
//     },
//   };
// }

// let counter = createcounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.reset();

// class Car {
//   constructor(a, b) {
//     this.brand = a;
//     this.model = b;
//   }

//   start() {
//     console.log("Car Started");
//   }
// }

// let car1 = new Car("TOyota", "Corolla");
// let car2 = new Car("Honda", "Civic");

// class New {
//   constructor(a, b) {
//     this.model = a;
//     this.type = b;
//   }
// }
// let car3 = new New("bajaj", "force");

// // let arr1 = [1, 2, 3, 4]; // Array literal
// // let arr2 = new Array(5, 6, 7); // Array object
// // console.log(arr2);

// Array.prototype.ayele = function (callback) {
//   const result = [];
//   for (i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i));
//   }
//   return result;
// };

// const arr = [1, 2, 3];
// const doubled = arr.ayele((x, i) => x * i);
// console.log(doubled);

// // the psedo code should be like this

// // 1.start to looking on the crowd of letters
// // 2.then go to the next step if capital  write if not jump
// // 3.then finish up to the end of the letters
// // 4.then read the capital letters that i have got from the crowd

// // using javascript.
// // 1.create a function
// // 2.give a variable for the crowd of letters
// // 3.use for loop to see every index from the String
// // 4. us if condition to check whether the letter is equal with its upper case
// // 5. if it isn't jump if it is put it push it an array or String
// // 6.once finished print it in the console

// function detectuppercase(crowd) {
//   let result = "";
//   for (i = 0; i < crowd.length; i++) {
//     if (crowd[i] === crowd[i].toUpperCase()) {
//       result = result + crowd[i];
//       // console.log(result);
//     }
//   }
//   return result;
// }
// let crowd = detectuppercase("ihkbedSjkHhkbsOghbsRjndT");
// console.log(crowd);

// // create a function that returns true if the first array can be nested inside the the second array.

// // psuedo code for this is going to be like this
// // look at the arrays value
// // check the min and max of each
// // the if min is less than the other min
// // and max is lessthan the other max then return true

// function nesting(arrp, arrq) {
//   let arr1 = arrp.sort((a, b) => a - b);
//   let arr2 = arrq.sort((a, b) => a - b);
//   if (arr1[0] < arr2[0] && arr1[arrp.length - 1] < arr2[arrq.length - 1]) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let arrp = [1, 2, 3, 12, 3, 4, 56, 78, 23, 1, 5, 7, 8, 34, 65, 78, 90, 32, 200];
// let arrq = [3, 4, 5, 4, 8, 9, 10, 6, 46, 78, 96, 23, 12, 21, 6, 98];
// const rep = nesting(arrp, arrq);
// console.log(rep);

// // 1.if the sum of prime numbers in the array equal to the first index of the array we call it magic array
// // 2.if the array doesn't have a prime number then it is what other than the first index of the array then we call it magic array again
// // 3.if there is no again any prime number in the array and the first index of the array equal to 0 then it will be
// // 1.create a function
// // 2.then use for loop to iterate over the Array
// // 3.check if there is a prime number in the array if there is no a prime number skip the if condition
// // 4.if there is a prime number that satisfies one of the last three conditions start to check.to check prime number use number %2 number %3 number %5 number %7 number % 10 !=== 0

// function magicarray(array1) {
//   let tekabay = 0;
//   let sorted = array1;
//   for (i = 0; i < sorted.length; i++) {
//     // if (sorted[i] >= 2) {
//     //   if (sorted[i] == 2 || sorted[i] == 3 || sorted[i] == 5 || sorted[i] == 7)
//     //     tekabay += sorted[i];
//     //   console.log(tekabay);
//     // } else if (
//     //   (sorted[i] % 2 !== 0 && sorted[i] % 3 !== 0 && sorted[i] % 5 !== 0) &&
//     //   sorted[i] % 7 !== 0 &&
//     //   sorted[i] % 10 !== 0
//     // ) {
//     // }
//     if (sorted[i] == 2) {
//       tekabay += sorted[i];
//     }
//     let isprime = true;
//     if (sorted[i] > 2) {
//       for (j = 2; j <= sorted[i] / 2; j++) {
//         if (sorted[i] % j == 0) {
//           isprime = false;
//         }
//       }
//       if (isprime) {
//         tekabay += sorted[i];
//       }
//     }
//   }
//   if (sorted[0] == tekabay) {
//     return "they are equal!";
//   } else {
//     return "Oww they are not!";
//   }
// }
// console.log(magicarray([21, 3, 7, 11, 50, 45, 62]));

// // pseudo code starts here
// // first watch the array
// // then start looking at the first element of the array1
// // and compare it with next Element
// // if it is greater than the first swap there place
// // then go to the next and compare the 2nd with third
// // keep go like that
// // use the for loop to make the change possible

// function bubble(stegn) {
//   let bb = stegn;
//   let why = true;
//   while (why) {
//     why = false;
//     for (let i = 0; i < bb.length - 1; i++) {
//       if (bb[i] > bb[i + 1]) {
//         why = true;
//         let temp = bb[i];
//         bb[i] = bb[i + 1];
//         bb[i + 1] = temp;
//       }
//     }
//   }
//   return bb;
// }
// let bb = [23, 45, 65, 78, 32, 12, 1, 3, 89, 56, 29, 99, 77, 11];
// let number = bubble(bb);
// console.log(number);

// // pseudo code for point of equilibrium-
// // - first define the array and look closely on the elements
// // - add the first index of the array with second and the third and go on
// // - go on and also start adding from the back to the front
// // - i will check for the point where the two side of the addition will get equal
// // - then if equal and have the point of equilibrium return 1 if not return zero

// // -let's go to the javascript code
// function point(arrr) {
//   if (arr.length === 0) return false;
//   let totalSum = arrr.reduce((sum, num) => sum + num, 0);
//   console.log(totalSum);
//   let leftone = 0;
//   let say = 0;

//   for (i = 0; i < arrr.length; i++) {
//     let theright = totalSum - leftone - arrr[i];
//     if (leftone === theright) {
//       console.log(`Equilibrium found at index ${i}`);
//       return true;
//     }
//     leftone += arrr[i];
//   }

//   return false;
// }
// let arrr = [70, 90, 21, 8, 96, 21, 90, 70, 5, 3];
// console.log(point(arrr));

// function checker(e) {
//   for (i = 1; i < e.length - 1; i++) {
//     let tleft = 0;
//     for (j = 0; j < i; j++) {
//       tleft = tleft + e[j];
//     }
//     let right = 0;
//     for (k = e.length - 1; k > i; k--) {
//       right = right + e[k];
//     }
//     if (tleft == right) {
//       console.log(`Equilibrium found at index ${i}`);
//       return true;
//     }
//   }
//   return false;
// }
// let e = [70, 90, 3, 21, 8, 96, 21, 90, 70, 5, 3, 2, 1];

// console.log(checker(e));

let value = document.querySelector(".value");
value.addEventListener("click", () => {
  value.textContent = 0;
  value.addEventListener("dblclick", () => {
    value.textContent = 0;
  });
});

let button = document.querySelectorAll(".button");
let number1 = document.querySelector(".number-1");
let number2 = document.querySelector(".number-2");
let number3 = document.querySelector(".number-3");
let number4 = document.querySelector(".number-4");
let number5 = document.querySelector(".number-6");
let number6 = document.querySelector(".number-6");
let number7 = document.querySelector(".number-7");
let number8 = document.querySelector(".number-8");
let number9 = document.querySelector(".number-9");
let percent = document.querySelector(".percent");
let pm = document.querySelector(".pm");
let division = document.querySelector(".division");
let addition = document.querySelector(".addition");
let equal = document.querySelector(".equal");
let number0 = document.querySelector(".number-0");
let subtraction = document.querySelector(".subtraction");
let multiplication = document.querySelector(".multiplication");
let ac = document.querySelector(".ac");
let decimal = document.querySelector(".decimal");
let nu = document.getElementsByClassName("nu");
let operator = document.getElementsByClassName("operator");

// initiate algorithim of the project

// the trial version logic of the calculator

let currentvalue = "";
let storedvalue = "";
let currentoperator = "";

let isreadyvalue = false;
let isreadyvaluee = true;
let isready = false;
let ready = true;
let ree = false;

let minfont = 30;
let maxfont = 100;
function adjustfont() {
  const textlength = value.textContent.length;
  let newfontsize = maxfont - (textlength - 12) * 2;
  if (newfontsize < minfont) {
    newfontsize = minfont;
  }
  if (value.textContent.length > 10) {
    ready = false;
  }
  value.style.fontSize = `${newfontsize}px`;
  console.log(`font size adjusted to:${newfontsize}`);
}

Array.from(nu).forEach((num) => {
  num.addEventListener("click", () => {
    if (ready) {
      if (isreadyvalue) {
        // clear the display value of the operation result
        if (num.textContent !== ".") {
          value.textContent = "";
          currentvalue = "";
        }

        isreadyvalue = false;
        // ready = false;
      }
      if (
        num.textContent == "." &&
        currentvalue == "" &&
        value.textContent == "0"
      ) {
        value.textContent += num.textContent;
      }
      if (
        num.textContent == "." &&
        currentvalue !== "." &&
        currentvalue !== "" &&
        currentvalue !== " -"
      ) {
        if (!currentvalue.includes(".") && currentvalue.length <= 8) {
          value.textContent += num.textContent;
          currentvalue += num.textContent;
        }
      }
      if (
        num.textContent == "." &&
        currentvalue == "" &&
        value.textContent == ""
      ) {
        value.textContent = "0";
        value.textContent += num.textContent;
      }

      // // value.style.fontsize = "8px";
      if (num.textContent !== "." && value.textContent !== "0.") {
        if (currentvalue.length <= 10 && currentvalue !== "0") {
          currentvalue += num.textContent;
          value.textContent = `${storedvalue} ${currentoperator} ${currentvalue}`;
          isready = false;
        }
      } else {
        currentvalue;
        value.textContent = `${storedvalue} ${currentoperator} ${currentvalue}`;
        isready = false;
      }
      if (!value.textContent.includes(".") && value.textContent == "-") {
        currentvalue += num.textContent;
        value.textContent = `${storedvalue} ${currentoperator} ${currentvalue}`;
        isready = false;
      }

      if (num.textContent !== "." && value.textContent == "0.") {
        value.textContent += num.textContent;
        currentvalue = value.textContent;
        value.textContent = `${storedvalue} ${currentoperator} ${currentvalue}`;
        isready = false;

        // if (!currentvalue.includes("e")) {
        //   value.textContent += num.textContent;
        //   currentvalue = value.textContent;
        //   value.textContent = `${storedvalue} ${currentoperator} ${currentvalue}`;
        //   isready = false;
        // } else if (currentvalue.includes("E^")) {
        //   currentvalue = currentvalue.replace("E^", "e");
        //   if (currentvalue.includes("e")) {
        //     const [base, exponent] = currentvalue.split("e");
        //     const exponentv = parseInt(exponent, 10);
        //     currentvalue = Number(base) * Math.pow(10, exponentv);
        //   }
        // }
      }
      // adjustfont();
    }
  });
});

// the "-" sign code to add or substract negative numbers

pm.addEventListener("click", () => {
  if (currentvalue == "" && storedvalue == "") {
    // value.textContent = "";
    value.textContent = value.textContent.replace("0", " -");
    currentvalue += " -";
  } else if (currentvalue == "") {
    pm.textContent = " -";
    currentvalue += pm.textContent;
    value.textContent += currentvalue;
  }
});
// near content of the html inputs

let mum = multiplication.textContent;
let sub = subtraction.textContent;
let divi = division.textContent;
let addi = addition.textContent;

// operation function
function multiply(a, b) {
  return a * b;
}
function divide(c, d) {
  return c / d;
}
function add(e, f) {
  return e + f;
}
function subtract(g, h) {
  return g - h;
}

// All types of operations handler

function approximator(result) {
  result = result.toString();
  if (result.includes("e")) {
    let [base, exponent] = result.split("e");
    // const exvalue = parseInt(exponent, 10);
    if (exponent >= 20) {
      base = base.slice(0, 8);
      const combiner = `${base}e${exponent}`;
      value.textContent = combiner.toString();
    } else {
      const combiner = `${base}e${exponent}`;
      value.textContent = combiner.toString().slice(0, 13);
    }
  } else if (!result.includes("e")) {
    value.textContent = result.toString().slice(0, 13);
  }
}
Array.from(operator).forEach((operate) => {
  operate.addEventListener("click", () => {
    if (isready) {
      storedvalue = currentvalue || storedvalue;
      currentoperator = operate.textContent;
      value.textContent = `${storedvalue} ${currentoperator}`;
    }
    if (
      currentvalue !== "" &&
      isreadyvaluee &&
      operate.textContent !== "=" &&
      value.textContent.charAt(value.textContent.length - 1) !== "-"
    ) {
      if (value.textContent !== "NaN") {
        storedvalue = currentvalue || storedvalue;

        currentoperator = operate.textContent;
        currentvalue = "";
        value.textContent = `${storedvalue} ${currentoperator}`;
        isreadyvalue = false;
        isreadyvaluee = false;
        isready = true;
        ready = true;
      }
    }
    if (
      storedvalue !== "" &&
      currentvalue !== "" &&
      currentvalue.charAt(currentvalue.length - 1) !== "." &&
      currentoperator === mum
    ) {
      const result = multiply(Number(storedvalue), Number(currentvalue));
      // console.log(Number(storedvalue));
      // console.log(Number(currentvalue));
      approximator(result);
      currentvalue = value.textContent;
      storedvalue = "";
      currentoperator = "";
      isreadyvaluee = true;
      isreadyvalue = true;
    }
    if (
      storedvalue !== "" &&
      currentvalue !== "" &&
      currentvalue.charAt(currentvalue.length - 1) !== "." &&
      currentoperator == divi
    ) {
      const result = divide(Number(storedvalue), Number(currentvalue));
      approximator(result);
      currentvalue = value.textContent;
      storedvalue = "";
      currentoperator = "";
      isreadyvaluee = true;
      isreadyvalue = true;
    }

    if (
      storedvalue !== "" &&
      currentvalue !== "" &&
      currentvalue.charAt(currentvalue.length - 1) !== "." &&
      currentoperator == sub
    ) {
      const result = subtract(Number(storedvalue), Number(currentvalue));
      approximator(result);
      currentvalue = value.textContent;
      currentoperator = "";
      storedvalue = "";
      isreadyvalue = true;
      isreadyvaluee = true;
    }
    if (
      storedvalue !== "" &&
      currentvalue !== "" &&
      currentvalue.charAt(currentvalue.length - 1) !== "." &&
      currentoperator == addi
    ) {
      const result = add(Number(storedvalue), Number(currentvalue));
      approximator(result);
      currentvalue = value.textContent;
      currentoperator = "";
      storedvalue = "";
      isreadyvalue = true;
      isreadyvaluee = true;
    }
  });
});


ac.addEventListener("click", () => {
  value.textContent = "0";
  currentvalue = "";
  storedvalue = "";
  currentoperator = "";
  isreadyvaluee = true;
  ready = true;
});

var list = document.getElementsByClassName("button");
console.log(list);
list.className = "nu";
