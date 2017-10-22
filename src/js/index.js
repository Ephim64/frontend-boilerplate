const obj = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
  e: 'e'
};

const { a, b, ...cde } = obj;
/* this how i find this file */

console.log(cde);
