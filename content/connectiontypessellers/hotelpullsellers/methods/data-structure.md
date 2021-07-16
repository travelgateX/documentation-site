+++
title= "Data Structure"
keywords= "common elements, elements, hotel"
search= "Hotel - Data Structure"
sidebar= "mydoc_sidebar"
permalink = "/docs/hotel/data-structure"
weight = 1
+++

The structure of the API specification follows a standard. This document intends to explain every aspect of this structure and their fields. 

The integration will have the following methods:


| **Booking Flow Method**                | **Input**                   | **Output**                  | **Required** | **Description** |
| ------------------------- | --------------------------- | --------------------------- | ------------ | --------------- |
| Avail                     | AvailRQ                     | AvailRS                     | Yes          | Makes an availability request to check which rooms are available for the requested hotels or for the hotels in the requested destination for a given range of dates and for a given pax distribution. |
| Valuation                 | ValuationRQ                 | ValuationRS                 | Yes          | Makes a quote of an option selected from availability response: updates price and shows cancellation policies. |
| Reservation               | ReservationRQ               | ReservationRS               | Yes          | Makes a booking. |
| Cancel                    | CancelRQ                    | CancelRS                    | No           | Cancels a booking. |
| ReservationRead           | ReservationReadRQ           | ReservationReadRS           | No           | Retrieves booking details. |
| ReservationList           | ReservationListRQ           | ReservationListRS           | No           | Retrieves a list of bookings. |

</br>

| **Static Content Method**                | **Input**                   | **Output**                  | **Required** | **Description** |
| ------------------------- | --------------------------- | --------------------------- | ------------ | --------------- |
| Configuration      | ConfigurationRQ      | ConfigurationRS      | Yes          |Retrieves the supplier’s configuration in order to build the activation form in our platform |
| Geographic DestinationTree | Geographic DestinationTreeRQ | Geographic DestinationTreeRS | Yes          | Returns a tree of supplier's destinations. |
| HotelList                 | HotelListRQ                 | HotelListRS                 | Yes          | Returns a list of available hotels. |
| Descriptive Info           | Descriptive InfoRQ           | Descriptive InfoRS           | Yes          | Retrieves information for current hotel such as photos, descriptions, amenities,etc as well as basic info (code,name, town, address, contact). |
| RoomList                  | RoomListRQ                  | RoomListRS                  | Yes           | Returns available room types. |
| MealPlanList              | MealPlanListRQ              | MealPlanListRS              | Yes          | Returns a list of available boards. |
| CategoryList              | CategoryListRQ              | CategoryListRS              | Yes  	       | Returns a list of available categories. |
| CurrencyList              | CurrencyListRQ              | CurrencyListRS              | No          | Returns a list of available currencies. |
| MarketList              | MarketListRQ              | MarketListRS              | No  	       | Returns a list of available markets. |
| MetaData       | MetaDataRQ       | MetaDataRS       | Yes          | Retrieves the supplier’s static configuration. |


The data structure will always have common elements in all objects as well as specific objects related to the operation

You can find full specification of each method at the [Hotel API Methods](/hotelpullsellers/methods/) page.
