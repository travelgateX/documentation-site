+++
title = "Book"
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

{{% alert theme="info" %}} When making a booking, you get  the **Book status** in the response of our API. There are 4 different status: 
***OK***:The reservation was completed with no problems.
***ON_REQUEST***: The reservation was completed but the product is still not available, so the reservation goes into a waiting list. It is the client’s responsibility to check if the booking is OK.
***UNKNOWN***: The reservation process through TGX was completed but due to a supplier error or a timeout, the reservation status is unknown. It is the client’s responsibility to check if the booking is OK. 
***PENDING_COMMIT***: The payment has been confirmed in provider's side, but is necessary make a commit in order to confirm the reservation.  .{{% /alert %}}



Detail advanced criteria if it’s necessary
**auditTransactions:** Returns all the transactions exchanged with the supplier.
to send register to "true" and return provider traces to claim them
It would be good to "true" it in order to make these claims to supplier

## How to confirm a reservation

{{< graphiql-tags tag="div_booking" >}}
