+++
title = "Quote"
pagetitle = "Booking process - Quote"
description = "How to create a new Booking by calling the Book Mutation"
icon = "fa-calendar"
weight = 3
alwaysopen = false
+++

Quote is an operation used to assess and valuate the rate before the actual booking. It returns the same information as the Search response for a hotel rate with up-to-date price, along with additional information regarding the rate: rate breakdown and cancellation policies.

**NOTE:** Please, bear in mind that within the cancelPolicy structure response there is a field refundable. If that fields is filled with false it means that the room have 100% cancellation cost, so the room is not refundable.

Mandatory data to show at this step
Cancellation policies
Remarks

## Advanced criteria
Explain different parameters can be set up on the request (indicate which ones are mandatory)
optionRefId: Identifier of the option chosen in the search. Mandatory
language: Language to be used in request

## How to request 
Attach different use cases
