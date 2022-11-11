{
"title": "Amendments",
"pagetitle": "Amendments",
"description": "How to amend a booking",
"icon": "fa-calendar-times-o",
"weight": 2,
"alwaysopen": false,
"default_ak": "8626cf56-e364-4fd1-4fe0-311e23ac6355",
"default_user": ""
}

The amendment operations allow you to amend different aspects of a booking.

There are currently four amendment operations available:

* Amend Board: allows to amend the board of a booking.
* Amend Dates: allows to amend the checkin and/or the checkout of a booking.
* Amend Paxes: allows to amend the paxes of a booking.
* Amend Remarks: allows to add a special request (remark) on a booking.


Each amendment type must be performend in two steps:

* Query: simulates the amendment
* Mutation: commits the amendment

    Both steps return the details of the amendment with the following information

    - The booking detail with the amendment applied
    - Amendment fees if applicable
    - AmendmentID (only returned in the query response)

## Advanced criteria
You can perform the query (simulation) of the amendment:

* sending all the booking information (references, dates, hotel code)
* or sending the bookingID got in the booking flow

You can perform the mutation (commit) of the amendment sending the amendmentID received in the previous response.

## How to amend
Please, see the Schema through our [API playground](https://api.travelgatex.com) for your reference.

