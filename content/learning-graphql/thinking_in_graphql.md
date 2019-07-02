+++
title = "Thinking in GraphQL"
pagetitle = ""
description = ""
icon="fa-cogs"
weight = 4
alwaysopen = false
+++

## A Paradigm Shift

GraphQL is a query language, and as such it does exactly that: it queries servers in order to get results back. With GraphQL, you can choose exactly what data you want to retrieve. GraphQL is a typed query language. That means that it has a lot of predictability, as each piece of data has its own type, so we know what sort of data we will be getting back. This is something we really appreciate, especially since we deal with so many third party APIs, and often we have no control of what's going on on the other side! At TravelgateX we take away all of those headaches, by offering you an integration platform to 600+ suppliers, all accessible via a single GraphQL endpoint.

### Understanding GraphQL Schemas

In GraphQL, the API specifications are called _schemas_. **A GraphQL `Schema` is a contract between the client and the server**. It defines how clients and servers can talk to each other and sets out what they expect from each other. This way, both know exactly what they can and cannot send to each other and what they'll get in response to that.

There are a number of ways you can understand our `Schema`:
<ul><li>You can see all elements of our data model by clicking on the green `Schema` button on the right hand side of our <a href="api.travelgatex.com">API playground</a>.</li>
<li>You can review our Reference Documentation which provides a page by page analysis of all `Objects` and fields used in our `Schema`.</li>
  <li>You can see how all of the data fields are connected by exploring the <a href="https://api.travelgatex.com/voyager">GraphQL Voyager tool</a>.</li></ul>
  
{{% alert theme="info" %}}At TravelgateX we would like to give a hat tip to **API Guru** and their excellent tool [graphql-faker](https://github.com/APIs-guru/graphql-faker). This helped us write the schema in one window while seeing the results in another window. Besides being a super cool feature, this helped us think through each and every node in our data `Schema`.{{% /alert %}}

### Building Queries

You can test a `Query` in the <a href="api.travelgatex.com">API playground</a>.

A query has the following components:
<ul><li><strong>Operation type</strong>: When searching data in GraphQL, we use `Query` to indicate the operation type (see below for `Mutation` operation type)</li>
<li><strong>Operation name</strong>: _(optional)_ You can give your `Query` a name so that it is easy to find in later code. This is the similar to creating a function in other programming languages.</li>
<li><strong>Variable definitions</strong>: You can set what variables need to be completed in order to run your query. You declare a name for the variables you will use by using a $. A common variable name we use is $criteriaSearch. After declaring a variable name, use the colon and then describe what inputs are needed. You can choose from some of the input objects we have already created. For example, we often use the `HotelCriteriaSearchInput` input object. This input object requires the following fields as mandatory (indicate by a `!`): Check in date, check out date, number of hotels to be returned in a response, and number of people to occupy the rooms. You can also add language, currency, nationality and market fields as variables to this input object, for more filtered responses.</li> 
<li><strong>Selection set</strong>: After the variables have been defined, you can use the `{` brackets to start listing what objects you want to query to get the data you need. Each selection set starts with a `{` and ends with a `}`. You can nest (indent) these selection sets so it is easier to read a query.</li>
<li><strong>Response</strong>: Once you have completed defining your query, you will receive a response in JSON format. This will be nested as well, so it is easier to read.</li></ul>

#### Further reading
<p>We recommend the following resources to learn more about making GraphQL queries:
<ul><li><a href="https://dev-blog.apollodata.com/the-anatomy-of-a-graphql-query-6dffa9e9e747">The Anatomy of a GraphQL query</a> by <a href="https://github.com/stubailo">Sashko Stubailo</a></li>
  <li><a href="https://dev-blog.apollodata.com/graphql-explained-5844742f195e">GraphQL explained</a> by <a href="https://twitter.com/databricks">Jonas Helfer</a></li>
  <li><a href="https://graphql.org/learn/queries/">Queries and Mutations</a> by <a href="https://graphql.org/">GraphQL.org</a></li></ul></p>
  
### Building Mutations

You can test a `Mutation` in the <a href="api.travelgatex.com">API playground</a>. We recommend that you work through our <a href="/hotel-x/quickstart/">example HotelX mutation to book a hotel</a>.

A query has the following components:
<ul><li><strong>Operation type</strong>: When searching data in GraphQL, we use `Mutation` to indicate the operation type, that is, we are going to change some data on the server</li>
<li><strong>Operation name</strong>: _(optional)_ You can give your `Mutation` a name so that it is easy to find in later code. This is similar to creating a function in other programming languages.</li>
<li><strong>Variable definitions</strong>: You can set what variables need to be completed in order to run your mutation. You declare a name for the variables you will use by using a $. A common variable name we use is $bookInput. After declaring a variable name, use the colon and then describe what inputs are needed. You can choose from some of the input objects we have already created. For example, we often use the `HotelBookInput` input object. We added an `!` in <a href="/hotel-x/quickstart/">our example</a>. The `!` in GraphQL means it is mandatory. So while only three fields of the `HotelBookInput` are usually mandatory, by adding the `!` to our variable definition, we have made all input object fields mandatory.</li>
<li><strong>Selection set</strong>: After the variables have been defined, you can use the `{` brackets to start listing what objects you want to query to get the data you need. Each selection set starts with a `{` and ends with a `}`. You can nest (indent) these selection sets so it is easier to read a query. </li>
<li><strong>Response</strong>: Once you have completed defining your mutation, you will receive a response in JSON format. This will be nested as well, so it is easier to read. Look for the field `Status` and make sure it has OK to confirm that the data has been added/updated/deleted.</li></ul>

{{% alert theme="danger" %}}We have identified pagination as a topic we need to cover on this page as part of our learning resources. Check our  <a href="https://github.com/orgs/travelgateX/projects/4"><strong>Roadmap</strong></a> for updates on when we will be preparing this content. 

If you need any additional information for this page, or suggestions on how we can improve our documentation, send us an issue via our <a href="https://github.com/travelgateX/Issue-tracker"><strong>Issues Tracker</strong></a>.{{% /alert %}}


