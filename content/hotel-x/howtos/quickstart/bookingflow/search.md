{
"title": "Search",
"pagetitle": "Search",
"description": "How to check availability",
"icon": "fa-search-plus",
"weight": 1,
"alwaysopen": false,
"default_user": "",
"gists": [
    {
        "n":"1 Room - 2 Adults",
        "g":"765fa8dbddd6a17571feb012f9c876bc",
        "o":["graphiql"],
        "u":"rubencaballero",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    }, 
    {
        "n":"1 Room - 2 Adults 1 Child",
        "g":"16c1401dff3146bd4685c1a018dce96a",
        "o":["graphiql"],
        "u":"rubencaballero",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    },
    {
        "n":"2 Rooms - 2 Adults + 2 Adults",
        "g":"b5db36ad7084adbdf100c9b4491d7d43",
        "o":["graphiql"],
        "u":"rubencaballero",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    },
    {
        "n":"2 Rooms - 2 Adults 1 Child + 2 Adults",
        "g":"f8a762bb1efc34f2ff61dd7929d7aa10",
        "o":["graphiql"],
        "u":"rubencaballero",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    }
 ]
}


Search is the first operation in the booking flow. It allows to check which available rooms there are for the requested hotels or for the hotels in the requested destination for a given range of dates and for a given pax distribution. The operation could search over one or more sellers accesses.

Depending seller, search operations involves use supplier's cache.

It returns a list of available options according to your search criteria.

## Advanced criteria
There are  different parameters that can be set up in the request 
Mandatory

- CheckIn: check-in date for the booking. _Format: YYYY-MM-DD_
- CheckOut: check-out date for the booking. _Format YYYY-MM-DD_
- Hotels: List of hotel codes 
- Occupancies: The occupancy you are requesting for each room.
  - For multi-room bookings, this array will contain multiple elements (rooms). For each room you should specify its own occupancy.

## How to request
There are different ways to request a Search. Below are shown different examples for different scenarios:

{{% graphiql-tabs %}}

{{% /graphiql-tabs %}}

{{< graphiql-styles >}}
{{% graphiql-script-tabs %}}

## Bear in mind

{{% alert theme="warning" %}}
Please, bear in mind that within the room structure response there is a **refundable** field. If that field is filled with _false_ it means that the room has 100% cancellation cost, so the room is not refundable.
If the field returns a _null value_ it means that the provider is not able to return this info at this step.
{{% /alert %}}
