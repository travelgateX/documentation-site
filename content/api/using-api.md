+++
title = "Using the API"
description = ""
weight = 2
alwaysopen = false
+++

### Authenticating
To communicate with the GraphQL server, you'll need an access token with the right scopes.

This access token could be an [API Key](/admin/security/authentication/#api-keys) or a [JSON Web Token](/admin/security/authentication/#json-web-tokens), and the correct way to send it to GraphQL server is via HTTP Header:

* API key: `"Authorization: Apikey xxxxxxxxx"`
* JWT: `"Authorization: Bearer xxxxxxxxx"`

Follow the steps in [Creating an access token](/admin/security/authentication/#creating-an-access-token) to create a token.

### GraphQL Endpoint
Single endpoint which remains constant no matter what operation you perform: https://api.travelgatex.com

### Communicating with GraphQL
Because GraphQL operations consist of multiple operations and schemas, TravelgateX recommends using the Explorer to make GraphQL calls.
There are some alternatives to use GraphQL builtin explorer like GraphQL Playground. You can also use cURL or any other HTTP-speaking library.
{{% alert theme="info" %}}It's mandatory that production clients enable GZIP compression in HTTP header{{% /alert %}} 

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

### Documentation
Documentation is generated from GraphQL schema.You can use multiple columns and keyboard-based navigation via [Schema Tag's Playground](https://api.travelgatex.com)

{{<figure src="/images/graphql_playground.gif" link="https://api.travelgatex.com"  alt="travelgateX Schema Documenation">}}

### Using the API
The two types of allowed operations in travelgateX GraphQL API are:

* [Queries](http://graphql.org/learn/queries/)
* [Mutations](http://graphql.org/learn/queries/)

For more information about using a GraphQL API click [here](/learning-graphql/).

### Examples
TravelgateX shares [GraphQL Playgrounds](https://github.com/graphcool/graphql-playground) with common scenarios using products.
Playgrounds are shared in [product](/product/) reference sections, for example you can use  [ConnectX Hotel Playground](https://graphqlbin.com/JYRtB)

It's important to use the correct Headers. If you want to use test headers, insert `"Authorization":"Apikey q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ"`

You can easily [share](https://github.com/graphcool/graphql-playground#how-does-graphql-bin-work) your Queries with others by clicking on the "Share" button and sharing the generated link. You can think about GraphQL Bin like Pastebin for your GraphQL queries including the context (endpoint, HTTP headers, open tabs etc).
