+++
title = "Overview"
pagetitle = ""
description = "ChannelX Information"
icon = "fa-info-circle"
weight = 1
alwaysopen = false
+++
Channel-X extracts the product loaded by Channel Managers into our *Inventory* system and sends it to a third partner, normally an *OTA*. As a Buyer, you will have the option of loading all the product into your system by selecting the *Full Copy* tab in *Inventory*'s extranet, having the possibility to only select the hotels you are interested in copying. Also, each update the Channel Manager does, will be notified in a smaller product request, as you will only receive information that has changed. This is due to the ability of Channel-X to detect what information has changed and which is duplicated.

The connection with Channel Managers through TravelgateX has a previous step where the Buyer, using the [Inventory](https://docs.travelgatex.com/inventory-x/) extranet, configures the SetUp of the hotels, rates and rooms contracted with the hoteliers so the Channel Manager can map all this information and load availability and prices for you.

{{< figure src="/images/channelx_diagram.png#center" attr="" >}}

## What can I receive

**Delta:** will keep information up to date, sending the different updates that the hotels can have (prices, availability, inventory). Its main use is to receive real time changes in order to have the product up to date.

**FullCopy:** sends a complete copy of the product of a hotel or a bunch of them. Its main use is to get a full refresh of the product in case something happens (data base dropped, server down for a period of time...) or simply as a precaution measure.

Once you have received the first element of the Full Copy, please bear in mind that you will have to drop the loaded information, overwrite it with all the incoming information for that hotel or do a proper merge with the changing information.


## How it works
ChannelX is defined by 3 main parts. Each one has its own functionality and helps to define the global flow of the service.

- **Product to service:** every time a message arrives to the *Inventory* service (either inventory notification, availability load, price load...) and it belongs to a *Channel-X* relation, the message will be sent to this service. At first, this message will be converted from *Inventory* API to an own *Channel-X* object. Once we have this, the message is sent to a storage database.

- **Aggregation of the product:** this process will be based on reading each one of the messages stored into application memory. Each of them will be added to a final message structure which will get the product with the final changes. In other words, this process aggregates the different changes received in a period of time and sends one unique *Channel-X* message. With this, we help the system to reduce message workload, compacting several messages into one in a period of time. 

- **Product Delivery:** once the compacted message is created, application gets ready to send it to the Client. 

## What should I expect from

Channel-X API has three main methods/messages:

### 1. HotelRatePlanInventoryNotif

Each element can have one of these three states: 'New', 'Delta', 'Remove', each one will be indicated in its correspondent tag.

* **New:** it means the element was not added before. You should add the element in your system with the information provided.
* **Delta (Edit):** it means the element was created before but it has been edited. The element should be already created in your system and you should change the information of it with the new one. *Note:* here you will get all the information of the element, as we need to provide it, but it is not extrictly necessary that all of this info has changed, it could only change a part of it. You can override all the information already loaded for that specific element and reload it with the new one or have control of what has changed.
* **Remove:** it means the element has been removed. You should delete the element in your system and all its dependences. When deleting an element (Hotel, rate, derived rate or room), all the information you will receive about the element in the request is the code. If this happens, you should remove from your system all the elements that are depending on the one to delete.

### 2. HotelAvailNotif

It loads availability and conditions for the different elements. No rate information will be returned except code.

### 3. HotelRatePlanNotif

It loads prices and supplements for the different elements. No rate information will be returned except Code, currency and status.

## Things to keep in mind

- Our system works with up to 3 types of prices: per room, per occupancy and per standard occupancy. Although it is unusual that a channel works with more than one, it can happen. If this is the case, the 3 price types can coexist and the system should always return the lowest one at availability response. 
- Once conditions are loaded they cannot be deleted, they can only modified by sending same dates with different values.
- If you do not get information for a certain range of dates that you got previously loaded in the system, do not overwrite them, as this means these days conditions that don't appear in the request have not changed. 


