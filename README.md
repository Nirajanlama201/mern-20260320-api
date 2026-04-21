# Node with Express API

## Node.Js

- Node.js is a JavaScript runtime.
- Runtime: A program that runs another program.
- Run JS in local machine.
- Built on C++
- Powered by Google Chrome v8 engine
- Used to build: API, real time apps, micro-services

## Architecture

- Single threaded
- Non-blocking I/O operation
- Event loop

## Express.js

- It is a Node.js API/backend framework.
- Used to build API (Application program interface)
- It simplies the HTTP module of node.js
- Minimalist, fast and unopinionated framework

## API

- API format: JSON (JavaScript Object Notation)
- REST API (Representational state transfer)

### JSON

- JS Object => JSON.stringify() => JSON
- JSON => JSON.parse() => JS Object

## HTTP Methods

1. GET - Read/Fetch
2. POST - Create
3. PUT - Update
4. DELETE - Delete
5. PATCH - Partial update

## Layered Architecture

1. API Layer
    a. Routes: Handle routes/endpoints
    b. Controllers: Handle request/response
    c. Middlewares: Handle request/response, Logging, Auth

2. Business logic layer
    a. Services

3. Data logic layer
    a. Models

4. Database layer

=========================

- Postman
