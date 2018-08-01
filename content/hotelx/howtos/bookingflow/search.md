+++
title = "Search"
pagetitle = "Booking process - Search"
description = "Description about how Search step works"
icon = "fa-calendar"
weight = 2
alwaysopen = false
+++

Search is the first operation in the booking flow. It allows to check which available rooms there are for the requested hotels or for the hotels in the requested destination for a given range of dates and for a given pax distribution.

**NOTE:** Please, bear in mind that within the room structure response there is a field refundable. If that fields is filled with false it means that the room have 100% cancellation cost, so the room is not refundable.
If the field returns a null value it means that the provider is not able to return this info at this step.


## Advanced criteria

Mandatory
- CheckIn: check-in date for booking. Format: YYYY-MM-DD
- CheckOut: check-out date for booking. Format YYYY-MM-DD
- Hotels*: List of hotel codes 
- Destinations*. List of destination codes
- Occupancies: The occupancy you want to ask for each room.
- For multi-room bookings, this array will contain multiple elements (rooms). For each room you have to specify its own occupancy.

_* Hotels and Destinations parametres are excludent between them_

## How to request

There is different ways to request a Search. Below is shown different examples for different casuistry.
- Hotel avail
- Destination avail
Pax distribution
- 1 room
  - 2 adults
  - 2 adults + 1 child
  - 2 rooms
  - 4 adults (2 adults per room)
  - 4 adults + 1 child (room 1: 2 ad + 1ch, room 2: 2 adults)
- With cancellation policies

_Non availability searches_
- Release
- Minimum stay
- Stop sales
