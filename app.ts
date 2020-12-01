import inputArray from './input.json';
import { findTuplesThree, findTuplesTwo } from './day1';

const [factor1, factor2] = findTuplesTwo(inputArray);
console.log('part 1', factor1! * factor2!);

const [number1, number2, number3] = findTuplesThree(inputArray);
console.log('part 2', number1! * number2! * number3!);
