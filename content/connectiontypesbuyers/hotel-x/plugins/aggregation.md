+++
title = "Aggregation"
pagetitle = "Aggregation"
description = "Aggregate different Suppliers response based on different criteria."
icon = "fa-compress"
weight = 3
alwaysopen = false
+++

**Aggregation plugin** extends [HotelX](/hotel-x/) allowing the aggregation of `Supplier` options using different business rules.

### What it does

Aggregation plugin aggregate `Supplier` options based on _field keys_ applying a selector _function_ over _field values_.

It's based on [SQL Aggregate Functions](https://www.postgresql.org/docs/current/static/functions-aggregate.html).

* **_Field Keys_** as a combination of:
  * binding
  * board
  * cancelPolicy
  * currency
  * hotel
  * market
  * payment
  * promotion
  * rateRules 
  * refundable
  * room
  * supplement
  * supplier
  * surcharges
  * ratePlan
  * status

### How to use it

Use this plugin by adding it to the [settings](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/settings/) in your HotelX Search Query.

### Parameters

|key|value type|condition|description|
|---|----|----|---|
|primaryKey|string|mandatory|It is the criteria used to aggregate, the value is a set of criteria separated by commas, the possible values are:<br>example: “hotel,supplier,room,status”|

### Name
The aggregation mode only supports by now one mode: "cheapest_price". You will need to set this in the "name" field when using the plugin as shown in the example below.

### Execution example

```json
{
    "plugins": {
        "step": "RESPONSE",
        "pluginsType": [
            {
                "type": "AGGREGATION",
                "name": "cheapest_price",
                "parameters": [
                    {
                        "key": "primaryKey",
                        "value": "hotel,supplier,room"
                    }
                ]
            }
        ]
    }
}
```

### File format

No files are needed in order to use this plugin.