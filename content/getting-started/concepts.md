+++
title = "Concepts"
pagetitle = ""
description = "Understanding the concepts"
icon = "fa-question-circle" 
weight = 3
alwaysopen = false
+++

TravelgateX offers a set of products ready to be integrated using a single GraphQL. If you're not sure about a specific concept, feel free to check our guide bellow to understand the basic concepts.

### API Gateway

"TravelgateX is the first company in the industry travel with an API completely based in GraphQL. Most travel APIs are old legacy XML Soap APIs and we faced a lot of problems with that kind technology. The benefit of using GraphQL, is that each client is ultimately responsible over what it wants to be returned.

It is a stable, secure and fault tolerant load balanced between many datacenters from four different cloud providers: [Microsoft Azure](https://azure.microsoft.com/), [Google Cloud Platform](https://cloud.google.com/), [Hetzner](https://www.hetzner.de/) and [TotalUptime](http://totaluptime.com/). If you're looking for more detailed [analysis on GraphQL](/learning-graphql/overview/#graphql-at-travelgatex) please have a look at our guide on [how to use TravelgateX GraphQL API](/travelgatex/overview)."

### Product
A `Product` is an API domain which is available for the consumption of `Resources`. We organize our APIs by similarity and common features.

### Entities
`Entities` or core resources are entities that define common objects in all our API domains.

### Partner
A `Partner` can interact with TravelgateX API with a `User` identifying a person or a `Service Account` identifying an application.

### Organization
An `Organization` is made up of [`Partners`](#Partner) (they can belong to one or more organizations), `Resources`, `Settings`, `Permissions` and other `Metadata`. 

### Profile
`Organization` use profiles for `Partner` interaction.

### Buyer
A `Buyer` is a `Profile` who is connected to TravelgateX in the demand side in order to **buy** travel products from `Sellers`.

### Seller
A `Seller` is a `Profile` who is connected to TravelgateX in the offering side in order to **sell** travel products to `Buyers`.

### Supplier
 A `Supplier` is a `Partner` who is connected to TravelgateX on the supply side in order to **sell their product** to connected `Buyers`.

### Platform
Many  `Buyers` or `Providers` use a third party platform in order to **buy or sell travel products**. These are usually tech companies specialized in developing custom software for other companies.

### Context
A `Context` refers to the `Supplier` codes the request is using. It's a way of specifiying which `Supplier` codes is being used so it can be transformed and standardized.

### Access
An `Access` is a **set of credentials and configuration** in order to access a `Supplier`.