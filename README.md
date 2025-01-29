# Node.js Unhandled Exception Example

This repository demonstrates a common error in Node.js applications: unhandled exceptions causing server crashes. The `bug.js` file shows a server vulnerable to crashes, while `bugSolution.js` provides a robust solution using error handling.

## Bug Description

The provided `bug.js` creates a simple HTTP server.  However, it lacks error handling. If an unexpected error occurs during request processing (e.g., a database error), the server will crash without any graceful handling, leading to downtime and potential data loss.

## Solution

The `bugSolution.js` file demonstrates a correct approach by wrapping the request handling logic in a `try...catch` block. This catches any exceptions, allowing for logging, sending an error response to the client, and preventing the server from crashing.