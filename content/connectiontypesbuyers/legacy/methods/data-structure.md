+++
title= "Data Structure"
keywords= "common elements, elements, hotel"
search= "Hotel - Data Structure"
sidebar= "mydoc_sidebar"
permalink = "/docs/hotel/data-structure"
weight = 1
+++

The structure of the API specification follows a standard. This document intends to explain every aspect of this structure and their fields. 

You can read about what changes might and what changes might not cause an error, below:

* Changes that can cause an error:
  * Removing a field from XSD.
  * Modifying the type of field or attribute. For example, passing a string type to numeric.
  
* Changes that cannot cause an error:
  * Adding a new element or attribute.
  * Modifying the order of elements or attributes.

The integration will have the following methods:


| **Method**                | **Input**                   | **Output**                  | **Description** |
| ------------------------- | --------------------------- | --------------------------- | --------------- |
| Geographic DestinationTree | Geographic DestinationTreeRQ | Geographic DestinationTreeRS | Returns a tree of supplier's destinations. |
| HotelList                 | HotelListRQ                 | HotelListRS                 | Returns a list of available hotels. |
| Descriptive Info           | Descriptive InfoRQ           | Descriptive InfoRS           | Retrieves information for current hotel such as photos, descriptions, amenities,etc as well as basic info (code,name, town, address, contact). |
| RoomList                  | RoomListRQ                  | RoomListRS                  | Returns available room types. |
| MealPlanList              | MealPlanListRQ              | MealPlanListRS              | Returns a list of available boards. |
| CategoryList              | CategoryListRQ              | CategoryListRS              | Returns a list of available categories. |
| MarketList              | MarketListRQ              | MarketListRS              | Returns a list of available markets. |
| Avail                     | AvailRQ                     | AvailRS                     | Makes an availability request. |
| Valuation                 | ValuationRQ                 | ValuationRS                 | Retrieves a booking quote (pre-book). |
| Reservation               | ReservationRQ               | ReservationRS               | Makes a booking. |
| Cancel                    | CancelRQ                    | CancelRS                    | Cancels a booking. |
| ReservationRead           | ReservationReadRQ           | ReservationReadRS           | Retrieves booking details. |
| ReservationList           | ReservationListRQ           | ReservationListRS           | Retrieves a list of bookings. |
| Runtime Configuration      | Runtime ConfigurationRQ      | Runtime ConfigurationRS      |Retrieves the supplier’s run-time configuration. |
| Static Configuration [(Deprecated)](https://knowledge.travelgatex.com/what-is-the-difference-between-staticconfiguration-legacy-and-metadata-legacy)       | StaticConfigurationRQ       | StaticConfigurationRS       | Retrieves the supplier’s static configuration. |
| MetaData         | MetaDataRQ         |  MetaDataRS        | Meta data information. |

Each request sent to  **service url** requires a node called *rqXML*. The current methods input object travels inside this node.


The data structure will always have common elements in all objects as well as
specific objects related to the operation

You can find full specification of each method at the [Hotel API Methods](https://docs.travelgatex.com/connectiontypesbuyers/legacy/methods/messages/) page.
