function fibanacciUpToLimit(limit) {
  let sequenceFib = [0, 1];

  while (
    sequenceFib[sequenceFib.length - 1] + sequenceFib[sequenceFib.length - 2] <=
    limit
  ) {
    sequenceFib.push(

      sequenceFib[sequenceFib.length - 1] + sequenceFib[sequenceFib.length - 2]
    );
  }
  return sequenceFib;
}

const limit = 300;
const result = fibanacciUpToLimit(limit);

console.log(result);
/*  This line is part of a while loop and contains a condition that determines whether the loop should continue executing. Let's break it down further:

fibSequence is an array that presumably stores Fibonacci numbers.
fibSequence.length gives the length (number of elements) of the fibSequence array.
fibSequence[fibSequence.length - 1] accesses the last element in the array.
fibSequence[fibSequence.length - 2] accesses the second-to-last element in the array.
fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2] calculates the sum of the last two elements in the array, which is a common step in generating Fibonacci sequences.
Now, the condition:

<= limit: This checks if the sum of the last two Fibonacci numbers is less than or equal to the specified limit.*/