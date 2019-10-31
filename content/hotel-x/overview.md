+++
title = "Overview"
pagetitle = "HotelX Overview"
description = "HotelX Overview"
icon = "fa-info-circle"
weight = 1
alwaysopen = false
+++

The HotelX API is a powerful accomodation aggregation solution that will speed up your travel websites and apps and expand your catalogue of hotel booking services.

Using HotelX, you can improve your hotel search response times and their accuracy by customizing aggregated responses based on your preferred criteria.   

Each and every layer described in this figure is explained as follows:

### GraphQL Gateway

Our gateway is the only endpoint to access all of our products. The gateway also manages [authentication and authorization](/travelgatex/security/overview/) of our system. You can read about this, [here](http://docs.travelgatex.com/travelgatex/overview/).

### Business Logic

We’ve added a new layer of business logic in front of the transformation layer of our API. This fast, totally scalable and flexible layer allows you to overwrite everything at the request level, or to leave it as it is. Our API is completely written in Go and Redis for performance and scalability. You can create additional plugins (in Go) in order to add your own logic or add an extra functionality.

Some of the functionalities available in the business logic layer include:

* Configuration and access management 
* Hotel, Room and Board Mappings 
* Agggregate, Sort & Filter results 
* Add pricing/markups 
* Currency Exchange 
* Plugins 


#### Plugins

HotelX allows you to add Plugins to our API. 

{{% alert theme="info" %}}A **plugin** is a piece of code that is executed inside our application that gives you an extra functionality over the requests/responses such as currency conversion.{{% /alert %}}

There are a few points in the request lifetime where anyone can [develop a plugin](/hotel-x/plugins/). A plugin receives the request or response as an input and outputs the changed request or response. 

{{% alert theme="info" %}}Plugins are a core package in the [Go Programming language](https://golang.org/). 
You can learn more about how to use plugins [here](https://golang.org/pkg/plugin/).{{% /alert %}}

### Transformation Layer

The transformation layer takes care of the actual transformation into the Supplier’s specific format and back. It generates requests to the `Supplier` in an optimal way. (We have learnt how to create optimal connections with suppliers through our years of interacting with them, learning from them and understanding how to send them requests.) Each different `Supplier` uses a different business logic, and we know exactly which request will be handled most effectively by each `Supplier`.

The transformation layer keeps each and every `Supplier` integration at the optimal level. Whenever a new version of the Supplier's integration is released, we update our integration. Our team is constantly monitoring the traffic, both automatically and manually in order to make sure the connectivity works.

### Optional Cache Layer

Our cache layer, called [Speed](https://www.travelgatex.com/products/speed.html) does exactly what the name says! It is an optional layer that ensures your responses are lightening fast, by creating a cache. 

We use advanced Machine Learning models to predict how long each cached item will be valid. This takes into account a large number of variables set in the request. The cache is hosted in [Google’s BigTable](https://cloud.google.com/bigtable/), a “Massively Scalable NoSQL” database, built with performance and scalability in mind.

### Suppliers

Each and every `Supplier` works in a different way. Most use old legacy SOAP APIs and none of them use GraphQL! We have developed integrations for all of them, and we keep them all optimized so that response times are super fast. We are seamlessly connected to more than 600 Suppliers.

{{% alert theme="info" %}}Join us on [Slack](https://slack.travelgatex.com/) to talk with us about how to use HotelX in your websites, apps, and products. 
You can also send us a [Jira service desk request](https://xmltravelgate.atlassian.net/servicedesk/customer/portal/7). 
If you would like any new features or more information in our documentation, send us an [issues request](https://github.com/travelgateX/Issue-tracker).{{% /alert %}}

