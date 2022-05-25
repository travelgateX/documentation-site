{
"title": "Booking List",
"pagetitle": "Booking List",
"description": "How to request a list of your bookings via TGX",
"icon": "fa-list",
"weight": 1,
"alwaysopen": false,
"default_ak": "8626cf56-e364-4fd1-4fe0-311e23ac6355",
"default_user": "",
"gists": [
    {
        "n":"By Dates",
        "g":"310e5aab39ae09ddb5ba06cbaae8bcb6",
        "o":["graphiql"],
        "u":"xsolano",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    }, 
    {
        "n":"By Reference",
        "g":"cca5c85b0cd1be29f86a67ecf38bb75a",
        "o":["graphiql"],
        "u":"xsolano",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    },
    {
        "n":"By BookingID",
        "g":"af8923db89312e8f2cd85ed063b2fc15",
        "o":["graphiql"],
        "u":"xsolano",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    }
        ]
}

The Booking List operation allows to retrieve a booking (or bookings) with all its details from the booking reference locator.
The main information returned for each booking in the list is as follows:

* Booking reference

* Booking holder

* Booking pax

* Hotel, rooms and boards confirmed

* Booking rates

## Advanced criteria
There are three different types of booking search:

* By reference

* By dates

* By bookingID

## How to request
{{% graphiql-tabs %}}

cca5c85b0cd1be29f86a67ecf38bb75a
You can ask for bookings by client reference or by supplier reference.
/cca5c85b0cd1be29f86a67ecf38bb75a

af8923db89312e8f2cd85ed063b2fc15
Bear in mind that you will have to carry the bookingID recieved in the **book** response if you want to retrieve with this query.
/af8923db89312e8f2cd85ed063b2fc15

{{% /graphiql-tabs %}}

{{< graphiql-styles >}}
{{% graphiql-script-tabs %}}

## Bear in mind
{{% alert theme="warning" %}}
_Remember that you can choose the information you want displayed

**Reference:** To display client or supplier booking reference

**Status:** To display the booking status

If you want to ask for one booking, you can send the client/supplier booking reference on the HotelCriteriaBooking
{{% /alert %}}
