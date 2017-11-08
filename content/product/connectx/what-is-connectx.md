+++
title = "What's ConnectX"
description = ""
weight = 1
alwaysopen = false
+++

## What's ConnectX?

ConnectX is the ultimate connectivity solution, it not only _connects_ you to multiple suppliers, but also _adds_ business logic _solving_ most of the problems commonly found in the travel business in an **elegant and efficient** way.

{{< figure src="/images/connectx_diagram.png#floatleft" alt="High Level ConnectX Architecture" width="500px" attr="" >}}

Each and every layer discribed in the this figure is explained as follows:

### GraphQL Gateway

ConnectX is the first-in-the-industry travel API completely based in GraphQL. Most travel APIs are old legacy XML Soap APIs. We know that, because we've integrated too many of them. The problems with that technology are well-known and we won't get into details here. One of the things we really like about GraphQL, is that each client is ultimately responsible over what it wants to be returned. For the full reasoning behind working with GraphQL please click [here](/learning-graphql/overview/#graphql-at-travelgatex).

The architecture doest not differ from many modern APIs. There's an API Gateway, which takes care of basic stuff like authentication and authorization. It also acts like a shield protecting us from DoS attacks and handles throttling. Analytics takes also an important part in the gateway. Moreover, our Gateway is **the only endpoint** to access all of our APIs.

It is written in NodeJS, _fast_, stable, secure and fault tolerant load balanced between many datacenters from 4 different cloud providers, namely [Microsoft Azure](https://azure.microsoft.com/), [Google Cloud Platform](https://cloud.google.com/), [Hetzner](https://www.hetzner.de/) and [TotalUptime](http://totaluptime.com/).

### Business Logic

We've added a new layer of business logic in front of the pure transformation API, very fast and totally scalable. It's very flexible, everything can be overridden at the request level, or be left as is. The API is completely written in Go and Redis for performance and scalability. There's also the possibility of writing plugins (in Go) in order to add any logic or add an extra functionality.
The main funcionalities of the business logic layer includes, but not limited to:

* Configuration and access management
* Hotel Mapping
* Room Type Mapping
* Sort & Filter results
* Add pricing/markups
* Currency Exchange
* [Plugins](#pugins)

#### Plugins

ConnectX introduces a new concept to the industry: Plugins.
In a nutshell, a plugin is a piece of code that _is executed inside our application_. There are a few points in the request lifetime where anyone can develop a plugin. It receives the request _or response_ as an input and outputs the _changed_ request _or response_.
Plugins are a core package in the [Go Programming language](https://golang.org/) and more info about it can be found [here](https://golang.org/pkg/plugin/).

For more information and how to write and build plugins please go to the relevant ConnectX Plugin Documentation Page: [Hotel](/product/connectx/hotel/concepts/plugins/) or [Flight](/product/connectx/flight/concepts/plugins/).

### Transformation

The transformation layer takes care of the actual trasformation into the supplier's specific format and back. It generates requests to the supplier in an optimal way, we call it *Optimal Connector*. The Optimal connector is the result of years of interacting with the suppliers and learning from them _and_ from experience how to send requests to them. Each different supplier has a different logic, and is more efficient in one way. We use this now how to send exactly the request which the supplier will handle more effectively, being that a per hotel list, or destination or anythign that over the time we0ve learned from their responses.
The transformation layer keeps each and every supplier integration in an optimal level. If a new version is released, we will update our integration. Our team is constantly monitoring the traffic, both automatically _and_ manually in order to make sure the connectivity just works.

### [_Optional_] Cache Layer

Our cache layer, called [Speed](https://www.travelgatex.com/products/speed.html) does exactly what the name says, it caches results so that we don't knock out the suppliers. From a high level perspective it is just a cache. Our secret sauce is _how we expire the cache_. We use advanced Machine Learning models to predict how long each cached item will be valid from taking into account a large number of variables set in the request.
The cache is hosted in [Google's BigTable](https://cloud.google.com/bigtable/), a "Massively Scalable NoSQL" database built with performance and scalability in mind.

### Suppliers

Each and every supplier works in a different way. Most are old, legacy SOAP APIs, very few are RESTful APIs and none of them is GraphQL. We have developed them all, and ~~suffered~~ learned from all of them. 

We connect seemlessly to more than 600 suppliers.




