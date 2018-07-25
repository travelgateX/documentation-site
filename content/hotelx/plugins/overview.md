+++
title = "Overview"
pagetitle = "Plugins Workflow"
description = "Plugins Overview. What they are, when they get executed and how to execute them."
icon = "fa-info-circle"
weight = 1
alwaysopen = false
+++

### Introduction

_Plugins_ are custom code, executed in [HotelX](/hotelx/) servers, that add or modify specific functionalities. Any `Partner` can develop custom _Plugins_, nevertheless HotelX, [HotelX](/hotelx/) has developed many _Plugins_ available for anyone to use out of the box.

### Flows

[HotelX](/hotelx/) _query_ or _mutation_ determine what _flow_ is executed. _Plugins_ can be executed in different `Queries` or `Mutations`:

<!-- * [search](/hotelx/concepts/booking-flow#search)
* [quote](/hotelx/concepts/booking-flow#quote)
* [hotelBook](/hotelx/concepts/booking-flow#book)
* [hotelCancel](/hotelx/concepts/management-flow#cancel) -->
* Search
* Quote
* Book
* Cancel

### Steps

_Step_ is the minium container where _plugins_ are executed **sequentially**.

| Step | When is executed |
| --- | --- |
| _Request_ | _After_ `Client` requests message to [HotelX](/hotelx/).|  
| _Request Access_ | _Before_ send request to `Supplier` using `Access` and _after_ `Accesses` has been calculated.|
| _Response Option_ |_After_ `Supplier` responds  message. For every option returned.|
| _Response Access_ |_After_ all `Access` options has been responded.|
| _Response_ | _Before_ [HotelX](/hotelx/) responds message to to `Client`.|


### Plugin Types

Plugin types supported by [HotelX](/hotelx/):

* [Pre Step](../processor): First execution on every _step_.
* [Hotel Map](../mapping): Hotel mapping codes.
* [Board Map](../mapping): Board mapping codes.
* [Room Map](../mapping): Room mapping codes.
* [Currency Conversion](../converter): Currency rate conversion.
* [Net Price](../net-price): Calculate the net price. 
* [Markup](../markup): Markups to `supplier` price.
* [Aggregation](../aggregation): Aggregate multiple `supplier` options.
* [Post Step](../processor): Last execution on every _step_.


### Plugin Context Execution

Once _message_ enters on [HotelX](/hotelx/) it flows over different _flows_ and _steps_. That's why  _plugins_ are executed in different _contexts_.

_Context_ allows:

* Read objects involved in current _query_ and/or _mutations_.
* Read objects available in all [HotelX](/hotelx/) operations.

With _context_ information developers can personalize _plugin_ features, more information about plugin development can be found [here](../development).

### Plugin Step Execution

[HotelX](/hotelx/) determine the order and [plugin types](#plugintypes) executed for each _step_.


| | **search** | **quote** | **hotelBook** | **hotelCancel** |
| --- | --- | --- | --- | --- |
| _Request_ | [Pre Step](../processor)<br>[Hotel Map](../mapping)<br>[Post Step](../processor)|[Pre Step](../processor)<br>[Post Step](../processor)|[Pre Step](../processor)<br>[Post Step](../processor)|[Pre Step](../processor) <br>[Post Step](../processor)|[Post Step](../processor)|[Pre Step](../processor) <br>[Post Step](../processor)|
| _Request Access_ | [Pre Step](../processor)<br>[Post Step](../processor) |[Pre Step](../processor) <br>[Post Step](../processor)|[Pre Step](../processor) <br>[Post Step](../processor)|[Pre Step](../processor) <br>[Post Step](../processor)|
| _Response Option_ |[Pre Step](../processor)<br>[Board Map](../mapping)<br>[Room Map](../mapping)<br>[Rate Map](#../rate-map)<br>[Currency Conversion](../currency-conversion)<br>[Net Price](../net-price)<br>[CommissionX](../net-price#commissionX)<br>[Markup](../markup)<br>[Aggregation](../aggregation)<br>[Post Step](../processor)<br>[Safety Margin](../safety_margin)| [Pre Step](../processor)<br>[Board Map](../mapping)<br>[Room Map](../mapping)<br>[Currency Conversion](../currency-conversion)<br>[Net Price](../net-price)<br>[CommissionX](../net-price#commissionX)<br>[Markup](../markup)<br>[Post Step](../processor)|[Pre Step](../processor)<br>[Board Map](../mapping)<br>[Room Map](../mapping)<br>[Currency Conversion](../currency-conversion)<br>[Net Price](../net-price)<br>[CommissionX](../net-price#commissionX)<br>[Markup](../markup)<br>[Post Step](../processor) |[Pre Step](../processor)<br>[Board Map](../mapping)<br>[Room Map](../mapping)<br>[Currency Conversion](../currency-conversion)<br>[Net Price](../net-price)<br>[Post Step](../processor)|
| _Response_ |[Pre Step](../processor)<br>[Aggregation](../aggregation)<br>[Post Step](../processor)|[Pre Step](../processor) <br>[Post Step](../processor)|[Pre Step](../processor) <br>[Post Step](../processor)|[Pre Step](../processor) <br>[Post Step](../processor)|



### Ftp Endpoint

ftp://ftp.xmltravelgate.com

{{% alert theme="info" %}}
You will receive access credentials to the FTP server with your Welcome Pack
{{% /alert %}}

### Directory Format

#### Root path

The structure of the directory should be in the below format, all files should be inside this directory

/F[Folder code]\_[Unique code]/HotelX\_[Unique code]/ 

* F[Folder code]\_[Unique code] 

    * **Folder code**: corresponds to the folder number. 
    * **Unique code**: corresponds to the folder unique code in our system.

* HotelX\_[Unique code] 

    * **Unique code**: corresponds to the HotelX unique code in our system.

#### Example

* `/F**0**\_**178**/HotelX\_**179**`