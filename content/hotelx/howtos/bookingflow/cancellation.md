+++
title = "Cancellation"
pagetitle = "Booking process - Cancellation"
description = "How to cancel a booking"
icon = "fa-calendar-times-o"
weight = 7
alwaysopen = false
+++

{{< graphiql-script queries="[{\"apikey\":\"64780338-49c8-4439-7c7d-d03c2033b145\",\"gist\":\"https://gist.githubusercontent.com/tgx-bot/1b160cfcf47b1c4d1deada1a18ae98b6/raw\",\"divname\":\"div_cancellation\"}]" >}}
{{< graphiql-styles >}}

Cancellation operation that cancels the booking.
Which time zone applies for the cancellation policies?
NOTE: Cancellation always takes into account the day and time of the destination in order to calculate what cancellation policy should be applied.
UTC time

- When the booking is cancelled, the details of the cancelled booking are returned with the following information:
- The booking status: CANCELLED
- Cancellation fees if applicable
- Hotel, rooms and rates of the cancelled booking
- Holder name

## Advanced criteria
Explain different parameters can be set up on the request (indicate which ones are mandatory)

## How to cancel 
{{< graphiql-tags tag="div_cancellation" >}}

