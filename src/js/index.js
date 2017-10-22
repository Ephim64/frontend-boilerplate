import some from './a';

const obj = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
  e: 'e'
};

const { a, b, ...cde } = obj;
/* this how i find this file */
some();
console.log(cde);
