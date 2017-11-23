+++
title = "Overview"
pagetitle = ""
description = "Plugins workflow execution"
icon = "fa-info-circle"
weight = 1
alwaysopen = false
+++

# Introduction

_Plugins_ are custom code, executed in [HotelX](/hotelx/) servers, that add or modify specific features. `Partner` can develop custom _plugins_, but in most cases, [HotelX](/hotelx/) offers enough basic _plugins_ to use.

# Flows

[HotelX](/hotelx/) _query_ or _mutation_ determine what _flow_ is executed. _Plugins_ can be executed in different _flows_: 

* [search](/hotelx/concepts/booking-flow#search)
* [quote](/hotelx/concepts/booking-flow#quote)
* [hotelBook](/hotelx/concepts/booking-flow#book)
* [hotelCancel](/hotelx/concepts/management-flow#cancel)

# Steps

_Step_ is the minium container where _plugins_ are executed **sequentially**.

| Step | When is executed |
| --- | --- | 
| _Request_ | _After_ `Buyer` requests message to [HotelX](/hotelx/).|  
| _Request Access_ | _Before_ send request to `Supplier` using `Access` and _after_ `Accesses` has been calculated.|
| _Response Option_ |_After_ `Supplier` responds  message. For every option returned.|
| _Response Access_ |_After_ all `Access` options has been responded.|
| _Response_ | _Before_ [HotelX](/hotelx/) responds message to to `Buyer`.|


# Plugin Types

[HotelX](/hotelx/) supports different plugin types: 

* [Pre Step](../processor): First execution on every _step_.
* [Hotel Map](../mapping): Hotel mapping codes.
* [Board Map](../mapping): Board mapping codes.
* [Room Map](../mapping): Room mapping codes.
* [Currency Conversion](../converter): Currency rate conversion. 
* [Markup](../markup): Markups to `supplier` price.
* [Aggregation](../aggregation): Aggregate multiple `supplier` options.
* [Post Step](../processor): Last execution on every _step_.


# Plugin Context Execution

Once _message_ enters on [HotelX](/hotelx/) it flows over different _flows_ and _steps_. That's why  _plugins_ are executed in different _contexts_.

_Context_ allows:

* Read objects involved in current _query_ and/or _mutations_.
* Read objects available in all [HotelX](/hotelx/) operations. 

With _context_ information developers can personalize _plugin_ features, more information about plugin development can be found [here](../development).

# Plugin Step Execution

[HotelX](/hotelx/) determine the order and [plugin types](#plugintypes) executed for each _step_.


| | **search** | **quote** | **hotelBook** | **hotelCancel** |
| --- | --- | --- | --- | --- |
| _Request_ | [Pre Step](../processor)<br>[Hotel Map](../mapping)<br>[Post Step](../processor)|[Pre Step](../processor)<br>[Post Step](../processor)|[Pre Step](../processor)<br>[Post Step](../processor)|[Pre Step](../processor) <br>[Post Step](../processor)|[Post Step](../processor)|[Pre Step](../processor) <br>[Post Step](../processor)|
| _Request Access_ | [Pre Step](../processor) <br>[Post Step](../processor) |[Pre Step](../processor) <br>[Post Step](../processor)|[Pre Step](../processor) <br>[Post Step](../processor)|[Pre Step](../processor) <br>[Post Step](../processor)|
| _Response Option_ |[Pre Step](../processor)<br>[Hotel Map](../mapping)<br>[Board Map](../mapping)<br>[Room Map](../mapping)<br>[Currency Conversion](../currency-conversion)<br>[Markup](../markup)<br>[Aggregation](../aggregation)<br>[Post Step](../processor)| |  | |
| _Response Access_ |[Pre Step](../processor)<br>[Post Step](../processor)|[Pre Step](../processor)<br>[Hotel Map](../mapping)<br>[Board Map](../mapping)<br>[Room Map](../mapping)<br>[Currency Conversion](../currency-conversion)<br>[Markup](../markup)<br>[Post Step](../processor)|[Pre Step](../processor)<br>[Hotel Map](../mapping)<br>[Board Map](../mapping)<br>[Room Map](../mapping)<br>[Currency Conversion](../currency-conversion)<br>[Post Step](../processor)| [Pre Step](../processor)<br>[Hotel Map](../mapping)<br>[Board Map](../mapping)<br>[Room Map](../mapping)<br>[Currency Conversion](../currency-conversion)<br>[Post Step](../processor)|
| _Response_ |[Pre Step](../processor)<br>[Aggregation](../aggregation)<br>[Post Step](../processor)|[Pre Step](../processor) <br>[Post Step](../processor)|[Pre Step](../processor) <br>[Post Step](../processor)|[Pre Step](../processor) <br>[Post Step](../processor)|


