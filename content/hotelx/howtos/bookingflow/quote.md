+++
title = "Quote"
pagetitle = "Booking process - Quote"
description = "How to valuate an option"
icon = "fa-exchange"
weight = 4
alwaysopen = false
+++

Quote is an operation used to assess and valuate the rate before the actual booking. It returns the same information as the Search response for a hotel rate with up-to-date price, along with additional information regarding the rate: rate breakdown and cancellation policies.

## Advanced criteria
Explain different parameters can be set up on the request (indicate which ones are mandatory)

- **optionRefId**: Identifier of the option chosen in the search. Mandatory
- **language**: Language to be used in request

## How to request 
Attach __different__ use cases

- 1 room
- 2 rooms

## Beard in mind

{{% alert theme="danger" %}}
Please, beard in mind that ther is some **mandatory data** to show at this step:

-  <u>__Cancellation policies__</u>: _Within the cancelPolicy structure response there is a **refundable** field. If that fields is filled with false it means that the room have 100% cancellation cost, so the room is not refundable._
-  <u>__Remarks__</u>
-  <u>__Taxes__</u>
{{% /alert %}}
