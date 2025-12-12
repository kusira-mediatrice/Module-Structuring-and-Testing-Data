const minimum = 1;
const maximum = 100;

const rand = Math.random();
console.log("Math.random() =", rand);

const range = maximum - minimum + 1;
console.log("maximum - minimum + 1 =", range);

const scaled = rand * range;
console.log("Math.random() * (maximum - minimum + 1) =", scaled);

const floored = Math.floor(scaled);
console.log("Math.floor(Math.random() * (maximum - minimum + 1)) =", floored);
const shifted = floored + minimum;

console.log( "Math.floor(Math.random() * (maximum - minimum + 1)) + minimum =",shifted);

const num = Math.floor(rand * (maximum - minimum + 1)) + minimum;
console.log("Math.floor(Math.random() * (maximum - minimum + 1)) + minimum ="num);

/*
An example of calculating net salary from gross salary
with a tax rate and a fixed deduction

const salaryBrut = 4000;
const taxRate = 25; // en pourcentage
const deductionFixe = 300; // déduction fixe

const irpf = (salaryBrut * taxRate) / 100;
console.log("L'IRPF est de :", irpf);
const deduction = irpf + deductionFixe;
console.log("La déduction totale est de :", deduction);
const salaryNet2 = salaryBrut - deduction;
console.log("Le salaire net est de :", salaryNet2);

const salaryNet = salaryBrut - ((salaryBrut * taxRate) / 100) - deductionFixe;
console.log("Le salaire net est de :", salaryNet);*/

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
