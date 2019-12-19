+++
title = "Hotel-X Book"
pagetitle = "Book"
description = "How to perform a booking"
icon = "fa-money"
weight = 3
alwaysopen = false
+++

{{< graphiql-script queries="[{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/31d4d32ea8e8bc8ab5d7bc3910df72c0/raw\",\"divname\":\"div_booking\"}]" >}}
{{< graphiql-styles >}}

The Book operation requests a reservation confirmation for the specified optionId retunred in Quote.

## Advanced criteria

In Query Variables, you must modify the optionRefId with the optionRefId value returned in the quote response and send the query with the other mandatory information.


Detail advanced criteria if it’s necessary
**auditTransactions:** Returns all the transactions exchanged with the supplier.
to send register to "true" and return provider traces to claim them
It would be good to "true" it in order to make these claims to supplier

## How to confirm a reservation

{{< graphiql-tags tag="div_booking" >}}
