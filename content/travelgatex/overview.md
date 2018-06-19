+++
title = "Overview"
pagetitle = "TravelgateX Platform"
description = "TravelgateX Platform Information"
icon = "fa-info-circle"
weight = 1
alwaysopen = false
+++

This page provides an overview of the _TravelgateX_ platform.

## GraphQL Gateway

**TravelgateX** is the travel API completely based in GraphQL. Unlike many legacy XML Soap APIs, GraphQL enables each client to ask for and receive exactly the data that is needed. Learn more by reading our [Learning GraphQL guides](/learning-graphql/overview/#graphql-at-travelgatex).

Our Gateway is the only endpoint to **access all of our APIs**. It is written in NodeJS. This makes it fast, stable, secure, fault tolerant and load balanced between many datacenters from four different cloud providers: [Microsoft Azure](https://azure.microsoft.com/), [Google Cloud Platform](https://cloud.google.com/), [Hetzner](https://www.hetzner.de/) and [TotalUptime](http://totaluptime.com/).

## Using the API

There are two types of allowed operations in the TravelgateX GraphQL APIs:

* [Queries](/travelgatex/reference/schema/query/): Queries are "read only" and are used to get data from our system. For example, getting a list of available hotel vacancies for a particular date and location is a `Query`
* [Mutations](/travelgatex/reference/schema/mutation/): Mutations change, add or delete the data in our system. For example, making a booking for a vacant hotel room is a `Mutation`.

## GraphQL Endpoint

One of the benefits of using GraphQL is that there is only a single endpoint. You can use this endpoint for all the operations you want to perform.

{{% alert theme="info" %}}Our GraphQL API endpoint for all operations is: https://api.travelgatex.com{{% /alert %}}

## Communicating with the Server

To communicate with our GraphQL server, you'll need an access token with the right scopes. You are able to create a token by following the steps mentioned in the [Security Overview](/travelgatex/security/overview).

## Making Requests

The best place to test how to make GraphQL queries in TravelgateX is to start with our interactive [API Playground](https://api.travelgatex.com/). You can also use [curl](https://curl.haxx.se) or any other HTTP-speaking library.

{{% alert theme="danger" %}}All **LIVE** traffic **MUST** enable GZIP compression in the HTTP header{{% /alert %}}

```html
Accept-Encoding: gzip
```

To query GraphQL using [curl](https://curl.haxx.se), make a POST request with a JSON payload. The payload must contain a string called query:

```bash
curl -X\
   POST\
   -H "Content-Type: application/json" \
   -H "Authorization: Apikey q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ"  \
   --data '{"query":"{hotelX{searchStatusService{code description}}}"}' \
   --compressed \
   https://api.travelgatex.com
```

## GraphQL Reference

There are several ways you can learn more about the full capabilities of our TravelgateX GraphQL data model

- [Reference Documentation](/travelgatex/reference/) provides complete reference documentation for all resources, fields and objects in our GraphQL data model (called a `Schema`).

- [API Playground](https://api.travelgatex.com) provides an interactive, multi-column schema definition based on the GraphiQL tool, but with many additional features.

- [GraphQL-voyager](https://api.travelgatex.com/voyager) displays our GraphQL API as an interactive relational database-like graph to help you understand the different parent and child tables within our schema.

- [Learning GraphQL](/learning-graphql/) is a set of resources to get to know GraphQL and to understand our schema.

## Examples

Check out our [GraphQL Playground](/getting-started/playground/) to get started with making your first query and to work thropugh other query examples.

{{% alert theme="warning" %}}Keep in mind that it's important to use the correct Headers. 
If you wish to use test headers, insert `"Authorization":"Apikey q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ"`
{{% /alert %}}

You can easily **share your Queries with others by generating a link** using the _share_ button available in the API Playground. This share function works as a Pastebin for your GraphQL query and includes the context (endpoint, HTTP headers, open tabs, etc) so you can share exactly what your Playground query setup looks like.

## Conventions

TravelgateX follows some conventions about schema definition:

* [Relay schema implementation](https://facebook.github.io/relay/)
* [Definition of custom scalar types](/travelgatex/reference/scalars/)
* [Token Based Authentication](/travelgatex/security/overview/)
