+++
title = "Reference"
pagetitle = "Plugins Reference"
description = "Available Plugins to use"
icon = "fa-book"
weight = 2
alwaysopen = false
+++

| Name | Description | Parameters | Stages|
| --- | --- | --- |
| _ValidateRequest_ | Validate user request | [Request](../stages#request)|
| _MapRequest_ | Map Hotels ||[Request](../stages#request)|
| _SplitAccesses_ | Split requests to multiple `Suppliers`| |
| _MapResponse_ | Map _Hotels_, _Rooms_ and _Boards_ |  mapHotels **bool** <br> mapRooms **bool** <br> mapBoards **bool** |[Option Response](../stages#optionresponse)|
| _PriceResponse_ | Currency conversion and markups |  currencyConversion **bool** <br> applyMarkups **bool** | [Option Response](../stages#optionresponse)|
| _AggregateResponse_ | Aggregates options based on Primary Key and Price Comparer | primaryKey **string** <br> priceComparer **string** | [Aggregate Response](../stages#optionresponse) <br> [Response](../stages#response)|


