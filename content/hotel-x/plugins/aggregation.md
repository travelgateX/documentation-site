+++
title = "Aggregation"
pagetitle = "Aggregation"
description = "Aggregate different Suppliers response based on different criteria."
icon = "fa-compress"
weight = 3
alwaysopen = false
+++

**Aggregation plugins** extends [HotelX](/hotel-x/) allowing aggregation `Supplier` options and responses using different business rules.

### Aggregation Key

Aggregate `Supplier` options based on _field keys_ applying a selector _function_ over _field values_.

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

### Name
The aggregation mode currently only supports one mode "cheapest_price". You will need to set this in the "name" field when using the plugin as shown in the example below.


### Parameters

|key|value type|condition|description|
|---|----|----|---|
|primaryKey|string|mandatory|It is the criteria used to aggregate, the value is a set of criteria separated by commas, the possible values are:<br>example: “hotel,supplier,room”|


### Processor

It's implemented as a [Processor plugin](/hotel-x/plugins/processor)


### Where to place

Use this plugin by adding it to the [settings](https://docs.travelgatex.com/hotel-x/concepts/settings/) in your HotelX Search Query.


### Execution example

```
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
