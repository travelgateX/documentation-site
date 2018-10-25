+++
title = "Playground"
pagetitle = ""
description = "Try our API now"
icon = "fa-play"
weight = 3
alwaysopen = false
+++

## Try it For Yourself
[API Playground](https://api.travelgatex.com) is an interactive, fun, and super quick way to get to know our APIs.

In the API Playground, as you start to type the query, it will autocomplete with the fields available to complete your query parameters. You can also click on the green _Schema_ button on the right of the Playground window to learn more about our data model and to see all of the options available for building your query.

You can set _Query variables_ in the bottom left pane of the Playground. This lets you customize the response you will receive so that only the fields you need are returned in the response.

(insert a GIF like the one in the launchpad blog post)

## Your First Query 
Try to make a query now for searching for hotels available:
```bash
query (hotels in Mallorca)
```
Click on the big play button in the middle of the playground to see the response.

You should get the following:
```bash
(put in query response)
```

{{< graphiql-script queries="[{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/ba0469dda654a1639294edaadfed1a65/raw\",\"divname\":\"div_main_playground\"}]" >}}
{{< graphiql-styles >}}
{{< graphiql-tags tag="div_main_playground" >}}

## More Queries
Now try these query examples:

<strong>1. Add query variables to search for a particular date range</strong>
- explain/show

<strong>2. Search for hotels in Mallorca with a swimming pool</strong>
- explain/show

Once you are comfortable with making queries in the API Playground, you can use the same query structure in your applications. Check out the pages <a href="/learning-graphql/">Learning GraphQL</a> to learn more about including queries in the code of your client applications.

### Further Reading

- https://dev-blog.apollodata.com/4-simple-ways-to-call-a-graphql-api-a6807bcdb355
- https://medium.com/graphql-mastery/graphql-quick-tip-how-to-pass-variables-into-a-mutation-in-graphiql-23ecff4add57
