---
title: Data Structure
keywords: activities, data structure
search: Activities - Data Structure
sidebar: mydoc_sidebar
permalink: /docs/activities/data-structure
---

The structure of the API specification follows a standard. This document
intends to explain every aspect of this structure and their fields.

The integration will have the following methods:



| **Method**		| **Input**		| **Output**		| **Required**	| **Description**		|
| --------------------- | --------------------- | --------------------- | ------------- | ----------------------------- |
| Search    		| SearchRQ   		| SearchRS   		| Yes  		| Gets destinations and events available |
| Territories		| TerritoriesRQ		| TerritoriesRS		| No   		| List of Destinations		|
| Avail     		| AvailRQ    		| AvailRS    		| Yes  		| Makes an availability call	|
| Valuation 		| ValuationRQ		| ValuationRS		| Yes  		| Makes a valuation for refresh ticket price (pre-book) |
| Reservation		| ReservationRQ		| ReservationRS		| Yes  		| Makes a booking		|
| ReservationRead	| ReservationReadRQ	| ReservationReadRS	| No    	| Information about one reservation |
| Cancel    		| CancelRQ   		| CancelRS   		| No   		| Cancel a reservation		|
| ReservationsList	| ReservationsListRQ	| ReservationsListRS	| No   		| List of Reservations		|

                       


Each request sent to the **service url** requires a node called rqXML .
Inside this node travels the current method's Input object.

The data structure will always have common elements in all objects and
the specific objects related to the operation



**Data structure content:**

1. [Common-Elements](/docs/activities/DSF/common-elements)
2. [Search](/docs/activities/DSF/search)
3. [Territories](/docs/activities/DSF/territories)
4. [Avail](/docs/activities/DSF/avail)
5. [Valuation](/docs/activities/DSF/valuation)
6. [Reservation](/docs/activities/DSF/reservation)
7. [ReservationRead](/docs/activities/DSF/reservation-read)
8. [ReservationList](/docs/activities/DSF/reservation-list)
9. [Cancel](/docs/activities/DSF/cancel)
10. [StaticConfiguration](/docs/activities/DSF/static-configuration)
11. [RunTimeConfiguration](/docs/activities/DSF/runtimeconfiguration)



