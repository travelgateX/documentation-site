+++
title= "Data Structure"
keywords= "common elements, elements, hotel"
search= "Hotel - Data Structure"
sidebar= "mydoc_sidebar"
permalink = "/docs/hotel/data-structure"
weight = 1
+++

The structure of the API specification follows a standard. This document intends to explain every aspect of this structure and their fields. 
You can also download the XSD file containing each and every data structures of the API from [here](/legacy/docs/hotel/storage/hotel.xsd)

You can read about what changes might and what changes might not cause an error, below:

* Changes that can cause an error:
  * Removing a field from XSD.
  * Modifying the type of field or attribute. For example, passing a string type to numeric.
  
* Changes that cannot cause an error:
  * Adding a new element or attribute.
  * Modifying the order of elements or attributes.

The integration will have the following methods:


| **Method**                | **Input**                   | **Output**                  | **Required** | **Description** |
| ------------------------- | --------------------------- | --------------------------- | ------------ | --------------- |
| AvailDestination Tree      | AvailDestination TreeRQ      | AvailDestination TreeRS      | No           | Returns a tree of available destinations. |
| Geographic DestinationTree | Geographic DestinationTreeRQ | Geographic DestinationTreeRS | Yes          | Returns a tree of supplier's destinations. |
| HotelList                 | HotelListRQ                 | HotelListRS                 | Yes          | Returns a list of available hotels. |
| Descriptive Info           | Descriptive InfoRQ           | Descriptive InfoRS           | Yes          | Retrieves information for current hotel such as photos, descriptions, amenities,etc as well as basic info (code,name, town, address, contact). |
| RoomList                  | RoomListRQ                  | RoomListRS                  | No           | Returns available room types. |
| MealPlanList              | MealPlanListRQ              | MealPlanListRS              | Yes          | Returns a list of available boards. |
| CategoryList              | CategoryListRQ              | CategoryListRS              | Yes  	       | Returns a list of available categories. |
| MarketList              | MarketListRQ              | MarketListRS              | No  	       | Returns a list of available markets. |
| Avail                     | AvailRQ                     | AvailRS                     | Yes          | Makes an availability request. |
| Valuation                 | ValuationRQ                 | ValuationRS                 | Yes          | Retrieves a booking quote (pre-book). |
| Reservation               | ReservationRQ               | ReservationRS               | Yes          | Makes a booking. |
| Cancel                    | CancelRQ                    | CancelRS                    | No           | Cancels a booking. |
| ReservationRead           | ReservationReadRQ           | ReservationReadRS           | No           | Retrieves booking details. |
| ReservationList           | ReservationListRQ           | ReservationListRS           | No           | Retrieves a list of bookings. |
| Runtime Configuration      | Runtime ConfigurationRQ      | Runtime ConfigurationRS      | Yes          |Retrieves the supplier’s run-time configuration. |
| MetaData       | MetaDataRQ       | MetaDataRS       | Yes          | Retrieves the supplier’s static configuration. |
| MetaData         | MetaDataRQ         |  MetaDataRS        | No           | Meta data information. |

Each request sent to  **service url** requires a node called *rqXML*. The current method's input object travels inside this node.


The data structure will always have common elements in all objects as well as
specific objects related to the operation

You can find full specification of each method at the [Hotel API Methods](https://docs.travelgatex.com/legacy/docs/hotel/methods/) page.