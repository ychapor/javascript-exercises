// Displays n-member of Fibonacci sequence (0 1 1 2 3 5 8 13 21 ...)

const fib = n => {
    let prev = 0, next = 1;

    for (let i = 0; i < n; i++) {
	    let temp = next;
	    next = prev + next;
	    prev = temp;
    }

    return prev;
}

console.log(fib(8));
