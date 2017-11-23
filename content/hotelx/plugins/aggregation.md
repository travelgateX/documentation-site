+++
title = "Aggregation"
pagetitle = ""
description = "Aggregation plugins"
icon = "fa-compress"
weight = 3
alwaysopen = false
+++

# Overview

Aggregation plugins extends [HotelX](/hotelx/) allowing filtering `Supplier` options and respones using different business rules.

# KeyFilter

Filters `Supplier` options based on _field keys_ applying a selector _function_ over _field values_. 

It's based on [SQL Aggregate Functions](https://www.postgresql.org/docs/current/static/functions-aggregate.html) but filtering, not aggregating.

* **_Field Keys_** as a combination of:

    * SupplierCode
    * HotelCode
    * BoardCode
    * RoomCode
    * Refundable
* **_Functions_**:
    * Min
    * Max
* **_Field Values_**:
    * PriceNet
    * PriceGross

## Configuration

```json
{
}
```

## Parameters

### keys: [String!]
Values must be a valid Field Key.

### function: String!
Value must be a valid Function.

### value: String!
Value must be a valid Field Value.


 
 