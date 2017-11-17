+++
title = "Overview"
description = "Platform information"
icon = "fa-info-circle"
weight = 1
alwaysopen = false
+++

This page provides an overview of _travelgateX_ platform. It's used as reference 

### GraphQL Gateway

ConnectX is the first-in-the-industry travel API completely based in GraphQL. Most travel APIs are old legacy XML Soap APIs. We know that, because we've integrated too many of them. The problems with that technology are well-known and we won't get into details here. One of the things we really like about GraphQL, is that each client is ultimately responsible over what it wants to be returned. For the full reasoning behind working with GraphQL please click [here](/learning-graphql/overview/#graphql-at-travelgatex).

The architecture doest not differ from many modern APIs. There's an API Gateway, which takes care of basic stuff like authentication and authorization. It also acts like a shield protecting us from DoS attacks and handles throttling. Analytics takes also an important part in the gateway. Moreover, our Gateway is **the only endpoint** to access all of our APIs.

It is written in NodeJS, _fast_, stable, secure and fault tolerant load balanced between many datacenters from 4 different cloud providers, namely [Microsoft Azure](https://azure.microsoft.com/), [Google Cloud Platform](https://cloud.google.com/), [Hetzner](https://www.hetzner.de/) and [TotalUptime](http://totaluptime.com/).

## Using the API

The two types of allowed operations in TravelgateX GraphQL API are:

* [Queries](http://graphql.org/learn/queries/)
* [Mutations](http://graphql.org/learn/queries/)

For more information about using a GraphQL API click [here](/learning-graphql/).

## GraphQL Endpoint
One of the great things we love about GraphQL is that there's only one single endpoint. Use this endpoint for all operations you want to perform: 

{{% alert theme="warning" %}}https://api.travelgatex.com{{% /alert %}} 

## Communicate with Server

To communicate with the GraphQL server, you'll need an access token with the right scopes.

This access token could be an [API Key](/admin/security/authentication/#api-keys) or a [JSON Web Token](/admin/security/authentication/#json-web-tokens), and the correct way to send it to GraphQL server is via HTTP Header:

* API key: `"Authorization: Apikey xxxxxxxxx"`
* JWT: `"Authorization: Bearer xxxxxxxxx"`

Follow the steps in [Creating an access token](/admin/security/authentication/#creating-an-access-token) to create a token.


## Making Requests

Because GraphQL operations consist of multiple operations and schemas, we recommend using the Explorer to make GraphQL calls.
There are some alternatives to use GraphQL builtin explorer like GraphQL Playground. You can also use cURL or any other HTTP-speaking library.

{{% alert theme="danger" %}}All **LIVE** traffic **MUST** enable GZIP compression in the HTTP header{{% /alert %}} 

```html
Accept-Encoding: gzip
```

To query GraphQL using cURL, make a POST request with a JSON payload. The payload must contain a string called query:

```bash
curl -X\
   POST\
   -H "Content-Type: application/json" \
   -H "Authorization: Apikey q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ"  \
   --data '{"query":"{searchStatusService{code description}}"}' \
   --compressed \
   https://api.travelgatex.com
```

## View the Graph

Using [graphql-voyager](https://github.com/APIs-guru/graphql-voyager), we represent [our GraphQL API](https://api.travelgatex.com) as an interactive graph.

> * Quick navigation on graph
> * Left panel which provides more detailed information about every type
> * "Skip Relay" option that simplifies graph by removing Relay wrapper classes
> * Ability to choose any type to be a root of the graph


Open in a new tab [here](https://api.travelgatex.com/voyager)

{{<figure src="/images/voyager.gif" link="https://api.travelgatex.com/voyager"  alt="travelgateX Schema Documentation">}}


## Examples
We share [GraphQL Playgrounds](https://github.com/graphcool/graphql-playground) with common scenarios using products.
Playgrounds are shared in [product](/product/) reference sections, for example you can use  [ConnectX Hotel Playground](https://graphqlbin.com/JYRtB)

It's important to use the correct Headers. If you want to use test headers, insert `"Authorization":"Apikey q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ"`

You can easily [share](https://github.com/graphcool/graphql-playground#how-does-graphql-bin-work) your Queries with others by clicking on the "Share" button and sharing the generated link. You can think about GraphQL Bin like Pastebin for your GraphQL queries including the context (endpoint, HTTP headers, open tabs etc).

## Conventions

TravelgateX follow some conventions about schema definition:

* [Relay schema requirements](#Relay Implementation)
* [Definition of custom scalar types](#Custom Scalar Types)
* [Token Based Authentication](/getting-started/security/#Authentication)

### Relay Implementation
TravelgateX uses [Relay](https://facebook.github.io/relay/) schema requirements for own Resources.
Other resources, like supplier search response, are not modeled with Relay practices.

Relay helps travelgateX API in order to standarize:

* Standards for querying paginated collections ("Connections" and "Edges")
* Identifying objects directly from the root of a query (avoiding long nested queries)
* Provide mutation input data
