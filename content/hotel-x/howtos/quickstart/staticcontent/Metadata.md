{
"title": "Metadata",
"pagetitle": "Metadata",
"description": "Supplier restriction and configuration",
"icon": "fa-code",
"weight": 1,
"alwaysopen": false,
"default_user": "",
"gists": [
    {
        "n":"Entire metadata",
        "g":"3bcb4b18cfb0d2d6f0dc61138046fa39",
        "o":["graphiql"],
        "u":"zechao",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    },
    {
        "n":"Fields checked in search",
        "g":"961ae376289f0eb9b3c17dbca0b40175",
        "o":["graphiql"],
        "u":"zechao",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    }
 ]
}

The metadata query returns information about the metadata or restriction of supplier. In addition, the fields belows are used to verify the Search request input in order to avoid the unnecessary request to the supplier.

- **maxNumberHotels**: Maximum number of hotels that can be requested.
- **recommendedNumberHotels**: Recomended number of hotels that can be requested.
- **release**: Minimum days required in between booking date and checking date ( days in advance ). If the value is zero then there is no limitation.
- **minimumStay**: Minimum number of days required for booking. If the value is zero then there is no limitation.
- **maxStay**: Maximum number of days allowed for booking.
- **maxNumberRoomCandidates**: Maximum number of room candidates that can be requested in the same search request.
- **paxTypeRangeInRoomCandidates**: Contains information about the age restrictions of the guests in a room.
- **ageRange**: The age range used by the supplier.
- **maxPaxInRoomCandidates**: Maximum number paxs in same room that can be requested in the same search request.
- **maxPaxInAllRooms**: Maximum number of sum of paxs that can be requested in the same search request.
- **requiredRoomWithSamePaxConfiguration**: Indicates whether all room must have the same configuration, same ages or same number of paxs.




## Criteria
**Mandatory fields**  
- suppliers code -> List of suppliers codes for which you want to receive the metadata.  

## How to request

{{% graphiql-tabs %}}

{{% /graphiql-tabs %}}

{{< graphiql-styles >}}
{{% graphiql-script-tabs %}}

