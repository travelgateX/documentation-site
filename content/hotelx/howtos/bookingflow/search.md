{
"title":"Search",
"pagetitle":"Search",
"description":"Search step",
"icon":"fa-search-plus",
"weight":3,
"alwaysopen":false,
"gists": [
    {
        "n":"1 Room - 2 Adults",
        "g":"6972ecae51e849fe8c49305bf0032dfe",
        "o":["graphiql", "curl"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }, 
    {
        "n":"1 Room - 2 Adults + 1 child",
        "g":"533a8e1259e5245a4c3f590964ec506d",
        "o":["curl","graphiql"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }, 
    {
        "n":"Two",
        "g":"b4e691b2b1567c0a80f5926b833170e1",
        "o":["graphiql", "curl"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }, 
    {
        "n":"Three",
        "g":"bbbb043c0cdfe1adb33a897f69a04e2f",
        "o":["graphiql", "curl"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }, 
    {
        "n":"Four",
        "g":"034dcbeb8affb2c4875b2046ea385c0d",
        "o":["graphiql", "curl"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }, 
    {
        "n":"Five",
        "g":"36e1ade6d5eb2a074dc6cb1141ac2136",
        "o":["graphiql", "curl"],
        "u":"tgx-bot",
        "ak":"64780338-49c8-4439-7c7d-d03c2033b145"
    }
        ]
}

[comment]: <> (Cargamos la librería de GraphiQL para mostrar los ejemplos)
{{% graphiql-tabs %}}
{{% /graphiql-tabs %}}

{{< graphiql-styles >}}

Search is the first operation in the booking flow. It allows to check which available rooms there are for the requested hotels or for the hotels in the requested destination for a given range of dates and for a given pax distribution.

## Advanced criteria
Explain different parameters can be set up on the request 
Mandatory

- CheckIn: check-in date for booking. _Format: YYYY-MM-DD_
- CheckOut: check-out date for booking. _Format YYYY-MM-DD_
- Hotels*: List of hotel codes 
- Destinations*: List of destination codes
- Occupancies: The occupancy you want to ask for each room.
  - For multi-room bookings, this array will contain multiple elements (rooms). For each room you have to specify its own occupancy.

_* Hotels and Destinations parametres are excludent between them_

## How to request
There are different ways to request a Search. Below is shown different examples for different casuistry.

- Hotel avail
- Destination avail

- Pax distribution
  - 1 room
      - 2 adults
      - 2 adults + 1 child
  - 2 rooms
      - 4 adults (2 adults per room)
      - 4 adults + 1 child (room 1: 2 ad + 1ch, room 2: 2 adults)
- With cancellation policies

- **Non availability searches**
  - Release
  - Minimum stay
  - Stop sales


## Beard in mind

{{% alert theme="warning" %}}
Please, bear in mind that within the room structure response there is a **refundable** field. If that field is filled with _false_ it means that the room have 100% cancellation cost, so the room is not refundable.
If the field returns a _null value_ it means that the provider is not able to return this info at this step.
{{% /alert %}}

{{% graphiql-script-tabs %}}
