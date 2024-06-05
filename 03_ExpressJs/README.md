#  What is Rest API -> 

Rest stands for Representational State Transfer
Api stands for Application Programming interface
REST API is commonly known as RESTful API
REST API is define as an interface that two computer systems use to exchange information securely over the internet.
It was first introduced and defined by DR. Roy Fielding in his doctoral dissertatino in 2000

# RESTful APIs are a popular way of creating web applications that exchange data over the internet in a standardized manner. These APIs follow specific principles such as using resource-based URLs and HTTP methods to perform various operations like creating, reading, updating, and deleting data. ExpressJS is a powerful framework that allows developers to easily create routes, handle requests, and send responses, making it a versatile choice for building APIs that are robust and scalable.

Understanding the concept of RESTful APIs in Express JS:
REST Architecture: REST, which stands for Representational State Transfer, is an architectural style for designing networked applications.
Resource-Based: RESTful APIs in ExpressJS are designed around resources, which are identified by unique URLs. These resources represent the entities (e.g., users, products, articles) that the API manipulates.
HTTP Methods: RESTful APIs use standard HTTP methods to perform CRUD (Create, Read, Update, Delete) operations on resources:
GET: Retrieves data from a resource.
POST: Creates a new resource.
PUT: Updates an existing resource.
DELETE: Deletes a resource.
Statelessness: RESTful APIs are stateless, meaning that each request from a client contains all the information needed to process the request. Servers do not maintain a session state between requests.
Uniform Interface: RESTful APIs have a uniform interface, which simplifies communication between clients and servers. This interface typically involves the use of standard HTTP methods, resource identifiers (URLs), and representations (e.g., JSON, XML).
ExpressJS and Routing: In ExpressJS, you define routes to handle incoming requests for specific resources and HTTP methods. Each route specifies a callback function to process the request and send an appropriate response.
Middleware Integration: ExpressJS middleware can be used to handle tasks such as request validation, authentication, and response formatting, enhancing the functionality and security of RESTful APIs.
Response Codes: RESTful APIs use standard HTTP status codes to indicate the success or failure of a request. Common status codes include 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found), and 500 (Internal Server Error).

# REST API 
A REST API (Representational State Transfer Application Programming Interface) is a set of rules and conventions for building and interacting with web services. It allows different systems to communicate over the internet using standard HTTP methods. Here are the key components and characteristics of REST APIs:

Key Components
Resources: Everything in REST is considered a resource, which can be any kind of object, data, or service. Each resource is identified by a URL (Uniform Resource Locator).
HTTP Methods: REST uses standard HTTP methods to perform actions on resources:
GET: Retrieve a resource.
POST: Create a new resource.
PUT: Update an existing resource.
DELETE: Remove a resource.
Statelessness: Each request from a client to the server must contain all the information the server needs to fulfill that request. The server does not store client context between requests.
Representations: When a client requests a resource, the server responds with a representation of that resource. This representation can be in various formats, such as JSON (most common), XML, or HTML.
URI (Uniform Resource Identifier): A unique identifier for each resource, typically in the form of a URL.
Characteristics
Client-Server Architecture: REST API follows a client-server architecture where the client and server are independent of each other.
Stateless: Each request from the client contains all the information needed to process the request.
Cacheable: Responses must define themselves as cacheable or not to prevent clients from reusing stale or inappropriate data.
Layered System: REST APIs can be designed with multiple layers of servers, which can help with load balancing, shared caching, and other intermediaries.
Code on Demand (optional): Servers can extend the functionality of a client by transferring executable code.
Example
Consider a simple REST API for managing a collection of books:

GET /books: Retrieve a list of all books.
GET /books/{id}: Retrieve a specific book by its ID.
POST /books: Create a new book.
PUT /books/{id}: Update a book by its ID.
DELETE /books/{id}: Delete a book by its ID.
Benefits
Scalability: Due to its stateless nature and separation of client and server, REST APIs can handle a large number of clients and requests.
Flexibility: Clients and servers can evolve independently as long as the interface between them doesn't change.
Interoperability: REST APIs can be used across different platforms and languages as long as they follow the standard HTTP protocol.
Common Use Cases
Web and Mobile Applications: To communicate with backend servers.
Microservices: To enable communication between different microservices.
Third-Party Integrations: To provide external services with access to application data and functionality.
REST APIs have become the standard method for enabling communication between different systems over the web due to their simplicity and scalability.

# what is API

An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information. APIs are used to enable the integration of different systems, allowing them to interact and share data seamlessly.

# How do APIs Work?
The working of an API can be clearly explained with a few simple steps. Think of a client-server architecture where the client sends the request via a medium to the server and receives the response through the same medium. An API acts as a communication medium between two programs or systems for functioning. The client is the user/customer (who sends the request), the medium is the application interface programming, and the server is the backend (where the request is accepted and a response is provided). Steps followed in the working of APIs –

The client initiates the requests via the APIs URI (Uniform Resource Identifier)
The API makes a call to the server after receiving the request
Then the server sends the response back to the API with the information
Finally, the API transfers the data to the client


Types of APIs
There are three basic forms of API – 

1. WEB APIs
A Web API also called Web Services is an extensively used API over the web and can be easily accessed using the HTTP protocols. A Web application programming interface is an open-source interface and can be used by a large number of clients through their phones, tablets, or PCs. 

2. LOCAL APIs
In this type of API, the programmers get the local middleware services. TAPI (Telephony Application Programming Interface), and .NET are common examples of Local APIs.

3. PROGRAM APIs
It makes a remote program appear to be local by making use of RPCs (Remote Procedural Calls). SOAP is a well-known example of this type of API.