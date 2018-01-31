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

### Context

_Context_ is the way codes are formed. Every _platform_ can manage its own contexts or reuse existing ones.  Different _sellers_ and _buyers_ can manage the same codes _context_. For example [SmyRooms](https://www.smyrooms.com) supplier uses **SMY** contexts.

_Context_ apply to:

* Hotel Codes
* Board Codes
* Room Codes

With the built-in solution you will be able to choose the context that you wish to use when requesting an [HotelX](/hotelx/) operation. This _context_ will be used in order to [map](/hotelx/plugins/mappings) with other _suppliers_ contexts.

We recommend using the biggest _context_ possible or using your **own context**, so all _supplier_ mappings can be resolved.
