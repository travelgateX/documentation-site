+++
title = "Basic Concepts"
pagetitle = ""
description = ""
weight = 3
alwaysopen = false
+++

### What are Queries & Mutations

> At its simplest, GraphQL is about requesting specific fields on objects. Let's start by looking at a very simple query and the result we get when we run it <cite>http://graphql.org/learn/queries/?utm_source=docs.travelgatex.com</cite>
 
There are two basic operations in GraphQL schemas:

## Queries 
<cite>http://graphql.org/learn/queries/?utm_source=docs.travelgatex.com</cite>

Just like a RESTful _Get_ method, queries _query_ the system. This operation reads values from the server using a Graph Object and gets a JSON as a response.

Unlike a RESTful service, _queries_ are interactive, it allows the user to choose exactly what he wants to get returned. This way, **if the API owner makes a change to the API, the client will not be affected as long as the query does not change**. Think of it like a good old SQL query. As long as you send the same one, the results is always _predictable_. This makes versioning totally unnecessary in GraphQL APIs. There's no need to specify which version you want to consume, beacuse you are in charge of deciding which fields you want to retrieve. 

As a bonus, the GraphQL specification includes handling of [`deprecated`](http://facebook.github.io/graphql/October2016/#sec-Object-Field-deprecation?utm_source=docs.travelgatex.com) fields and marks a field as `is-deprecated` by adding a [`deprecationReason`](http://graphql.org/graphql-js/type/#graphqlobjecttype?utm_source=docs.travelgatex.com) to the field.

[Query example](/product/connectx/hotel/concepts/book-transactions/#playground-samples)

`EJEMPLO PEQUE DE DISPO`
{{% alert theme="danger" %}}**TODO: Falta ejemplo!!**{{% /alert %}}

## Mutations 
<cite>http://graphql.org/learn/queries/#mutations?utm_source=docs.travelgatex.com</cite>

Mutations are methods that change the server, more specifically a physical change to the data. Whether it is inserting a new object in a database, deleting or updating,  queries take care of POST, PUT and DELETE methods in a REST API or INSERT, UPDATE and DELETE in SQL.

[Mutation example](/product/connectx/hotel/concepts/book-transactions/#playground-samples):
