+++
title = "Basic Concepts"
pagetitle = ""
description = ""
icon="fa-info-circle"
weight = 3
alwaysopen = false
+++

### What are Queries & Mutations

There are two basic operations in GraphQL schemas:
<ul><li> **Queries**: Requesting data from a data model. An example `Query` would be: checking availability of hotels for a particular date and location</li>
<li> **Mutations**: Making changes and carrying out transactions on data in the data model. An example `Mutation` would be: making a booking to reserve a hotel room on a particular date.</li></ul>

## Queries 
Queries ask the system to provide some data, based on specfic parameters. This operation reads values from the server using a GraphQL `Object` and returns JSON text as a response.

Queries are interactive. You can use our [API Playground](api.travelgatex.com) to test your queries.

{{% alert theme="info" %}} Our [HotelX Getting Started guide](/hotelx/quickstart/) shows you how to make queries to search for available hotels and get quotes. {{% /alert %}}

## Mutations 
Mutations are methods that change the data on the server. That is, mutations make a physical change to the data. This can include inserting a new object in a database, or deleting, or updating a data record.

{{% alert theme="info" %}} Our [HotelX Getting Started guide](/hotelx/quickstart/) shows you how to make mutations to book and cancel reservations. {{% /alert %}}

{{% alert theme="info" %}}Join us on [Slack](https://slack.travelgatex.com/) to talk with us about how to use HotelX in your websites, apps, and products. You can also send us a [Jira service desk request](https://xmltravelgate.atlassian.net/servicedesk/customer/portal/7). If you would like any new features or more information in our documentation, send us an [issues request](https://github.com/travelgateX/Issue-tracker).{{% /alert %}}
