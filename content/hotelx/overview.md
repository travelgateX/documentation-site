+++
title = "Overview"
pagetitle = "HotelX Intro"
description = "HotelX Information"
icon = "fa-info-circle"
weight = 1
alwaysopen = false
+++

HotelX is the ultimate connectivity solution. Besides **enabling you to connect to multiple `Sellers`**, it also adds business logic **solving most of the problems commonly found in the travel business** in an elegant and efficient way.

{{< figure src="/images/connectx_diagram.png#center" alt="High Level ConnectX Architecture" attr="" >}}

Each and every layer discribed in the this figure is explained as follows:

### Business Logic

We've added a new layer of business logic in front of the pure transformation API. A fast, totally scalable and flexible layer, whichh allows you to overwright everything at the request level, or be left as is. The API is **completely written in Go and Redis for performance and scalability**. There's also the possibility of writing plugins (in Go) in order to add any logic or add an extra functionality.

Some of the funcionalities of the business logic layer include:

* Configuration and access management
* Hotel, Room and Board Mappings
* Sort & Filter results
* Add pricing/markups
* Currency Exchange
* [Plugins Execution](#plugins)

### Plugins

HotelX introduces a new concept to the industry: Plugins. A plugin is **a piece of code that is executed inside our application**. There are a few points in the request lifetime where anyone can [develop a plugin](/hotelx/plugins/). It receives the request _or response_ as an input and outputs the _changed_ request _or response_. Plugins are a core package in the [Go Programming language](https://golang.org/). All the info about it can be found [here](https://golang.org/pkg/plugin/).

### Transformation Layer

The transformation layer takes care of the actual transformation into the Seller's specific format and back. It generates requests to the supplier in an optimal way, known as **Optimal Connector**. The Optimal connector is the result of years of interacting with the `Sellers`, learning from them and understanding how to send them requests. Each different supplier has a different logic, and we know now exactly which request will be handled more effectively by the supplier.

The transformation layer keeps each and every Seller integration in an optimal level. If a new version is released, we will update our integration. Our team is constantly monitoring the traffic, both automatically _and_ manually in order to make sure the connectivity just works.

### Optional Cache Layer

Our cache layer, called [Speed](https://www.travelgatex.com/products/speed.html) does exactly what the name says, it caches results to avoid knocking out the `Sellers`. From a high level perspective it is just a cache. 

We use advanced Machine Learning models to predict how long each cached item will be valid from taking into account a large number of variables set in the request. This cache is hosted in [Google's BigTable](https://cloud.google.com/bigtable/), a "Massively Scalable NoSQL" database built with performance and scalability in mind.

### Sellers

Each and every `Seller` works in a different way. Most are old legacy SOAP APIs and none of them are GraphQL. We have developed them all, and learned from it. We are connected to more than 600 `Sellers` seemlessly.
