---
title: Ferries Data Structure
keywords: transportation, ferries data structure
search: Transportation - Ferries Data Structure
sidebar: mydoc_sidebar
permalink: /docs/transportation/ferries
---

The structure of the API specification follows a standard. This document
intends to explain every aspect of this structure and their fields.



The integration will have the following methods:



| **Method**			| **Input**			| **Output**			| **Required** | **Description**		|
| ----------------------------- | ----------------------------- | ----------------------------- | ------------ | ------------------------------ |
| Avail         		| AvailabilityRQ		| AvailabilityRS		| Yes          | Makes a availability call	|
| Valuation     		| ValuationRQ   		| ValuationRS   		| Yes          | Makes a pre-booking		|
| Reservation   		| ReservationRQ 		| ReservationRS 		| Yes          | Makes a booking		|
| Routes        		| RoutesRQ      		| RoutesRS      		| Yes          | Gets a static routes list	|
| RetrieveReservation		| RetrieveReservation RQ	| RetrieveReservation RS	| No           | Gets the details of a single booking |
| RetrieveReservation List	| RetrieveReservation ListRQ	| RetrieveReservation ListRS 	| No           | Gets a list of bookings	|
| Cancelation   		| CancellationRQ		| CancellationRS 		| No           | Cancels a booking		|



Each request sent to the **service url** requires a node called rqXML .
Inside this node travels the current method's Input object.



The data structure will always have common elements in all objects and
the specific objects related to the operation



**Data structure content:**

1. [Common-Elements](/legacy/docs/transportation/ferries/common-elements)
2. [Valuation](/legacy/docs/transportation/ferries/Valuation)
3. [Avail](/legacy/docs/transportation/ferries/avail)
4. [Valuation](/legacy/docs/transportation/ferries/valuation)
5. [Reservation](/legacy/docs/transportation/ferries/reservation)
6. [Routes](/legacy/docs/transportation/ferries/ferries/routes)
7. [RetrieveReservation](/legacy/docs/transportation/ferries/retrieveReservation)
8. [RetrieveReservationList](/legacy/docs/transportation/ferries/retrieveReservationList)
9. [Cancellation](/legacy/docs/transportation/ferries/cancel)
10. [Errors](/legacy/docs/transportation/ferries/error)
