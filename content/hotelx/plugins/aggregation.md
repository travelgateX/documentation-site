+++
title = "Aggregation"
pagetitle = "Aggregation"
description = "Aggregate different Suppliers response based on different criteria."
icon = "fa-compress"
weight = 3
alwaysopen = false
+++

**Aggregation plugins** extends [HotelX](/hotelx/) allowing filtering `Supplier` options and responses using different business rules.

### KeyFilter

Filters `Supplier` options based on _field keys_ applying a selector _function_ over _field values_.

It's based on [SQL Aggregate Functions](https://www.postgresql.org/docs/current/static/functions-aggregate.html) but filtering, not aggregating.

* **_Field Keys_** as a combination of:
  * SupplierCode 
  * HotelCode
  * BoardCode
  * RoomCode
  * Refundable
  * Market
  * PaymentType
  * Promotion
  * Supplement
  * Surcharges
  * Rate rules 

* **_Functions_**:
  * Min
  * Max

* **_Field Values_**:
  * PriceNet
  * PriceGross

### Parameters

|key|value type|condition|description|
|---|----|----|---|
|primaryKey|string|mandatory|is the criteria used to aggregate, the value is a set of criteria separated by commas, the possible values are:<br>example: “hotel,supplier,room”|
|function|string|optional|possible values: “min” and “max”, min is the default value.<br>The chosen option will be the cheapest when min function, and the expensivest when max function|
|priceField|string|optional|possible values: “net” or “gross”, net is the default value.<br>The function will operate over the field determined by this parameter|
|currency|string|optional|exchanges a price’s currency before applicating the filter. In order to make use of this functionality, the same setup in the CurrencyX plugin is needed.|
|size|int|optional|number of options in each aggregation group, the default value is 1|


### Processor

It's implemented as a [Processor plugin](/hotelx/plugins/processor)

### Execution example

```
{
    "plugins": {
        "step": "RESPONSE_OPTION/RESPONSE",
        "pluginsType": [
            {
                "type": "AGGREGATION",
                "name": "cheapest_price",
                "parameters": [
                    {
                        {"key": "primaryKey","value": "hotel,supplier,room"},
						{"key": "function","value": "min"},
						{"key": "priceField","value": "net"},
						{"key": "currency","value": "EUR"},
						{"key": "size","value": 1}
                    }
                ]
            }
        ]
    }
}
```
