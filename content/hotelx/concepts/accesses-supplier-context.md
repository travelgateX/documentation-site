+++
title = "Access, Supplier and Context"
pagetitle = ""
description = "Learn about Core Entities used in TravelgateX"
weight = 1
alwaysopen = false
+++

On this page you will learn more about Core Entities used in TravelgateX.

### Supplier

Product segmentation over a _provider_ API implementation. _Supplier_ codes are uniques over all TravelgateX organizations.

### Access

Configuration used when interacting with a _supplier_, which includes:

* URLs 

* Credentials 

* Markets 

* Rate Types 

* Specific _supplier_ settings 

### Client

_Client_ codes are unique over all TravelgateX organizations, like supplier codes. This codes are used for to identify who is doing the request and this client has a configuration assigned to it. If you want to read more about settings go [HotelX settings](#_ngp49vy37y6b).

### Context

_Context_ is the way codes are formed. Every platform can manage its own contexts or reuse existing ones. Different sellers and buyers can manage the same codes context. For example [SmyRooms](https://www.smyrooms.com/) supplier uses SMY contexts.

Context apply to:

* Hotel Codes 

* Board Codes 

* Room Codes 

With the built-in solution you will be able to choose the context that you wish to use when requesting an [HotelX](/hotelx/) operation. This context will be used in order to [map](/hotelx/plugins/mappings) with other suppliers contexts.

We recommend using the biggest _context_ possible or using your own context, so all supplier mappings can be resolved.
