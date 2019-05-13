---
title: Data Structure
keywords: transfers, data structure
search: Transfers - Data Structure 
sidebar: mydoc_sidebar
permalink: /docs/transfers/data-structure
---

The structure of the API specification follows a standard. This document
intends to explain every aspect of this structure and their fields. The
integration will have the following methods:

 

| **Method**		| **Input**		| **Output**		|  **Required**	| **Description**				| **Endpoint**					|
| --------------------- | --------------------- | --------------------- | ------------- | --------------------------------------------- | --------------------------------------------- |
| Availability		| AvailabilityRQ	| AvailabilityRS	| Yes		| Makes an availability search   		| Transfers Booking Endpoint                    |
| RateRule		| RateRuleRQ		| RateRuleRS		| Yes 		| Makes a pre-booking      			| Transfers Booking Endpoint			|
| Book    		| BookRQ   		| BookRS   		| Yes 		| Creates a booking        			| Transfers Booking Endpoint			|
| Retrieve Booking	| Retrieve BookingRQ	| Retrieve BookingRS	| No  		| Retrieves Booking details			| Transfers Booking Endpoint			|
| Cance lBooking		| Cancel BookingRQ	| Cancel BookingRS	| No  		| Cancels a booking        			| Transfers Booking Endpoint			|
| Destinations Tree	| Destinations TreeRQ	| Destinations TreeRS	| Yes 		| Gets a hierarchical list of destinations	| Transfers Booking Endpoint			|
| HotelList		| HotelListRQ		| HotelListRS		| No  		| Gets a list of the hotels with a basic information | Transfers Booking Endpoint		|
| GetRates		| GetRatesRQ		| GetRatesRS		| No  		| Gets a list of the rates with a basic information | Transfers Booking Endpoint		|
| GetSupplements	| Get SupplementsRQ	| Get SupplementsRS	| No  		| Gets a list of the supplements with a basic information | Transfers Booking Endpoint		|
| GetSupplier RateTransfers Type | Getsupplier RateTransfers TypeRQ | Getsupplier RateTransfers TypeRS | No | Gets a list of the types of suppliers transfers rates with a basicinformation | Transfers Booking Endpoint |
| GetSupplier TransfersType | GetSupplier TransfersTypeRQ | GetSupplier TransfersTypeRS | No | Gets a list of the suppliers transfers types with a basic information | Transfers Booking Endpoint |
| GetTransfers Types  	| GetTransfers TypesRQ	| GetTransfers TypesRQ	| No  		| Gets a list of the transfers types with a basic information | Transfers Booking Endpoint	|
| GetVehicles     	| GetVehiclesRQ		| GetVehiclesRS		| No  		| Gets a list of the vehicles with a basic information | Transfers Booking Endpoint		|
                             


Each request sent to the **service url** requires a node called rqXML .
Inside this node travels the current method's Input object.

The data structure will always have common elements in all objects and
the specific objects related to the operation.



**Data structure content:**

1. [Common-Elements](/docs/transfers/DSF/common-elements)
2. [Avail](/docs/transfers/DSF/avail)
3. [Rate Rule](/docs/transfers/DSF/rate-rule)
4. [Booking](/docs/transfers/DSF/reservation)
5. [Retrieve Booking](/docs/transfers/DSF/retrieve-booking)
6. [Cancel Booking](/docs/transfers/DSF/cancel-booking)
7. [DestinationTree](/docs/transfers/DSF/destionationtree)
8. [HotelList](/docs/transfers/DSF/hotel-list)
9. [GetRates](/docs/transfers/DSF/GetRates)
10. [GetSupplements](/docs/transfers/DSF/GetSupplements)
11. [GetSupplierRateTransferTypes](/docs/transfers/DSF/GetSupplierRateTransfersTypes)
12. [GetSupplierTransferTypes](/docs/transfers/DSF/GetSupplierTransferTypes)
13. [GetTransferTypes](/docs/transfers/DSF/GetTransferTypes)
14. [GetVehicles](/docs/transfers/DSF/GetVehicles)





