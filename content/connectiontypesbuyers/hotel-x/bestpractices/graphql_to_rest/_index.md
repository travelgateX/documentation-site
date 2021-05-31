+++
title = "GraphQL to Rest"
pagetitle = "GraphQL to Rest"
description = ""
icon = "fa-tachometer"
weight = 1
alwaysopen = false
isDirectory=false
+++


In case you expect to be returned +5k options per search response, we suggest using our GraphQL to Rest feature to keep performance at the highest level.

To implement this feature, please follow below steps:

1. Check that your JSON parser is updated to the last schema as the Array Fields previously defined as single Scalars can produce unexpected JSON marshalling
2. Add the HTTP header to your request(s): TGX-Content-Type:graphqlx/json
3. Test a sample call for every request using the header
4. Enjoy the performance{{% alert theme="warning" %}}

{{% alert theme="info" %}} Please take a look at our [blog](https://blog.travelgatex.com/en/how-to-improve-graphql-performance){{% /alert %}}
