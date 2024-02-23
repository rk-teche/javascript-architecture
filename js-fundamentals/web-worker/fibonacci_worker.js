// fibonacci_worker.js

// Function to calculate Fibonacci number
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Listen for messages from the main thread
self.onmessage = function(e) {
    const n = e.data;
    const result = fibonacci(n);
    // Send the result back to the main thread
    self.postMessage(result);
};
