{
"title": "Search",
"pagetitle": "Search",
"description": "Search step",
"icon": "fa-search-plus",
"weight": 3,
"alwaysopen": false,
"default_ak": "64780338-49c8-4439-7c7d-d03c2033b145",
"default_user": "",
"gists": [
    {
        "n":"1 Room - 2 Adults",
        "g":"77c80792a415b1be6c92b474f2949d84",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }, 
    {
        "n":"1 Room - 2 Adults 1 Child",
        "g":"5ac8995ed02d876cb3cf87fcc47efd3a",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    },
    {
        "n":"2 Rooms - 2 Adults + 2 Adults",
        "g":"72e51e75ecf971c4e92b4227e88420df",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    },
    {
        "n":"2 Rooms - 2 Adults 1 Child + 2 Adults",
        "g":"12799fd0a67acb73f030b1f9eae10a4e",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    },
    {
        "n":"3 days minimmum stay",
        "g":"002160e4c2822635ef3b1a3c81b1d44d",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    },
    {
        "n":"Destination",
        "g":"a0370f6041d58b67bf1e32363a968abf",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }
    
        ]
}

Search is the first operation in the booking flow. It allows to check which available rooms there are for the requested hotels or for the hotels in the requested destination for a given range of dates and for a given pax distribution.

## Advanced criteria
It explains different parameters that can be set up in the request 
Mandatory

- CheckIn: check-in date for the booking. _Format: YYYY-MM-DD_
- CheckOut: check-out date for the booking. _Format YYYY-MM-DD_
- Hotels*: List of hotel codes 
- Destinations*: List of destination codes
- Occupancies: The occupancy you are requesting for each room.
  - For multi-room bookings, this array will contain multiple elements (rooms). For each room you should specify its own occupancy.

_* Hotels and Destinations parameters are exclusive between them_

## How to request
There are different ways to request a Search. Below are shown different examples for different casuistry:

{{% graphiql-tabs %}}

002160e4c2822635ef3b1a3c81b1d44d
In this availability case, you will not receive results due to the hotel's restriction of minimum stay. In this case, if you change the date range to 3 days or more, you will receive availability
/002160e4c2822635ef3b1a3c81b1d44d

{{% /graphiql-tabs %}}

{{< graphiql-styles >}}
{{% graphiql-script-tabs %}}

## Bear in mind

{{% alert theme="warning" %}}
Please, bear in mind that within the room structure response there is a **refundable** field. If that field is filled with _false_ it means that the room has 100% cancellation cost, so the room is not refundable.
If the field returns a _null value_ it means that the provider is not able to return this info at this step.
{{% /alert %}}
