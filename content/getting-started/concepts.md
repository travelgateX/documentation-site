+++
title = "Concepts"
pagetitle = "Understand Common Concepts"
description = "Understand Concepts"
icon = "fa-question-circle" 
weight = 3
alwaysopen = false
+++

TravelgateX offers a set of [Products](/products) ready to be integrated using a single [GraphQL](/graphql-api/) endpoint.

## GraphQL API
TravelgateX is the first-in-the-industry travel API completely based in GraphQL. Most travel APIs are old legacy XML Soap APIs. We know that, because we've integrated too many of them. The problems with that technology are well-known and we won't get into details here. One of the things we really like about GraphQL, is that each client is ultimately responsible over what it wants to be returned. 

It is a stable, secure and fault tolerant load balanced between many datacenters from 4 different cloud providers, namely [Microsoft Azure](https://azure.microsoft.com/), [Google Cloud Platform](https://cloud.google.com/), [Hetzner](https://www.hetzner.de/) and [TotalUptime](http://totaluptime.com/).
For the full reasoning behind working with GraphQL please click [here](/learning-graphql/overview/#graphql-at-travelgatex).

For explanation about using TravelgateX GraphQL API please click [here](/getting-started/api/).

## Partner

A `Partner` is someone or `something` that can interact with any TravelgateX APIs or apps. It can be either a `User`, which identifies a person, or `Service Account` which is identified by an API Key.

## Organization

Each [`Partner`](#Partner) belongs to one or more `Organizations`. 

An `Organization` is made up of `Partners`, `Resources`, `Settings`, `Permissions` and other `Metadata`.

## Product
We organize our APIs by similarity and common features. A `Product` is an API domain which is available for the consumption of `Resources`. 

For detailed `Product` information please click [here](/products).

## Entities
`Entities` or core resources are entities that define common objects in all our API domains.

### Buyer
  
A `Buyer` is a `Partner` who is connected to TravelgateX in the demand side in order to **buy** travel products from `Sellers`.

### Seller
  
A `Seller` is a `Partner` who is connected to TravelgateX on the supply side in order to **sell** their product to connected `Buyers`Ma.

### Tech Platform
  
Many `Partners`, `Buyers` _or_ `Sellers` use a third party platform in order to **buy** _or_ **sell** travel products. These are usually tech companies specialized in developing custom software to other companies.

### Context
  
A `Context` refers to the `Seller` codes the request is using. It's a way of specifiying which `Seller` codes is being used so it can be transformed and standardized.

### Access

An `Access` is a set of credentials **and** configuration in order to access a `Seller`.












