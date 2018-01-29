+++
title = "Overview"
pagetitle = "of TravelgateX Platform"
description = "TravelgateX Platform Information"
icon = "fa-info-circle"
weight = 1
alwaysopen = false
+++

This page provides an overview of _travelgateX_ platform.

## GraphQL Gateway

**ConnectX** is the travel API completely based in GraphQL and unlike many old legacy XML Soap APIs, GraphQL enables each client to return exactly what they want. If you wish to read more about it, [visit GraphQL guide](/learning-graphql/overview/#graphql-at-travelgatex).

The architecture doesn't differ from many modern APIs. There’s an API Gateway, which takes care of basic procedures such as authentication, authorization and it also acts like a shield to protect us from DoS attacks and also handles throttling. On the other hand, Analytics is also an important part in the gateway. 

Our Gateway is the only endpoint to **access all of our APIs**. It is written in NodeJS, making it fast, stable, secure, fault tolerant and load balanced between many datacenters from four different cloud providers: [Microsoft Azure](https://azure.microsoft.com/), [Google Cloud Platform](https://cloud.google.com/), [Hetzner](https://www.hetzner.de/) and [TotalUptime](http://totaluptime.com/).

## Using the API

The two types of allowed operations in TravelgateX GraphQL API are:

* [Queries](http://graphql.org/learn/queries/)
* [Mutations](http://graphql.org/learn/queries/)

If you wish to learn [how to use a GraphQL API](/learning-graphql/) feel free to visit our guide.

## GraphQL Endpoint

One of the benefits of using GraphQL is that there's only one single endpoint. You can use this endpoint for all operations you want to perform: 

{{% alert theme="warning" %}}https://api.travelgatex.com{{% /alert %}} 

## Communicating with the Server

To communicate with the GraphQL server, you'll need an access token with the right scopes. You are able to create a token by following the steps mentioned in [Security Overview](/travelgatex/security/overview).

## Making Requests

Because GraphQL operations consist of multiple operations and schemas, we recommend using the Explorer to make GraphQL calls. There are some alternatives to use GraphQL builtin explorer like GraphQL Playground. You can also use <a href="https://curl.haxx.se" target="_blank">curl</a> or any other HTTP-speaking library.

{{% alert theme="danger" %}}All **LIVE** traffic **MUST** enable GZIP compression in the HTTP header{{% /alert %}} 

```html
Accept-Encoding: gzip
```

To query GraphQL using <a href="https://curl.haxx.se" target="_blank">curl</a> , make a POST request with a JSON payload. The payload must contain a string called query:

```bash
curl -X\
   POST\
   -H "Content-Type: application/json" \
   -H "Authorization: Apikey q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ"  \
   --data '{"query":"{searchStatusService{code description}}"}' \
   --compressed \
   https://api.travelgatex.com
```

## Viewing the Graph

[Graphql-voyager](https://api.travelgatex.com/voyager) displays [our GraphQL API](https://api.travelgatex.com) in an interactive graph to help you understand its structure.

> * Quick navigation on graph
> * Left panel which provides more detailed information about every type
> * "Skip Relay" option that simplifies graph by removing Relay wrapper classes
> * Ability to choose any type to be a root of the graph

{{<figure src="/images/voyager.gif" link="https://api.travelgatex.com/voyager"  alt="TravelgateX Schema Documentation">}}


## Examples

We share [GraphQL Playgrounds](https://github.com/graphcool/graphql-playground) with common scenarios using products.
Playgrounds are shared in [product](/product/) reference sections, for example you can use [ConnectX Hotel Playground](https://graphqlbin.com/JYRtB)

Keep in mind that it's important to use the correct Headers. If you wish to use test headers, insert `"Authorization":"Apikey q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ"`

You can easily **share your Queries with others by generating a link** using the _share_ button available on the [GraphQL Bin](https://github.com/graphcool/graphql-playground#how-does-graphql-bin-work). The GraphQL Bin works as a Pastebin for your GraphQL queries including the context (endpoint, HTTP headers, open tabs etc).

## Conventions

TravelgateX follows some conventions about schema definition:

* [Relay schema requirements](#Relay Implementation)
* [Definition of custom scalar types](#Custom Scalar Types)
* [Token Based Authentication](/getting-started/security/#Authentication)

## Relay Implementation

TravelgateX uses [Relay](https://facebook.github.io/relay/) schema requirements for its own Resources. Other resources, such as _Seller search response_, are not modeled with Relay practices.

Relay helps TravelgateX API in order to standarize:

* Standards for querying paginated collections ("Connections" and "Edges")
* Identifying objects directly from the root of a query (avoiding long nested queries)
* Provide mutation input data
