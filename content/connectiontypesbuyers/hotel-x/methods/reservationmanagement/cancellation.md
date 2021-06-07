{
"title": "Cancellation",
"pagetitle": "Cancellation",
"description": "How to cancel a booking",
"icon": "fa-calendar-times-o",
"weight": 2,
"alwaysopen": false,
"default_ak": "8626cf56-e364-4fd1-4fe0-311e23ac6355",
"default_user": "",
"gists": [
    {
        "n":"By Reference",
        "g":"8f7d0537b788553113ecfe0fd91308ce",
        "o":["graphiql"],
        "u":"xsolano",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    },
    {
        "n":"By BookingID",
        "g":"928a838ee2775104f8211a1283bfa646",
        "o":["graphiql"],
        "u":"xsolano",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    }
        ]
}

Cancellation operation allows you to cancel a booking.

{{% alert theme="info" %}}NOTE: Cancellation always takes into account the day and time of the destination in order to calculate what cancellation policy should be applied. UTC time..{{% /alert %}}

- When the booking is cancelled, the details of the cancelled booking are returned with the following information:
- 
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

8f7d0537b788553113ecfe0fd91308ce
You can cancel bookings with the client reference or with the supplier reference.
/8f7d0537b788553113ecfe0fd91308ce

928a838ee2775104f8211a1283bfa646
Bear in mind that you will have to carry the bookingID received in the **book** response if you want to cancel with this query.
/928a838ee2775104f8211a1283bfa646

{{% /graphiql-tabs %}}

{{< graphiql-styles >}}
{{% graphiql-script-tabs %}}
