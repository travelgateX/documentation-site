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
        "g":"3cdf31ad2da2f1950338a14193e76ab2",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    }, 
    {
        "n":"1 Room - 2 Adults 1 Child",
        "g":"8be4328a99cd4310f58418f5131a038c",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    },
    {
        "n":"2 Rooms - 2 Adults + 2 Adults",
        "g":"eee8e0b4cf1297803eb6e030c58b208f",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    },
    {
        "n":"2 Rooms - 2 Adults 1 Child + 2 Adults",
        "g":"a356ad77fadf8231f69c6515ef2317b4",
        "o":["graphiql"],
        "u":"tgx-bot",
        "ak":"8626cf56-e364-4fd1-4fe0-311e23ac6355"
    }
 ]
}


Search is the first step in our booking flow. The goal is to check availability in the date range and pax specified for the requested hotels or for the hotels in the  destination requested. The call can search  one or more sellers' accesses. It returns a list of available options according to your search criteria.

## Advanced criteria
There are  different parameters that can be set up in the request. Below are the mandatory parameters: 

- CheckIn: check-in date for the booking. _Format: YYYY-MM-DD_
- CheckOut: check-out date for the booking. _Format YYYY-MM-DD_
- Hotels: List of hotel codes 
- Occupancies: The occupancy you are requesting for each room.
  - For multi-room bookings, this array will contain multiple elements (rooms). You will  need to detail the occupancy for each room requested.

## FilterSearch
These filters can be used to accurate the response to your willingness.
The possible filters are:

- By access: It is possible to indicate what accesses to use (includes) or excludes any of yours configured acccesses. Only one list can be specified (include or exclude lists). Using the access filter our system will only return options of those selected accesses.
- By raterule:  It is possible to filter the options returned by the suppliers depending on what raterules you want to return or exclude: see our [FAQ](https://knowledge.travelgatex.com/which-are-the-possible-filters-in-the-search-request) for more information.
- By status: It is possible to filter the options returned by the suppliers, filtering those status you may or not be excluding or including options with the selected status (possible status are OK and RQ).

## How to request
There are different ways to perform a search request. Below are shown different examples for different scenarios:

{{% graphiql-tabs %}}

{{% /graphiql-tabs %}}

{{< graphiql-styles >}}
{{% graphiql-script-tabs %}}

## Important Info

{{% alert theme="warning" %}}
Please bear in mind that in the room structure response there is a **refundable** field. If that field is set to _false_, it means that the room has 100% cancellation cost, in other words, the room is NON-REFUNDABLE.
If the field returns a _null value_,  it means that the seller is not able to return this info at this step. Some sellers do not return cancellation policies in availabilit. You can find out the specifities of each seller in their metadata.
{{% /alert %}}
