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

1. [Ferries](/docs/transportation/ferries)
2. [Common-Elements](/docs/transportation/DSF/ferries/common-elements)
3. [Valuation](/docs/hotel/DSF/Valuation)
4. [Avail](/docs/transportation/DSF/ferries/avail)
5. [Valuation](/docs/transportation/DSF/ferries/valuation)
6. [Reservation](/docs/transportation/DSF/ferries/reservation)
7. [Routes](/docs/transportation/DSF/ferries/routes)
8. [RetrieveReservation](/docs/transportation/DSF/ferries/retrieveReservation)
9. [RetrieveReservationList](/docs/transportation/DSF/ferries/retrieveReservationList)
10. [Cancellation](/docs/transportation/DSF/ferries/cancel)
