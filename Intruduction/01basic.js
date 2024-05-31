// Node Js --->

/* 
Node.js is an open-source and cross-platform JavaScript runtime environment. It is a powerful tool suitable for a wide range of projects. Node.js stands out as a game-changer. Imagine using the power of JavaScript not only in your browser but also on the server side. .................

JavaScript Runtime: Node.js runs on the V8 JavaScript engine, which is also the core engine behind Google Chrome. However, unlike the browser context, Node.js executes JavaScript code outside of the browser.
Single Process Model: A Node.js application operates within a single process, avoiding the need to create a new thread for every request. This design choice contributes to Node.js’ performance.
Asynchronous I/O: Node.js provides a set of asynchronous I/O primitives in its standard library. These primitives prevent JavaScript code from blocking, making non-blocking behavior the norm. When performing I/O operations (e.g., reading from the network, accessing databases, or the filesystem), Node.js doesn’t waste CPU cycles waiting. Instead, it resumes operations when the response arrives.
Concurrency Handling: Node.js efficiently handles thousands of concurrent connections using a single server. It avoids the complexities of managing thread concurrency, which can lead to bugs.
JavaScript Everywhere: Frontend developers familiar with JavaScript can seamlessly transition to writing server-side code using Node.js. You don’t need to learn a different language.
ECMAScript Standards: Node.js supports the latest ECMAScript standards. You can choose the version you want to use, independent of users’ browser updates.
*/


/*
Why Node.JS?
Node.js is used to build back-end services like APIs like Web App, Mobile App or Web Server. A Web Server will open a file on the server and return the content to the client. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart, and so on.
Easy to Get Started: Node.js is beginner-friendly and ideal for prototyping and agile development.
Scalability: It scales both horizontally and vertically.
Real-Time Web Apps: Node.js excels in real-time synchronization.
Fast Suite: It handles operations quickly (e.g., database access, network connections).
Unified Language: JavaScript everywhere—frontend and backend.
Rich Ecosystem: Node.js boasts a large open-source library and supports asynchronous, non-blocking programming.
*/

/*
How Node.JS Works?
Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
*/