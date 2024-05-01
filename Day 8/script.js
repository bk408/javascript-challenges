// We have two approach two solve this issue

// 1. Recursive method

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

/*
   Recursive method: It's like breaking down a big problem into smaller problems, solving each smaller problem the same way, 
   and then putting the solutions together to solve the big problem.

 */

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(3));

// 2. Iterative method

/*
 Iterative method in JavaScript refers to a process where a set of instructions is repeatedly executed until a specific condition is met.

*/

function factorial(n) {
  let ans = 1;

  if (n === 0) return 1;

  for (let i = 2; i <= n; i++) ans = ans * i;
  return ans;
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(4));
