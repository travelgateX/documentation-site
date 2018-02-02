+++
title = "Thinking in GraphQL"
pagetitle = ""
description = ""
weight = 4
alwaysopen = false
+++

## A Paradigm Shift

GraphQL is a query language, and as such it does exactly that: it queries servers in order to get results back and ee get to choose exactly what data we want to retrieve. **As opposed to JSON, each piece of data has its own type, so we know exactly what to expect**, it's a typed language. This gives it a lot of predictability, something we really appreciate, especially when dealing with third party APIs, where we have no control of what's going on on the other side.

### Building GraphQL Schemas

In GraphQL, the API specifications are called _schemas_. **A GraphQL Schema is like a contract between the client and the server**. It's the way how they talk to each other and what they expect from each other. This way, both know exactly what they can and cannot send to each other and what they'll get in response to that. This makes a lot of a difference when creating our schemas, we have to get used to think in a **Schema First** way. 

>A particularly interesting pattern seems to be emerging. Over and over again, I hear developers describing a way of approaching product development we’re calling “GraphQL First.”<cite>https://dev-blog.apollodata.com/graphql-first-a-better-way-to-build-modern-apps-b5a04f7121a0</cite>

First, we model our data, thinking of all the different uses we can give to it. And only then, we'll think of where we are going to get it from. It could even be from different services, like a database or another node from a third party provider.

Another great feature of GraphQL is that the specification ensures that we write documentation while writing the schema. Not only is it cool to see your text in the GraphiQL window, but while you're typing your query, it helps you to think of each and every node and why you're putting it there. Tools such as APIs Guru's [graphql-faker](https://github.com/APIs-guru/graphql-faker) makes it **possible to write the schema in one scree while in the other you see the results**.

**GraphQL schemas also support inheritance by using the same objects for different queries**. For example, in our business domain, just like in most businesses, we have to **return the price of the Hotel or Flight and with GraphQL we are able to use exactly the same element in both**, and just extend it if needed. This makes the job much easier and faster for the developer who are implementing our service.

If you wish to see TravelgateX schema implementation, simply follow the practices explained [here](/graphql-api/)

### Building Queries

- Componentes de la query
- Componentes de la respuesta
- Respuesta
- Como lo hacemos
- Paginacion

### Building Mutations

- Componentes de la query
- Componentes de la respuesta
- Respuesta
- Como lo hacemos
- Paginacion


{{% alert theme="danger" %}}**TODO: Falta chicha!!**{{% /alert %}}


