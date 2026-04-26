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

# MongoDB

- Non-relational database
- Data are stored in collections & documents
- Database: Main container, all collections are stored here
- Collection: Equivalent to table of relational database
- Document: Equivalent to Row
- Field: Equivalent to Column

## Tools used

- Locally: MongoDB Compass (Shell included)
- Cloud: MongoDB Atlas

**Run mongoDB in compass**

1. Open mongoDB compass
2. Setup a new connection (mongodb://localhost:27017)[mongodb://localhost:27017]

## MongoDB Queries

- `show dbs` : Shows list of database
- `use <dbname>` : Use existing db or create a new one
- `show collections` : Shows list of collections in that db

1. Create

- `db.users.insertOne({name:"Ram"})`
- `db.users.insertMany([{name:"Hari"}, {name:"Sita"}])`

2. Read

- `db.users.find({age:20})` Returns multiple result if exists
- `db.users.findOne({age:20})`

3. Update

- `db.users.updateOne({name:"Ram"}, {$set: {age:40}})`

4. Delete

- `db.users.deleteOne({name:"Ram"})`

## Complex filters

1. $eq: db.users.find({name: {$eq:"Hari"}})
2. $ne: db.users.find({name: {$ne:"Hari"}})
3. $gt/gte: db.users.find({age: {$gt:50}})
4. $lt/lte: db.users.find({age: {$lt:50}})
5. $and: db.users.find({$and: [ {name:"Hari"}, {age:20} ]})
6. $or: db.users.find({$or: [ {name:"Hari"}, {age:45} ]})
7. $in: db.users.find({name: {$in: [ "Hari", "Rohan" ]}})

a. limit: db.users.find().limit(2)
b. skip: db.users.find().skip(1)
c. sort: db.users.find().sort({name:1}) 1: ASC, -1: DESC

## Mongoose

- ODM of MongoDB for Node.js
- Create Schema
- Validate Schema
- Create models using Schema
- Relationships

# Cryptography

## Encryption

- Encryption: Converting readable text to unreadable/cipher text
- for e.g: hello -> aijosecq9wn033qcu-

- Decryption: Converting cipher text to readable text
- for e.g: aijosecq9wn033qcu- -> hello

### Types

- Symmetric: Same key is used for encryption and decryption
- Assymetric: Different keys are used for encryption and decryption, Public/Private key (RSA)

## Hashing

- One way encryption
- Convert the readable text to cipher text but not back to readable
- Hashing always returns same cipher
- hello => 123456asdfdsfg

## Salt

- Adding random characters in the hash
- hello -> 123sdg456ahyusdfdsfuigui
- hello => 12asd3456assdfdghsfgke34

=========================

- Session, Cookie
- JWT (json web token)
- Postman
- ZOD data validation

