+++
title = "Overview"
pagetitle = ""
description = "Flow execution with Steps and Plugins"
icon = "fa-code-fork"
weight = 1
alwaysopen = false
+++

# Introduction

_Plugins_ are custom code, executed in [TravelgateX](/hotelx/) servers, that add or modify specific features. `Partner` can develop custom _plugins_, but in most cases, [HotelX](/hotelx/) offers enough basic _plugins_ to use.

# Flows

[HotelX](/hotelx/) _query_ or _mutation_ determine what flow is executed: 

* [search](/hotelx/concepts/booking-flow#search)
* [quote](/hotelx/concepts/booking-flow#quote)
* [hotelBook](/hotelx/concepts/booking-flow#book)
* [hotelCancel](/hotelx/concepts/management-flow#cancel)

# Steps

During a _flow_, _steps_ execute _plugins_ sequentially.

| Step | When is executed |
| --- | --- | 
| _Request_ | _After_ `Buyer` requests message to [HotelX](/hotelx/).|  
| _Request Access_ | _Before_ send request to `Supplier` using `Access` and _after_ `Accesses` has been calculated.|
| _Response Option_ |_After_ `Supplier` responds  message. For every option returned.|
| _Response Access_ |_After_ all `Access` options has been responded.|
| _Response_ | _Before_ [HotelX](/hotelx/) responds message to to `Buyer`.|


# Flow and Step Table

To determine which _steps_ are available in every _flow_ you can use next table:




# Steps


# Flow execution

| Step | **Search** | **Quote** | **Book** |
| --- | --- | --- |
| *Request* | HotelCriteriaSearchInput | `Buyer` HotelCriteriaSearchInput |  


| HotelSettingsInput | Merged settings from Request and hotelX configuration |


# Search Stages
[Search Booking Flow](/hotelx/concepts/booking-flow#search) pipeline stages.

## Request
_After_ `Buyer` requests _search hotel_ message.

| Parameter | Description |
| --- | --- |
| HotelCriteriaSearchInput | `Buyer` HotelCriteriaSearchInput |  
| HotelSettingsInput | Merged settings from Request and hotelX configuration |


## Access Request
_After_ `Accesses` has been resolved and _before_ send request to `Supplier` using `Access` configuration.

| Parameter | Description |
| --- | --- |
| HotelCriteriaSearchInput | `Buyer` HotelCriteriaSearchInput |  
| HotelSettingsInput | Merged settings from Request and hotelX configuration |
| Access | `Access` configuration to supplier |

## Option Response
_After_ `Supplier` responses _search hotel_ message. For every option returned by `Supplier`

| Parameter | Description |
| --- | --- |
| HotelOptionSearch | Option returned by `Supplier` |  

## Access Response
_After_ `Access` `Supplier` responses _search hotel_ message. For all options returned by `Supplier`

| Parameter | Description |
| --- | --- |
| HotelOptionSearchResponse | Search Response returned by `Supplier` |  

### Default Plugins
1. [AggregateResponse](../reference)

## Response
_Before_ `Buyer` response _search hotel_ message.

| Parameter | Description |
| --- | --- |
| HotelSearchReponse | Search Response to be returned to `Supplier` |  

### Default Plugins
1. [AggregateResponse](../reference)


# Types

[HotelX](/hotelx/) supports different plugin types: 

1. [Pre Process](./pre-process): First execution on every _step_.
* [Post Process](./post-process): Last execution on every _step_.
* [Hotel Map](./hotel-map): Hotel mapping codes.
* [Board Map](./board-map): Board mapping codes.
* [Room Map](./room-map): Room mapping codes.
* [Currency Conversion](./currency-conversion): Currency rate conversion. 
* [Markup](./markup): Markups to `supplier` price.
