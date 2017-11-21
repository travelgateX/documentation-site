+++
title = "Reference"
pagetitle = "Plugins Reference"
description = "Available Plugins to use"
icon = "fa-book"
weight = 2
alwaysopen = false
+++

| Name | Description | Parameters |
| --- | --- | --- |
| _ValidateRequestPluginX_ | Validate user request | |
| _MapRequestPluginX_ | Map Hotels ||
| _SplitAccessesPluginX_ | Split requests to multiple `Suppliers`| |
| _MapResponsePluginX_ | Map _Hotels_, _Rooms_ and _Boards_ |  mapHotels **bool** <br> mapRooms **bool** <br> mapBoards **bool** |
| _PriceResponsePluginX_ | Currency conversion and markups |  currencyConversion **bool** <br> applyMarkups **bool** |
| _AggregateResponsePluginX_ | Aggregates options based on Primary Key and Price Comparer | primaryKey **string** <br> priceComparer **string** |


