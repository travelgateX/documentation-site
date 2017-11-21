+++
title = "Stages"
pagetitle = ""
description = "Plugin Execution Stages"
icon = "fa-code-fork"
weight = 1
alwaysopen = false
+++

# Search Stages
[Search Booking Flow](/hotelx/concepts/booking-flow#search) pipeline stages.

## Request
_After_ `Buyer` requests _search hotel_ message.

| Parameter | Description |
| --- | --- |
| HotelCriteriaSearchInput | `Buyer` HotelCriteriaSearchInput |  
| HotelSettingsInput | Merged settings from Request and hotelX configuration |

### Default Plugins
1. [ValidateRequest](../reference)
* [MapRequest](../reference)

## Access Request
_After_ `Accesses` has been resolved and _before_ send request to `Supplier` using `Access` configuration.

| Parameter | Description |
| --- | --- |
| HotelCriteriaSearchInput | `Buyer` HotelCriteriaSearchInput |  
| HotelSettingsInput | Merged settings from Request and hotelX configuration |
| Access | `Access` configuration to supplier |

### Default Plugins

## Option Response
_After_ `Supplier` responses _search hotel_ message. For every option returned by `Supplier`

| Parameter | Description |
| --- | --- |
| HotelOptionSearch | Option returned by `Supplier` |  

### Default Plugins
1. [MapResponse](../reference)
* [PriceResponse](../reference)

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