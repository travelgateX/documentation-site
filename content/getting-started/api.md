+++
title = "API & Reference"
description = "API and Reference documentation"
icon = "fa-book"
weight = 5
alwaysopen = false
+++

## Using the API

The two types of allowed operations in TravelgateX GraphQL API are:

* [Queries](http://graphql.org/learn/queries/)
* [Mutations](http://graphql.org/learn/queries/)

For more information about using a GraphQL API click [here](/learning-graphql/).

## GraphQL Endpoint
One of the great things we love about GraphQL is that there's only one single endpoint. Use this endpoint for all operations you want to perform: 

{{% alert theme="warning" %}}https://api.travelgatex.com{{% /alert %}} 

## Communicate with GraphQL Server

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

### Custom Scalar Types

TravelgateX GraphQL schema implementation defines custom scalar types.

#### JSON

Sometimes it's necessary to manage arbitrary JSON values for loosely structured data. The JSON type makes sure that it is actually valid JSON and returns the value as a parsed JSON object/array instead of a string.

In queries or mutations, JSON fields have to be specified with enclosing double quotes. Special characters have to be escaped: `"{\"int\": 1, \"string\": \"value\"}"`.

#### DateTime

The DateTime type represents DateTime values. A good example might be a transaction TimeSpan.

In queries or mutations, DateTime fields have to be specified in ISO 8601 format with enclosing double quotes: `"2017-10-22T13:57:31.123Z"`.

#### Date
The Date type represents Date values. A good example might be a Hotel CheckIn Date.

In queries or mutations, DateTime fields have to be specified in ISO 8601 format with enclosing double quotes: `"2017-10-22"`.

#### URI
The URI type represents a URI values. A good example mith be an Hotel Image URL.

In queries or mutations, URI fields have to be specified in RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string format with enclosing double quotes: `"http:\\www.travelgatex.com"`.

#### Country
The Country type represents Country values. A good example might be a Passenger Nationality.

In queries or mutations, Country fields have to be specified in ISO 3166-1 alpha-2 format with enclosing double quotes `"ES"`.

#### Language
The Language type represents Language values. A good example might be a Hotel Description Language.

In queries or mutations, Language fields have to be specified in ISO 3166-1 alpha-2 format with enclosing double quotes `"es"`.

#### Currency
The Currenty type represents Currency values. A good example might be a Rate Price Currency.

In queries or mutations, Currency fields have to be specified in ISO 4217 format with enclosing double quotes `"EUR"`.