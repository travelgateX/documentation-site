+++
title = "Concepts"
description = "Understand concepts"
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

A _Partner_ is someone or _something_ that can interact with any TravelgateX APIs or apps. It can be either a _User_, which identifies a person, or _Service Account_ which identifies an applicattion.

## Organization

Each [_Partner_](#Partner) belongs to one or more _Organizations_. 

An _Organization_ is made up of _Partners_, _Resources_, _Settings_, _Permissions_ and other _Metadata_.

## Product
We organize our APIs by similarity and common features. A _Product_ is an API domain which is available for the consumption of _Resources_. 

For detailed _Product_ information please click [here] (/products).


## Entities
_Entities_ or core resources are entities that define common objects in all our API domains.

### Supplier
  
A _Supplier_ is a physical connection or _integration_ to a third party provider.

### Access

An _Access_ is a set of credentials _and_ configuration in order to access a _Supplier_.












