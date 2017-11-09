+++
title = "Thinking in GraphQL"
description = ""
weight = 4
alwaysopen = false
+++

## A Paradigm Shift

GraphQL is a query language, and as such it does exactly that: it queries servers in order to get results back. And we get to _choose_ exactly what data we want to retrieve. As opposed to JSON, each piece of data has its own type, so we get to _know_ exactly what to expect, it's a _typed language_. This gives it a lot of predictability, something we can really appreciate, especially when dealing with third party APIs, where we have no control of what's going on in the other side.

### Building GraphQL Schemas

In GraphQL, the API specifications are called _schemas_. A _GraphQL Schema_ is like a contract between the client and the server. It's the definition of how they talk to each other, what they expect from each other so each of them can know exactly what they can _and cannot_ send to each other and what they'll get in response to that. This makes a lot of a difference when creating our schemas, we have to get used to think in a **Schema First** way. 

>A particularly interesting pattern seems to be emerging. Over and over again, I hear developers describing a way of approaching product development we’re calling “GraphQL First.”<cite>https://dev-blog.apollodata.com/graphql-first-a-better-way-to-build-modern-apps-b5a04f7121a0</cite>

First, we model our data, thinking of all the different uses we can give to it. And only then, we'll think of _where_ we going to get it from. It could even be from different services, like a database and another _node_ from a third party provider.

Another great feature is that the GraphQL specification ensures we write documentation while writing the schema. Apart from being really cool to see your text in the GraphiQL window while you're typing your query, it really helps you to think of each and every node and why you're putting it there. We use APIs Guru's [graphql-faker](https://github.com/APIs-guru/graphql-faker). In one screen you write the schema, and in the other you try what you've just written, including the help text _or documentation_ you've just created.

Furthermore GraphQL schemas support inheritance, we can use the same objects for different queries. For example, in our business domain, and in most businesses for that matter, we have to return the price of the Hotel, or Flight. We can use exactly the same element in both, and just extend it if needed. This makes the job much easier _and faster_ for the developer who's implementing our service.

TravelgateX schema implementation follow practices explained [here](/graphql-api/)

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


