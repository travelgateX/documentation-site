{
"title": "Cancellation",
"pagetitle": "Cancellation",
"description": "How to cancel a booking",
"icon": "fa-calendar-times-o",
"weight": 2,
"alwaysopen": false,
"default_ak": "64780338-49c8-4439-7c7d-d03c2033b145",
"default_user": "",
"gists": [
    {
        "n":"By Reference",
        "g":"54474f0b475a0cb064de7cfea1124870",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    },
    {
        "n":"By BookingID",
        "g":"4c76ce49bd49bbac4fb95373139d4a15",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }
        ]
}

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
There are two different types of cancellation:
* By reference
* By bookingID

## How to cancel 
{{% graphiql-tabs %}}

{{% /graphiql-tabs %}}

{{< graphiql-styles >}}
{{% graphiql-script-tabs %}}