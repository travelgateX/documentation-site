+++
title = "Quickstart"
pagetitle = ""
description = "HotelX Quickstart"
icon = "fa-clock-o"
weight = 2
alwaysopen = false
+++

In this section you will find all the queries necessaries in order to perform a booking flow using [GraphQL Playground](https://api.travelgatex.com/). 

You will be able to visualize the main necessary queries and responses through our [sample Playground](https://graphqlbin.com/2k65c8). 

## Step by Step

In order to perform a booking flow, please follow the steps below:

### Authorization
First of all, to be able to run any query you should have an Apikey as an authentication.

In case you have an Apikey you can use it by introducing it in the HTTP Headers. Otherwise, you can use the following Apikey for test purposes: q8ggxpoVDW76Kw918hwnnRvxlZmAP2QZ

### Search 
By means of the following query, you will be able to perform an availability search for a given specific criteria.
Modify “criteriaSearch” fields using valid dates and press the button play to send the query.

{{< graphiql query="query { admin{ products { edges{ node{ code }}}}}" divname="div_search" >}}

In case you need to replicate the search, there is a possibility to do so by using our token (see second tab). This token is obtained in the response of a search query and you will find it in each of the options returned.

### Quote 

This query aims to return the total price and cancellation policies of the option selected in the previous step. In Query Variables modify optionRefId with option id value returned in search response and send the query: 

{{< graphiql query="query1 { admin{ products { edges{ node{ code }}}}}" variables="Authorization: c195b18f-46d5-42a8-720d-e3ab628f8e64" divname="div_quote" >}}

In this case you can modify the language, if you don’t indicate the language, it uses the same language that in search. 

### Book 

This query allows you to book a previously quoted option. In Query Variables modify optionRefId with optionRefId value returned in quote response and send the query with the other mandatory information:

<!--<object data="https://graphqlbin.com/1wxWIp" type="text/html" width="100%" height="400px" align="left">
</object>-->
{{< graphiql query="query2 { admin{ products { edges{ node{ code }}}}}" divname="div_book" >}}

{{< gist tgx-bot 533a8e1259e5245a4c3f590964ec506d >}}

### Cancel 

This query allows you to perform a book cancellation. In Query Variables you should introduce all the necessary information of the book that you want to cancel:

<!--<object data="https://graphqlbin.com/68LYhr" type="text/html" width="100%" height="400px" align="left">
</object>-->
{{< graphiql query="query3 { admin{ products { edges{ node{ code }}}}}" variables="Authorization: c195b18f-46d5-42a8-720d-e3ab628f8e64" divname="div_cancel" >}}

### Booking List

You can retrieve the reservation details and status by performing one of the following three options (see tabs):
    1. References - Introducing reservation locators 
    2. Per booking dates
    3. Per arrival dates

 <!--<object data="https://graphqlbin.com/0RvEU2" type="text/html" width="100%" height="400px" align="left">
</object>-->
{{< graphiql query="query4 { admin{ products { edges{ node{ code }}}}}" variables="Authorization: c195b18f-46d5-42a8-720d-e3ab628f8e64" divname="div_bookinglist" >}}

