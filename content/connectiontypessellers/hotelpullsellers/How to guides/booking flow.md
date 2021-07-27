+++
title= "Booking flow"
keywords= "common elements, elements, hotel"
search= "Hotel - Bookinmg flow"
sidebar= "mydoc_sidebar"
permalink = "/docs/hotel/data-structure"
weight = 2
hidden = false
icon = "fa-book"
+++

**Booking flow**

A basic booking flow for buyers using TravelgateX system consists of 3 steps:

- [Availability](/hotelpullsellers/methods/messages/booking-flow-methods/avail/): It allows to check which rooms are available for the requested hotels or for the hotels in the requested destination for a given range of dates and for a given pax distribution.
- [Valuation](/hotelpullsellers/methods/messages/booking-flow-methods/valuation/) (or quote): It's an operation used to assess and valuate the selected option rate before the actual booking. It returns the up-to-date price and cancellation policies for the option selected from the availability response.
- [Reservation](/hotelpullsellers/methods/messages/booking-flow-methods/reservation/) (or booking): The Book operation requests a reservation confirmation for option valuated.

To be able to do a booking through TravelgateX connectivities the 3 steps are mandatory.

TravelgateX API also allows other requests such as [Cancel](/hotelpullsellers/methods/messages/booking-flow-methods/cancel/), [ReservationRead](/hotelpullsellers/methods/messages/booking-flow-methods/reservationread/) and [ReservationList](/hotelpullsellers/methods/messages/booking-flow-methods/reservationlist/), but this methods are not mandatory for a connectivity.

You can find a brief definition of the methods to implement, and if they are mandatory for the connectivity or not, in our [Data Structure page](/hotelpullsellers/methods/data-structure/).